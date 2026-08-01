-- ============================================
-- ADMIN FEEDBACK SETUP
-- Run this in Supabase SQL Editor AFTER supabase-user-feedback.sql
-- ============================================

-- ============================================
-- STEP 1: Ensure profiles table exists with role column
-- ============================================

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Add role column if the table already existed but is missing it
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS role text NOT NULL DEFAULT 'user';

-- Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles RLS: everyone can read profiles (needed for role checks)
DO $$ BEGIN
  CREATE POLICY "Anyone can view profiles"
    ON profiles FOR SELECT
    USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Profiles RLS: users can update their own profile (but not role)
DO $$ BEGIN
  CREATE POLICY "Users can update own profile"
    ON profiles FOR UPDATE
    USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ============================================
-- STEP 2: Auto-create profile on signup
-- ============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if any, then create
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- STEP 3: Create profile for your existing user
-- (so you don't get a "profile not found" error)
-- ============================================
INSERT INTO profiles (id, role)
SELECT id, 'user' FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- STEP 4: Admin RLS policies on user_feedback
-- Admins can view ALL feedback
-- ============================================
DO $$ BEGIN
  CREATE POLICY "Admins can view all feedback"
    ON user_feedback FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
      )
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Admins can update any feedback (to change status)
DO $$ BEGIN
  CREATE POLICY "Admins can update any feedback"
    ON user_feedback FOR UPDATE
    USING (
      EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
      )
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ============================================
-- STEP 5: Feedback comments table
-- ============================================
CREATE TABLE IF NOT EXISTS feedback_comments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  feedback_id uuid REFERENCES user_feedback(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE feedback_comments ENABLE ROW LEVEL SECURITY;

-- Everyone can read comments on feedback they can see
DO $$ BEGIN
  CREATE POLICY "Users can view comments on own feedback"
    ON feedback_comments FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM user_feedback
        WHERE user_feedback.id = feedback_comments.feedback_id
        AND user_feedback.user_id = auth.uid()
      )
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Admins can view all comments
DO $$ BEGIN
  CREATE POLICY "Admins can view all comments"
    ON feedback_comments FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
      )
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Only admins can insert comments
DO $$ BEGIN
  CREATE POLICY "Admins can insert comments"
    ON feedback_comments FOR INSERT
    WITH CHECK (
      EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
      )
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_feedback_comments_feedback_id ON feedback_comments(feedback_id);
CREATE INDEX IF NOT EXISTS idx_feedback_comments_created_at ON feedback_comments(created_at);

-- ============================================
-- STEP 6: Make yourself admin
-- Replace 'YOUR-USER-UUID-HERE' with your actual user ID
-- from Supabase Dashboard → Authentication → Users
-- ============================================
-- UPDATE profiles SET role = 'admin' WHERE id = 'YOUR-USER-UUID-HERE';
