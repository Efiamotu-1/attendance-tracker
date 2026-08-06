<div align="center">
  <h1>🎓 NLS AttendanceTracker & Bar Finals Prep Suite</h1>
  <p><strong>Master your 70% mandatory attendance threshold & excel in Nigerian Law School Bar Finals MCQs.</strong></p>
  
  <p>A comprehensive, intelligent academic management and exam preparation platform designed specifically for Nigerian Law School (NLS) students to track daily attendance, test their knowledge with timed past question MCQs, compete on leaderboards, and access campus survival guides.</p>

  ![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)

  [Report Bug](https://github.com/Efiamotu-1/attendance-tracker/issues) · [Request Feature](https://github.com/Efiamotu-1/attendance-tracker/issues)
</div>

---

## 🎯 The Core Purpose & Problem Solved

At the **Nigerian Law School (NLS)**, strict regulations mandate meeting an **official 70% daily attendance threshold** across the academic term (15 weeks, Mon–Fri schedule / 75 total class days, requiring at least 53 days attended to pass). Falling below this threshold results in being barred from sitting the Bar Final Examinations.

Furthermore, students face extreme academic pressure preparing for **Bar Finals Multiple Choice Questions (MCQs)** across core subjects:
- Civil Litigation
- Criminal Litigation
- Corporate Law Practice
- Property Law Practice
- Professional Ethics & Conduct

**NLS AttendanceTracker & Bar Finals Prep Suite** bridges these needs into a unified portal:
1. **Attendance Engine**: Tracks daily attendance under NLS regulations, calculating real-time safety buffers and countdowns for days needed to pass.
2. **Bar Finals MCQ Engine**: Interactive practice platform featuring over 1,500+ authentic Bar Finals past questions, topic-based quizzes, custom timed exams, instant feedback, and global student leaderboards.
3. **NLS Companion & Resources**: Campus survival tips (food, cab contacts, academic strategies) and downloadable original past question papers.

---

## ✨ Comprehensive Feature Suite

### 📅 Official NLS Attendance Tracker
- **NLS Policy Calculation**: Tracks attendance based on daily attendance records (1 class day = 1 unit) over the official 15-week term schedule (75 total target days).
- **Pass/Fail Barometer**: Dynamically computes whether you hit the mandatory 70% threshold (53 days minimum).
- **Class-Miss Margin Calculator**: Displays exactly how many remaining classes you can safely miss without risking eligibility.
- **Custom Date Range Filter**: Analyze attendance performance across custom date windows within the academic term.
- **Course & Department Tracking**: Log specific course attendance, priorities, and historical logs.

### 📝 Bar Finals MCQ Practice Portal
- **Extensive Question Bank**: Over 1,500+ curated MCQ questions covering all 5 Law School core courses across historical Bar Finals exam sessions (e.g., 2009–2024).
- **Flexible Exam Modes**:
  - **Full Session Mock Exams**: Simulate realistic Bar Finals MCQ exams (e.g., 100 questions in 60 mins).
  - **Subject-Specific Past Questions**: Filter by course (Civil, Criminal, Corporate, Property, Ethics).
  - **Topic-by-Topic Quizzes**: Test granular topic knowledge (e.g., *Jurisdiction*, *Company Formation*, *Search Warrants*).
- **Customizable Quiz Timer**: Choose timed mode with customizable minutes per attempt or untimed study mode.
- **Instant Detailed Explanations**: Immediate answer feedback with thorough legal explanations and statutory citations.

### 📊 Performance Analytics & Competitive Leaderboards
- **Detailed Attempts History**: View detailed breakdown of past score percentages, correct vs. incorrect answers, and time taken.
- **Global Leaderboard**: Track student rankings across top scores, accuracy, and total quizzes completed to motivate peer learning.

### 💡 NLS Campus Guide & Study Tips
- **Campus Survival Guides**: Curated tips for NLS campuses (food options, canteen recommendations, study hacks).
- **Directory Contacts**: Quick-copy phone directory for campus cabs and essential logistics.
- **Downloadable Material**: Direct access to downloadable PDF and DOCX Bar Finals MCQ question papers.

### 🎨 Modern UI/UX & Security
- **Dual Theme Support**: Full Dark Mode and Light Mode styling tailored for night study sessions.
- **Authentication & Security**: Protected user accounts via Supabase Auth with Row-Level Security (RLS).

---

## 🖼️ Application Preview

```
+-----------------------------------------------------------------------+
|  🎓 NLS AttendanceTracker & Bar Finals Prep Suite                    |
+-----------------------------------------------------------------------+
|  📊 Dashboard          |  📅 Attendance Track  |  📝 MCQ Exam Portal  |
|  - Overall % (70% Target)|  - Daily Log        |  - Past Questions   |
|  - Days Needed: 53/75  |  - Custom Range      |  - Topic Quizzes    |
|  - Safe Miss Margin    |  - Course History    |  - Leaderboard      |
+-----------------------------------------------------------------------+
|  💡 Campus Tips & Cab Directory  |  📥 Past Question Downloads        |
+-----------------------------------------------------------------------+
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | React 18, React Router v6 |
| **Build & Tooling** | Vite |
| **Styling & UI** | Tailwind CSS, Styled Components |
| **State & Data Fetching** | TanStack React Query v4 |
| **Backend & Database** | Supabase (PostgreSQL, Authentication, Row Level Security) |
| **Icons & Notifications** | Heroicons (`react-icons/hi2`), React Hot Toast |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20.x or higher
- **Package Manager**: npm or yarn
- **Database Account**: Supabase project (Free tier supported)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Efiamotu-1/attendance-tracker.git
   cd attendance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase Database**
   
   Execute the following SQL queries in your Supabase SQL Editor to set up the necessary tables and Row Level Security policies:

   ```sql
   -- Courses table
   CREATE TABLE courses (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     course_title TEXT NOT NULL,
     course_description TEXT,
     course_priority BOOLEAN DEFAULT true,
     department TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Attendance table
   CREATE TABLE attendance (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
     class_date DATE NOT NULL,
     class_held INTEGER DEFAULT 0,
     class_attended INTEGER DEFAULT 0,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Quiz Attempts table
   CREATE TABLE quiz_attempts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     user_name TEXT,
     session_id TEXT NOT NULL,
     course_id TEXT,
     score INTEGER NOT NULL,
     total_questions INTEGER NOT NULL,
     percentage NUMERIC NOT NULL,
     time_spent INTEGER,
     completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable RLS
   ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
   ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
   ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

   -- RLS Policies
   CREATE POLICY "Users can manage own courses" ON courses
     FOR ALL USING (auth.uid() = user_id);

   CREATE POLICY "Users can manage attendance for own courses" ON attendance
     FOR ALL USING (
       course_id IN (SELECT id FROM courses WHERE user_id = auth.uid())
     );

   CREATE POLICY "Users can view all quiz attempts for leaderboard" ON quiz_attempts
     FOR SELECT USING (true);

   CREATE POLICY "Users can insert own quiz attempts" ON quiz_attempts
     FOR INSERT WITH CHECK (auth.uid() = user_id);
   ```

4. **Configure Environment**
   
   Configure your Supabase credentials in `src/services/supabase.js`:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL';
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
attendance-tracker/
├── public/                 # Static assets & downloadable MCQ files
├── src/
│   ├── context/            # Theme context provider (Dark/Light mode)
│   ├── data/               # MCQ question banks & topic quiz data
│   │   ├── mcqQuestions.js
│   │   ├── revisedMcqQuestion.js
│   │   └── topicQuizzes.js
│   ├── features/           # Feature-based architecture
│   │   ├── authentication/ # Login, signup, reset password logic
│   │   ├── courses/        # Course management hooks and API
│   │   ├── mcq/            # Quiz engines, timers, leaderboard logic
│   │   ├── reports/        # Attendance logging & report generation
│   │   └── feedback/       # Admin & user feedback module
│   ├── hooks/              # Reusable custom React hooks
│   ├── pages/              # Primary route pages (Dashboard, McqQuiz, etc.)
│   ├── services/           # Supabase client & API services
│   └── ui/                 # Reusable UI components & layouts
└── README.md
```

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the project repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Habeeb Efiamotu Musa Owolewa**

[![GitHub](https://img.shields.io/badge/GitHub-@Efiamotu--1-181717?style=flat-square&logo=github)](https://github.com/Efiamotu-1)
[![Twitter](https://img.shields.io/badge/Twitter-@EFYAMOTU-1DA1F2?style=flat-square&logo=twitter)](https://twitter.com/EFYAMOTU)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Musa--habeeb-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/Musa-habeeb/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

<div align="center">
  <p>If this application helps you prepare for the Bar Finals and manage your academic journey, please give it a ⭐️!</p>
</div>

