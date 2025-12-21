"use client";

import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const MyCertificates = () => {
    const certificates = [
        {
            title: "DIT (Diploma in Information Technology)",
            institute: "Adarsha Model Secondary School, Rapti-2, Dang Nepal",
            duration: "23 November, 2021 / 18 November, 2024",
        },
        {
            title: "Web Design & React Js",
            institute: "Broadway Infosys, Kathmandu, Nepal",
            duration: "3 December, 2024 / 17 February, 2025",
        },
        {
            title: "MERN Stack Development",
            institute: "Broadway Infosys, Kathmandu, Nepal",
            duration: "3 December, 2024 / 17 February, 2025",
        },
        {
            title: "Computer Basic & Diploma",
            institute: "Good Vision Computer Training Center Rapti Rural Municipality-4 Dang Nepal",
            duration: "1 August, 2023 / 28 April, 2024",
        },
    ];

    return (
        <section
            className="py-16 font-sans dark:bg-darklight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="flex justify-center mb-10 relative">
                    <span className="relative text-3xl font-semibold pb-2 text-gray-900 dark:text-gray-100">
                        My Certificates
                        <span className="absolute h-1 w-full left-0 bottom-0 bg-green-500 dark:bg-blue-500"></span>
                        <span className="absolute h-1 w-[70%] left-1/2 bottom-[-7px] transform -translate-x-1/2 bg-green-500 dark:bg-blue-500"></span>
                    </span>
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map(({ title, institute, duration }, idx) => (
                        <div key={idx}>
                            <div className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 rounded-xl min-h-[150px] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <h2 className="text-center pt-2 text-gray-800 dark:text-gray-100 text-base font-semibold uppercase">
                                    {title}
                                </h2>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="text-start">
                                        <p className="mb-1 text-gray-600 dark:text-gray-300 text-sm capitalize">
                                            {institute}
                                        </p>
                                        <p className="mb-0 text-gray-400 dark:text-gray-400 text-xs font-normal">
                                            {duration}
                                        </p>
                                    </div>
                                    <div className="text-green-500 dark:text-blue-500 text-2xl cursor-pointer hover:scale-110 hover:text-green-600 dark:hover:text-blue-400 transition-transform duration-300">
                                        <BsPlusCircle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyCertificates;
