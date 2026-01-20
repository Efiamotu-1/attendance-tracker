<div align="center">
  <h1>📚 AttendanceTracker</h1>
  <p><strong>Never fall below 75% attendance again.</strong></p>
  
  <p>A modern, intelligent attendance tracking application built for university students who need to monitor their class attendance to meet mandatory requirements.</p>

  ![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)

  [Live Demo](#) · [Report Bug](https://github.com/Efiamotu-1/attendance-tracker/issues) · [Request Feature](https://github.com/Efiamotu-1/attendance-tracker/issues)
</div>

---

## 🎯 The Problem

In many universities worldwide, **75% attendance is mandatory** to be eligible for exams. Students often:
- Lose track of their attendance across multiple courses
- Realize too late that they're at risk of being barred from exams
- Struggle with manual tracking in spreadsheets or notebooks

**AttendanceTracker solves this** by providing real-time analytics, risk alerts, and intelligent predictions.

---

## ✨ Features

### 📊 Smart Dashboard
- Real-time attendance percentage for all courses
- Visual progress bars with color-coded status (green ≥75%, red <75%)
- "Courses at Risk" alert showing courses below threshold
- Interactive line graph for attendance trends

### 📚 Course Management
- Add unlimited courses (compulsory & elective)
- Department categorization
- Edit and delete with confirmation modals
- Per-course attendance history

### 🧮 Classes-I-Can-Miss Calculator
- Know exactly how many classes you can skip
- Real-time calculation based on current attendance
- Prevents accidental drops below 75%

### 📝 Attendance Logging
- Quick one-click attendance logging
- Track whether class was held vs attended
- Date picker for backdated entries
- Immutable records for accuracy

### 🎨 Modern UI/UX
- Light & Dark mode toggle
- Fully responsive design
- Smooth animations and transitions
- Custom dropdown and date picker components

### 🔐 Secure Authentication
- Email/password authentication via Supabase
- Row-level security (RLS) for data isolation
- Each user's data is completely private

---

## 🖼️ Screenshots

<div align="center">
  <p><em>Dashboard with course performance cards and attendance trends</em></p>
</div>

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, React Router v6 |
| **Styling** | Tailwind CSS, Custom Components |
| **State Management** | TanStack Query (React Query) |
| **Backend** | Supabase (PostgreSQL, Auth, RLS) |
| **Build Tool** | Vite |
| **Icons** | Heroicons (react-icons/hi2) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works)

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

3. **Set up Supabase**
   
   Create a new Supabase project and run the following SQL:

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

   -- Enable RLS
   ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
   ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

   -- RLS Policies
   CREATE POLICY "Users can manage own courses" ON courses
     FOR ALL USING (auth.uid() = user_id);

   CREATE POLICY "Users can manage attendance for own courses" ON attendance
     FOR ALL USING (
       course_id IN (SELECT id FROM courses WHERE user_id = auth.uid())
     );
   ```

4. **Configure environment**
   
   Update `src/services/supabase.js` with your Supabase URL and anon key.

5. **Start development server**
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
src/
├── context/          # Theme context provider
├── features/         # Feature-based modules
│   ├── authentication/
│   ├── courses/
│   └── reports/
├── hooks/            # Custom React hooks
├── pages/            # Route components
├── services/         # API layer (Supabase)
└── ui/               # Reusable UI components
```

---

## 🔮 Roadmap

- [x] Core attendance tracking
- [x] Dark/Light mode
- [x] Course performance analytics
- [x] Line graph visualization
- [x] Classes-I-Can-Miss calculator
- [ ] Push notifications for low attendance
- [ ] Calendar integration
- [ ] PDF report export
- [ ] PWA support (offline mode)
- [ ] Semester archiving

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
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

## 🙏 Acknowledgments

- Design inspiration from Jonas Schmedtmann's Ultimate React Course
- Icons by [Heroicons](https://heroicons.com/)
- Backend powered by [Supabase](https://supabase.com/)

---

<div align="center">
  <p>If this project helped you, please consider giving it a ⭐️</p>
</div>
