-- ============================================
-- Quiz Attempts Table for MCQ Performance Tracking
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- ============================================

-- 1. Create the quiz_attempts table
CREATE TABLE quiz_attempts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  session_id text NOT NULL,            -- e.g. "2009-august"
  course_id text NOT NULL,             -- e.g. "2009-august-civil-litigation"
  course_name text NOT NULL,           -- e.g. "Civil Litigation"
  year integer NOT NULL,               -- e.g. 2009
  session text NOT NULL,               -- e.g. "August"
  score integer NOT NULL,              -- number of correct answers
  total_questions integer NOT NULL,    -- total questions in quiz
  percentage integer NOT NULL,         -- score percentage (0-100)
  time_elapsed integer NOT NULL,       -- time taken in seconds
  quiz_mode text DEFAULT 'course',     -- 'course' or 'exam_styled'
  timer_mode text DEFAULT 'count_up',  -- 'count_up' or 'count_down'
  timer_duration_minutes integer DEFAULT 7,
  correct_count integer NOT NULL,
  incorrect_count integer NOT NULL,
  skipped_count integer NOT NULL,
  bonus_count integer NOT NULL DEFAULT 0,
  completed_at timestamptz DEFAULT now() NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- 2. Enable Row Level Security
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies — users can only access their own data
CREATE POLICY "Users can view own quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own quiz attempts"
  ON quiz_attempts FOR DELETE
  USING (auth.uid() = user_id);

-- 4. Indexes for fast queries
CREATE INDEX idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX idx_quiz_attempts_session_course ON quiz_attempts(session_id, course_id);
CREATE INDEX idx_quiz_attempts_completed_at ON quiz_attempts(completed_at DESC);
