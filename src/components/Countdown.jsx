import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-10-22T14:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days, sinhala: "දින" },
    { label: "Hours", value: timeLeft.hours, sinhala: "පැය" },
    { label: "Minutes", value: timeLeft.minutes, sinhala: "මිනිත්තු" },
    { label: "Seconds", value: timeLeft.seconds, sinhala: "තත්පර" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#D9B37E]/10 to-[#D9B37E]/5 border-2 border-[#D9B37E]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D9B37E]/30 hover:border-[#D9B37E] cursor-default text-center"
        >
          <div className="text-5xl md:text-6xl font-bold text-[#D9B37E] mb-2 font-mono drop-shadow-md">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-[#FBFBFB] text-sm md:text-base font-medium uppercase tracking-widest">
            {unit.label}
          </div>
          <div className="text-[#D9B37E] text-xs md:text-sm mt-2 opacity-80">
            {unit.sinhala}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
