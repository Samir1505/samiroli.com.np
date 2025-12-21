"use client";

import React, { useRef } from "react";

const skillsData = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Bootstrap", "SCSS", "SASS", "Tailwind", "RESPONSIVE DESIGN"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Figma", "Postman"],
    },
];

const SkillsSection = ({ isColorMode }: { isColorMode: Boolean }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollByAmount = (amount: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    return (
        <section
            className={`${isColorMode
                ? 'dark:bg-darklight bg-section'
                : 'dark:bg-darkmode bg-white py-16 text-gray-800 dark:text-gray-100 font-sans'
                }`}
            id='Skills'>
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="flex justify-center mb-10 relative">
                    <span className="relative text-3xl font-semibold pb-2">
                        My Skills
                        <span className="absolute h-1 w-full left-0 bottom-0 bg-green-500 dark:bg-blue-500"></span>
                        <span className="absolute h-1 w-[70%] left-1/2 bottom-[-7px] transform -translate-x-1/2 bg-green-500 dark:bg-blue-500"></span>
                    </span>
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skillsData.map((category, index) => (
                        <div key={index}>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col h-full transition-colors duration-300">
                                <h3 className="text-center text-lg font-semibold mb-4">{category.title}</h3>
                                {Array.from({ length: Math.ceil(category.skills.length / 2) }, (_, i) => (
                                    <ul key={i} className="flex justify-between px-2 mb-2 list-none">
                                        <li className="flex items-center gap-2">
                                            {category.skills[i * 2] && (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="text-green-500 dark:text-blue-400" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.525 7.464a.75.75 0 0 0-1.06 1.06l2.505 2.505z" />
                                                    </svg>
                                                    {category.skills[i * 2]}
                                                </>
                                            )}
                                        </li>
                                        <li className="flex items-center gap-2 text-right">
                                            {category.skills[i * 2 + 1] && (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        className="text-green-500 dark:text-blue-400" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.993a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.525 7.464a.75.75 0 0 0-1.06 1.06l2.505 2.505z" />
                                                    </svg>
                                                    {category.skills[i * 2 + 1]}
                                                </>
                                            )}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
};

export default SkillsSection;
