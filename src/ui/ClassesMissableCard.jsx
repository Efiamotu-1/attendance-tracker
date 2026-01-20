import { useMemo } from 'react';
import { HiOutlineCalculator, HiExclamationCircle, HiCheckCircle } from 'react-icons/hi2';
import { useTheme } from '../context/ThemeContext';

function ClassesMissableCard({ course }) {
  const { isDarkMode } = useTheme();
  
  const calculation = useMemo(() => {
    const held = course.num_of_classes_held || 0;
    const attended = course.num_of_classes_attended || 0;
    const percentage = course.percentage || 0;
    
    // If no classes held yet
    if (held === 0) {
      return {
        canMiss: 0,
        status: 'neutral',
        message: 'No classes held yet'
      };
    }
    
    // Calculate how many more classes can be missed while staying ≥75%
    // Formula: attended / (held + x) >= 0.75
    // Solving for x: x <= (attended / 0.75) - held
    // Simplified: x <= (4 * attended - 3 * held) / 3
    
    const maxMissable = Math.floor((4 * attended - 3 * held) / 3);
    const canMiss = Math.max(0, maxMissable);
    
    // Calculate how many classes needed to attend to get back to 75%
    // If currently below 75%: (attended + x) / (held + x) >= 0.75
    // Solving: x >= 3 * held - 4 * attended
    const classesNeeded = Math.max(0, Math.ceil(3 * held - 4 * attended));
    
    if (percentage >= 75) {
      return {
        canMiss,
        status: 'safe',
        message: canMiss > 0 
          ? `You can miss ${canMiss} more class${canMiss > 1 ? 'es' : ''}`
          : "Attend next class to stay safe"
      };
    } else {
      return {
        canMiss: 0,
        classesNeeded,
        status: 'danger',
        message: `Attend ${classesNeeded} consecutive class${classesNeeded > 1 ? 'es' : ''} to reach 75%`
      };
    }
  }, [course]);

  return (
    <div className={`border rounded-2xl p-5 ${
      isDarkMode 
        ? 'bg-dark-800/50 border-dark-700' 
        : 'bg-white border-gray-200 shadow-sm'
    }`}>
      <div className='flex items-center gap-3 mb-4'>
        <div className={`p-2.5 rounded-xl ${
          calculation.status === 'safe' 
            ? 'bg-emerald-500/20' 
            : calculation.status === 'danger'
              ? 'bg-red-500/20'
              : 'bg-gray-500/20'
        }`}>
          <HiOutlineCalculator className={`w-5 h-5 ${
            calculation.status === 'safe' 
              ? 'text-emerald-500' 
              : calculation.status === 'danger'
                ? 'text-red-500'
                : 'text-gray-500'
          }`} />
        </div>
        <div>
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Classes I Can Miss
          </h3>
          <p className={`text-xs ${isDarkMode ? 'text-dark-500' : 'text-gray-500'}`}>
            While staying ≥75%
          </p>
        </div>
      </div>

      {calculation.status === 'safe' ? (
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-4xl font-bold text-emerald-500'>
              {calculation.canMiss}
            </span>
            <HiCheckCircle className='w-8 h-8 text-emerald-500' />
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-600'}`}>
            {calculation.message}
          </p>
        </div>
      ) : calculation.status === 'danger' ? (
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-4xl font-bold text-red-500'>
              {calculation.classesNeeded}
            </span>
            <HiExclamationCircle className='w-8 h-8 text-red-500' />
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-600'}`}>
            {calculation.message}
          </p>
          <div className={`text-xs p-2 rounded-lg ${
            isDarkMode ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-600'
          }`}>
            ⚠️ You're currently below 75%
          </div>
        </div>
      ) : (
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <span className={`text-4xl font-bold ${isDarkMode ? 'text-dark-400' : 'text-gray-400'}`}>
              —
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-500'}`}>
            {calculation.message}
          </p>
        </div>
      )}
    </div>
  );
}

export default ClassesMissableCard;
