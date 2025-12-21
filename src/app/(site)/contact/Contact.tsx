'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiLogoGithub, BiLogoLinkedinSquare, BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

const ContactUs = ({ isColorMode }: { isColorMode: Boolean }) =>{
    const formRef = useRef<HTMLFormElement>(null);
    const [phone, setPhone] = useState("");
    const [messageStatus, setMessageStatus] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d*$/.test(value)) return;
        if (value.length <= 10) setPhone(value);
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_8sxcetl",
                "template_ji78dps",
                formRef.current,
                "u7ylTiBGnr3rzj1Az"
            )
            .then(() => {
                setMessageStatus("Message sent successfully!");
                formRef.current?.reset();
                setPhone("");
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                setMessageStatus("Failed to send message. Please try again.");
            });
    };

    return (
        <section className={`${isColorMode
                ? 'dark:bg-darklight bg-section'
                : 'dark:bg-darkmode bg-white text-gray-800 dark:text-gray-100 font-sans py-16'
                }`}
            id='Contact'>
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="flex justify-center mb-10">
                    <span className="relative text-3xl font-semibold pb-2">
                        Contact Us
                        {/* Underline - before full width */}
                        <span className="absolute h-1 w-full left-0 bottom-0 bg-green-500 dark:bg-blue-500"></span>
                        {/* Underline - after 70% width */}
                        <span className="absolute h-1 w-[70%] left-1/2 bottom-[-7px] transform -translate-x-1/2 bg-green-500 dark:bg-blue-500"></span>
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Contact Info */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border border-gray-200 dark:border-gray-700 space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Let's Get In Touch</h3>
                        <p className="text-gray-500 dark:text-gray-300">We're here for any suggestion or just to have a chat.</p>

                        {/* Contact Items */}
                        {[
                            { icon: <BiLogoGithub size={22} />, label: "GitHub", link: "#", value: "Samir2061", bg: "bg-green-100 dark:bg-blue-700", hover: "hover:bg-green-500 dark:hover:bg-blue-500 hover:text-white", color: "text-green-500 dark:text-white" },
                            { icon: <BiEnvelope size={22} />, label: "Email", link: "mailto:sameerchhetri494@gmail.com", value: "sameerchhetri494@gmail.com", bg: "bg-green-100 dark:bg-blue-700", hover: "hover:bg-green-500 dark:hover:bg-blue-500 hover:text-white", color: "text-green-500 dark:text-white" },
                            { icon: <BiLogoLinkedinSquare size={22} />, label: "LinkedIn", link: "#", value: "Samir Oli", bg: "bg-green-100 dark:bg-blue-700", hover: "hover:bg-green-500 dark:hover:bg-blue-500 hover:text-white", color: "text-green-500 dark:text-white" },
                            { icon: <BsTelephone size={20} />, label: "Phone", link: "tel:9813493115", value: "9813493115", bg: "bg-green-100 dark:bg-blue-700", hover: "hover:bg-green-500 dark:hover:bg-blue-500 hover:text-white", color: "text-green-500 dark:text-white" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                                <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition ${item.bg} ${item.hover} ${item.color} cursor-pointer`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-gray-800 dark:text-gray-100 font-semibold">{item.label}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-500 dark:text-blue-400 hover:underline">
                                        {item.value}
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 dark:bg-blue-500 text-white transition">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 dark:bg-blue-400 text-white transition">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-gray-900 text-white transition">
                                <FaTiktok size={18} />
                            </a>
                            <a href="https://wa.me/9813493115" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 dark:bg-blue-500 text-white transition">
                                <FaWhatsapp size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Contact Form */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            Message <span className="text-green-500 dark:text-blue-400">Me!</span>
                        </h3>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block font-semibold mb-1 dark:text-gray-100">Full Name <span className="text-red-500">*</span></label>
                                <input type="text" id="fullName" name="name" required className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="emailAddress" className="block font-semibold mb-1 dark:text-gray-100">Email <span className="text-red-500">*</span></label>
                                <input type="email" id="emailAddress" name="email" required className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block font-semibold mb-1 dark:text-gray-100">Phone Number <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                    pattern="^(98|97)[0-9]{8}$"
                                    title="Phone number must start with 98 or 97 and be 10 digits long"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block font-semibold mb-1 dark:text-gray-100">Subject <span className="text-red-500">*</span></label>
                                <input type="text" id="subject" name="title" required className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500" />
                            </div>

                            <div>
                                <label htmlFor="projectDetails" className="block font-semibold mb-1 dark:text-gray-100">Project Details <span className="text-red-500">*</span></label>
                                <textarea id="projectDetails" name="message" rows={6} required className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500" />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="bg-green-500 dark:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-600 dark:hover:bg-blue-600 transition">
                                    Send Me
                                </button>
                            </div>

                            {messageStatus && (
                                <p className={`text-center font-semibold ${messageStatus.includes("successfully") ? "text-green-600 dark:text-blue-400" : "text-red-600 dark:text-red-400"}`}>
                                    {messageStatus}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-12">
                    <div className="p-5 rounded-xl shadow
                       dark:bg-blue-400/40
                         transition-colors duration-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.741886629775!2d82.38640027609969!3d28.517412489297886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39bd5900137d8597%3A0x4d079513df633eaf!2sSamir%20Home!5e0!3m2!1sen!2snp!4v1766310753083!5m2!1sen!2snp"
                            className="w-full h-96 rounded-xl"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="School Location Map"
                        />
                    </div>
                </div>



            </div>
        </section>
    );
};

export default ContactUs;
