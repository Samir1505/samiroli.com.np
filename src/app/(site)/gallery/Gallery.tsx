"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
];

const Gallery = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <section className="py-16 dark:bg-darklight" id="Gallery">
            <div className="max-w-6xl mx-auto px-4 relative">
                <h2 className="flex justify-center mb-10">
                    <span className="relative text-3xl font-semibold pb-2 text-gray-900 dark:text-gray-100">
                        My Gallery
                        <span className="absolute h-1 w-full left-0 bottom-0 bg-green-500 dark:bg-blue-500"></span>
                        <span className="absolute h-1 w-[70%] left-1/2 bottom-[-7px] transform -translate-x-1/2 bg-green-500 dark:bg-blue-500"></span>
                    </span>
                </h2>

                {swiperReady && (
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            const nav = swiper.params.navigation as NavigationOptions;
                            nav.prevEl = prevRef.current;
                            nav.nextEl = nextRef.current;
                        }}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 3 },
                        }}
                        className="pb-10"
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-full w-full max-w-full mx-auto rounded-xl border border-gray-300 bg-white dark:bg-gray-800 p-4">
                                    <div className="text-center">
                                        <img
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="mx-auto block h-[450px] sm:h-[450px] md:h-[400px] w-full object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Custom Arrows at bottom center */}
                <div className="flex justify-center gap-6 mt-6">
                    <button
                        ref={prevRef}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 dark:bg-blue-500 text-white shadow-md hover:scale-110 transition-transform duration-300"
                    >
                        <i className="bi bi-arrow-left text-xl"></i>
                    </button>
                    <button
                        ref={nextRef}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 dark:bg-blue-500 text-white shadow-md hover:scale-110 transition-transform duration-300"
                    >
                        <i className="bi bi-arrow-right text-xl"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
