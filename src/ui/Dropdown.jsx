import { useState, useRef, useEffect } from 'react';
import { HiChevronDown, HiCheck } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

function Dropdown({ options, value, onChange, placeholder = 'Select an option', disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isDarkMode } = useTheme();

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(optionValue) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative">
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
        <span className={!selectedOption ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : ''}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <HiChevronDown 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: isDarkMode ? '#94a3b8' : '#6b7280' }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute z-50 w-full mt-2 rounded-xl border shadow-xl overflow-hidden animate-fade-in"
          style={{
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            borderColor: isDarkMode ? '#334155' : '#e5e7eb',
            boxShadow: isDarkMode 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4)' 
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="max-h-60 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                  value === option.value 
                    ? '' 
                    : ''
                }`}
                style={{
                  backgroundColor: value === option.value 
                    ? (isDarkMode ? 'rgba(5, 150, 105, 0.15)' : 'rgba(5, 150, 105, 0.1)')
                    : 'transparent',
                  color: value === option.value 
                    ? '#059669' 
                    : (isDarkMode ? '#e2e8f0' : '#374151'),
                }}
                onMouseEnter={(e) => {
                  if (value !== option.value) {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#334155' : '#f3f4f6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== option.value) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span className="font-medium">{option.label}</span>
                {value === option.value && (
                  <HiCheck className="w-5 h-5" style={{ color: '#059669' }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
