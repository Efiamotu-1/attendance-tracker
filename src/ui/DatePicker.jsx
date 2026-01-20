import { useState, useRef, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiCalendarDays } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function DatePicker({ value, onChange, placeholder = 'Select date', disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pickerRef = useRef(null);
  const { isDarkMode } = useTheme();

  const selectedDate = value ? new Date(value) : null;

  useEffect(() => {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
    }
  }, [value]);

  function getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }

    return days;
  }

  function handleDateSelect(date) {
    const formattedDate = date.toISOString().split('T')[0];
    onChange(formattedDate);
    setIsOpen(false);
  }

  function handlePrevMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  }

  function isToday(date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  function isSelected(date) {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  const days = getDaysInMonth(currentMonth);

  return (
    <div ref={pickerRef} className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded-xl border text-left flex items-center justify-between transition-all ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${
          isOpen 
            ? 'ring-2 ring-emerald-500/30 border-emerald-500' 
            : ''
        }`}
        style={{
          backgroundColor: isDarkMode ? '#1e293b' : '#f9fafb',
          borderColor: isOpen ? '#059669' : (isDarkMode ? '#475569' : '#d1d5db'),
          color: isDarkMode ? '#ffffff' : '#111827',
        }}
      >
        <span className={!value ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : ''}>
          {value ? formatDisplayDate(value) : placeholder}
        </span>
        <HiCalendarDays 
          className="w-5 h-5"
          style={{ color: isDarkMode ? '#94a3b8' : '#6b7280' }}
        />
      </button>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div 
          className="absolute z-50 w-80 mt-2 rounded-xl border shadow-xl overflow-hidden animate-fade-in"
          style={{
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            borderColor: isDarkMode ? '#334155' : '#e5e7eb',
            boxShadow: isDarkMode 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)' 
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Month Navigation */}
          <div 
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: isDarkMode ? '#334155' : '#e5e7eb' }}
          >
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg transition-colors"
              style={{ 
                color: isDarkMode ? '#94a3b8' : '#6b7280',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#334155' : '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <span 
              className="font-semibold"
              style={{ color: isDarkMode ? '#f1f5f9' : '#1f2937' }}
            >
              {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1.5 rounded-lg transition-colors"
              style={{ 
                color: isDarkMode ? '#94a3b8' : '#6b7280',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#334155' : '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 px-2 py-2">
            {DAYS.map(day => (
              <div 
                key={day} 
                className="text-center text-xs font-medium py-2"
                style={{ color: isDarkMode ? '#64748b' : '#9ca3af' }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 px-2 pb-3 gap-1">
            {days.map((dayObj, index) => {
              const isSelectedDay = isSelected(dayObj.date);
              const isTodayDay = isToday(dayObj.date);
              
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDateSelect(dayObj.date)}
                  className={`p-2 text-sm rounded-lg transition-all font-medium ${
                    !dayObj.isCurrentMonth ? 'opacity-30' : ''
                  }`}
                  style={{
                    backgroundColor: isSelectedDay 
                      ? '#059669' 
                      : isTodayDay 
                        ? (isDarkMode ? 'rgba(5, 150, 105, 0.2)' : 'rgba(5, 150, 105, 0.1)')
                        : 'transparent',
                    color: isSelectedDay 
                      ? '#ffffff' 
                      : isTodayDay
                        ? '#059669'
                        : (isDarkMode ? '#e2e8f0' : '#374151'),
                    border: isTodayDay && !isSelectedDay ? '1px solid #059669' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelectedDay) {
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#334155' : '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelectedDay) {
                      e.currentTarget.style.backgroundColor = isTodayDay 
                        ? (isDarkMode ? 'rgba(5, 150, 105, 0.2)' : 'rgba(5, 150, 105, 0.1)')
                        : 'transparent';
                    }
                  }}
                >
                  {dayObj.date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div 
            className="flex items-center justify-between px-4 py-3 border-t"
            style={{ 
              borderColor: isDarkMode ? '#334155' : '#e5e7eb',
              backgroundColor: isDarkMode ? '#0f172a' : '#f9fafb'
            }}
          >
            <button
              type="button"
              onClick={() => {
                onChange('');
                setIsOpen(false);
              }}
              className="text-sm font-medium transition-colors"
              style={{ color: isDarkMode ? '#94a3b8' : '#6b7280' }}
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => handleDateSelect(new Date())}
              className="text-sm font-medium transition-colors"
              style={{ color: '#059669' }}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
