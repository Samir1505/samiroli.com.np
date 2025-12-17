"use client";
import React from 'react';

// Data
const countersData = [
  {
    icon: "bi-check2-circle",
    value: 5,
    description: "Projects Completed",
  },
  {
    icon: "bi-clock-history",
    value: 2,
    description: "Years of Experience",
  },
  {
    icon: "bi-github",
    value: 15,
    description: "Total Repositories",
  },
  {
    icon: "bi-people",
    value: 25,
    description: "Happy Clients",
  },
];

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`${
        isColorMode
          ? "dark:bg-darklight bg-section"
          : "dark:bg-darkmode bg-white"
      } py-16`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {countersData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg shadow-lg dark:shadow-gray-800 bg-white dark:bg-darklight"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 text-2xl text-midnight_text dark:text-white">
                <i className={`bi ${item.icon}`}></i>
              </div>

              {/* Counter Value */}
              <span className="text-4xl md:text-5xl font-bold text-midnight_text dark:text-white">
                {item.value}
              </span>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 dark:text-white/70 font-medium">
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
