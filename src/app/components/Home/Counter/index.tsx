"use client";
import React, { useEffect, useRef, useState } from "react";

// Data
const countersData = [
  { icon: "bi-check2-circle", value: 5, description: "Projects Completed" },
  { icon: "bi-clock-history", value: 2, description: "Years of Experience" },
  { icon: "bi-github", value: 15, description: "Total Repositories" },
  { icon: "bi-people", value: 25, description: "Happy Clients" },
];

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [counts, setCounts] = useState<number[]>(countersData.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // 👇 Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Counter logic (starts only after scroll)
  useEffect(() => {
    if (!started) return;

    const intervals = countersData.map((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / end), 20);

      return setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start >= end) clearInterval(intervals[index]);
      }, stepTime);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className={`${
        isColorMode ? "dark:bg-darklight bg-section" : "dark:bg-darkmode bg-white"
      } py-16`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {countersData.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center gap-2
                p-4 rounded-xl
                bg-white/80 dark:bg-darklight/80
                backdrop-blur-md
                border border-gray-200 dark:border-white/10
                shadow-sm hover:shadow-md
                hover:-translate-y-1
                transition-all duration-300
              "
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
            >
              <div className="
                flex items-center justify-center
                w-12 h-12 rounded-full
                bg-gradient-to-br from-blue-500 to-cyan-400
                text-white text-lg
                shadow
              ">
                <i className={`bi ${item.icon}`}></i>
              </div>

              {/* Counter */}
              <span className="text-2xl md:text-3xl font-bold text-midnight_text dark:text-white">
                {counts[index]}
              </span>

              <p className="text-xs md:text-sm text-gray-600 dark:text-white/70 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
