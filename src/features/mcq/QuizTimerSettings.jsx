import React, { useEffect, useState } from "react";
import { HiOutlineClock, HiOutlineInformationCircle } from "react-icons/hi2";

function QuizTimerSettings({
  value,
  onChange,
  isDarkMode,
  defaultDurationValue = 7,
  defaultDurationUnit = "min",
  label = "Timer mode",
}) {
  const timerMode = value?.mode ?? "count_up";
  const durationValue = value?.durationValue ?? defaultDurationValue;
  const durationUnit = value?.durationUnit ?? defaultDurationUnit;
  const durationMinutes =
    durationUnit === "hour" ? durationValue * 60 : durationValue;
  const [durationInput, setDurationInput] = useState(String(durationValue));

  useEffect(() => {
    setDurationInput(String(durationValue));
  }, [durationValue]);

  const handleModeChange = (mode) => {
    onChange?.({
      mode,
      durationValue,
      durationUnit,
      durationMinutes,
    });
  };

  const handleDurationValueChange = (event) => {
    const nextValue = event.target.value;
    setDurationInput(nextValue);

    if (nextValue === "") return;

    const parsedValue = Number(nextValue);
    const sanitizedValue = Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : defaultDurationValue;
    onChange?.({
      mode: timerMode,
      durationValue: sanitizedValue,
      durationUnit,
      durationMinutes: durationUnit === "hour" ? sanitizedValue * 60 : sanitizedValue,
    });
  };

  const handleDurationUnitChange = (event) => {
    const nextUnit = event.target.value;
    const nextMinutes = nextUnit === "hour" ? durationValue * 60 : durationValue;
    onChange?.({
      mode: timerMode,
      durationValue,
      durationUnit: nextUnit,
      durationMinutes: nextMinutes,
    });
  };

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 text-left ${
        isDarkMode ? "bg-dark-800/60 border-dark-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <HiOutlineClock
          className={`w-4 h-4 sm:w-5 sm:h-5 ${
            isDarkMode ? "text-primary-400" : "text-primary-500"
          }`}
        />
        <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {label}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => handleModeChange("count_up")}
          className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
            timerMode === "count_up"
              ? "border-primary-500 bg-primary-500/10 text-primary-600"
              : isDarkMode
              ? "border-dark-600 text-dark-300 hover:bg-dark-700"
              : "border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5">
            <span>Count up</span>
            <span
              title="Starts at 00:00 and keeps increasing until you finish."
              className="inline-flex"
            >
              <HiOutlineInformationCircle className="w-4 h-4" />
            </span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => handleModeChange("count_down")}
          className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
            timerMode === "count_down"
              ? "border-primary-500 bg-primary-500/10 text-primary-600"
              : isDarkMode
              ? "border-dark-600 text-dark-300 hover:bg-dark-700"
              : "border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5">
            <span>Count down</span>
            <span
              title="Starts from your chosen duration and ends when time runs out."
              className="inline-flex"
            >
              <HiOutlineInformationCircle className="w-4 h-4" />
            </span>
          </div>
        </button>
      </div>

      {timerMode === "count_down" && (
        <div className="mt-3">
          <label
            className={`text-xs sm:text-sm font-medium ${
              isDarkMode ? "text-dark-400" : "text-gray-600"
            }`}
          >
            Duration
          </label>
          <div className="mt-2 flex items-center gap-2 sm:gap-3">
            <div
              className={`flex flex-1 items-stretch rounded-xl border overflow-hidden ${
                isDarkMode ? "border-dark-600 bg-dark-700" : "border-gray-200 bg-white"
              }`}
            >
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={durationInput}
                onChange={handleDurationValueChange}
                placeholder="30"
                className={`min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none ${
                  isDarkMode ? "text-white placeholder:text-dark-500" : "text-gray-900 placeholder:text-gray-400"
                }`}
              />
              <span
                className={`flex items-center px-2 text-lg font-semibold border-l ${
                  isDarkMode ? "border-dark-600 text-dark-400" : "border-gray-200 text-gray-500"
                }`}
              >
                :
              </span>
              <button
                type="button"
                onClick={() => handleDurationUnitChange({ target: { value: durationUnit === "min" ? "hour" : "min" } })}
                className={`min-w-[84px] px-3 py-2.5 text-sm font-medium border-l transition-colors ${
                  isDarkMode
                    ? "border-dark-600 text-dark-200 hover:bg-dark-600/60"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {durationUnit}
              </button>
            </div>
          </div>
          <p className={`mt-2 text-[11px] sm:text-xs ${isDarkMode ? "text-dark-500" : "text-gray-500"}`}>
            Type any custom duration, then tap the unit to switch between minutes and hours.
          </p>
        </div>
      )}
    </div>
  );
}

export default QuizTimerSettings;
