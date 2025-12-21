"use client";
import React from "react";
import Head from "next/head";

// 👇 Services Data (Inline JSON)
const servicesData = [
    {
        icon: "bi bi-code-slash",
        title: "Web Development",
        description:
            "Web development is like building and maintaining websites. It involves creating web pages using languages like HTML, CSS, and JavaScript. Developers use these tools to design how a website looks and make it interactive.",
    },
    {
        icon: "bi bi-cart-plus",
        title: "E-Commerce Website",
        description:
            "I have also build ecommerce websites in my personal project and company. Where I worked on multiple team in company where my contribute is both side frontend and backend.",
    },
    {
        icon: "bi bi-palette",
        title: "Graphic Design",
        description:
            "Graphic design is the art and practice of creating visual content to communicate ideas and information. It involves combining text, images, and other elements to produce effective and visually appealing designs..",
    },
];

export default function MyServicesPage() {
    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                    rel="stylesheet"
                />
            </Head>

            {/* ✅ SERVICES SECTION */}
            <section className="py-16 bg-white  dark:bg-darklight" id="Services">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="flex justify-center mb-10 relative">
                        <span className="relative text-3xl font-semibold pb-2 text-gray-900 dark:text-gray-100">
                            My Services
                            {/* Underline - before full width */}
                            <span className="absolute h-1 w-full left-0 bottom-0 bg-green-500 dark:bg-blue-500"></span>
                            {/* Underline - after 70% width */}
                            <span className="absolute h-1 w-[70%] left-1/2 bottom-[-7px] transform -translate-x-1/2 bg-green-500 dark:bg-blue-500"></span>
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {servicesData.map((service, index) => (
                            <div key={index} className="w-full">
                                <div className="h-full text-center p-6 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
                                    <div className="mb-4 text-gray-800 dark:text-gray-100">
                                        <i
                                            className={service.icon}
                                            style={{ fontSize: "2rem" }}
                                        ></i>
                                    </div>

                                    <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                        {service.title}
                                    </h5>

                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
