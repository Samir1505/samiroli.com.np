"use client";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const teamData = [
    {
        name: "Samir Chhetri",
        role: "React Developer",
        image: "/images/about4.jpg",
        icons: [
            { href: "#", icon: "bi-github" },
            { href: "#", icon: "bi-twitter" },
            { href: "#", icon: "bi-linkedin" },
        ],
    },
  
    {
        name: "Sushim Chaudhary",
        role: "MERN - Stack Developer",
        image: "/images/sushim.jpg",
        icons: [
            { href: "#", icon: "bi-github" },
            { href: "#", icon: "bi-twitter" },
            { href: "#", icon: "bi-linkedin" },
        ],
    },
   
    {
        name: "Santosh oli",
        role: "Front - End Developer",
        image: "/images/santosh.jpg",
        icons: [
            { href: "#", icon: "bi-github" },
            { href: "#", icon: "bi-twitter" },
            { href: "#", icon: "bi-linkedin" },
        ],
    },

     {
        name: "Rohit Pd Tharu",
        role: "Front - End Developer",
        image: "/images/rohit.jpg",
        icons: [
            { href: "#", icon: "bi-github" },
            { href: "#", icon: "bi-twitter" },
            { href: "#", icon: "bi-linkedin" },
        ],
    },
    {
        name: "Rabin Chaudhary",
        role: "Video Editor",
        image: "/images/rabin.jpg",
        icons: [
            { href: "#", icon: "bi-github" },
            { href: "#", icon: "bi-twitter" },
            { href: "#", icon: "bi-linkedin" },
        ],
    },
];

export default function TeamsSection() {
    return (
        <section className="py-16 bg-white dark:bg-darklight" id="Teams">
            <div className="max-w-6xl mx-auto px-2">
                <h2 className="flex justify-center mb-10 relative">
                    <span className="relative text-3xl font-semibold pb-2 text-gray-900 dark:text-gray-100">
                        My Teams
                        <span className="absolute h-1 w-full left-0 bottom-0 bg-green-500 dark:bg-blue-500"></span>
                        <span className="absolute h-1 w-[70%] left-1/2 bottom-[-7px] transform -translate-x-1/2 bg-green-500 dark:bg-blue-500"></span>
                    </span>
                </h2>

                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    keyBoardControl
                    showDots={true}
                    arrows={false}
                    containerClass="py-3 pb-10"
                    itemClass="px-2"
                >
                    {teamData.map((member, index) => (
                        <div key={index}>
                            <div className="h-full w-full max-w-full mx-auto rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
                                <div className="text-center">
                                    <div className="inline-block rounded-full bg-green-500 dark:bg-blue-500 p-[5px]">
                                        <div className="rounded-full bg-white dark:bg-gray-900 p-1">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="mx-auto block h-[150px] w-[150px] sm:h-[140px] sm:w-[140px] xs:h-[120px] xs:w-[120px] rounded-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                                        {member.name}
                                    </div>

                                    <p className="mb-4 text-gray-500 dark:text-gray-300 text-base">
                                        {member.role}
                                    </p>

                                    <ul className="flex justify-center gap-4">
                                        {member.icons.map((icon, i) => (
                                            <li key={i}>
                                                <a
                                                    href={icon.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={icon.icon.replace("bi-", "")}
                                                    className="text-xl text-green-500 dark:text-blue-500 hover:text-green-600 dark:hover:text-blue-600 transition"
                                                >
                                                    <i className={`bi ${icon.icon}`}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            <style jsx global>{`
                .react-multiple-carousel__arrow--right,
                .react-multiple-carousel__arrow--left {
                    display: none !important;
                }

                /* Dots inactive */
                .react-multi-carousel-dot-list li button {
                    width: 12px !important;
                    height: 12px !important;
                    background: gray !important;
                    border-radius: 50% !important;
                    opacity: 0.6 !important;
                    position: relative;
                }

                /* Active dot with inner circle */
                .react-multi-carousel-dot-list li.react-multi-carousel-dot--active button::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: green; /* light mode */
                }

                @media (prefers-color-scheme: dark) {
                    .react-multi-carousel-dot-list li.react-multi-carousel-dot--active button::after {
                        background: #3b82f6 !important; /* dark mode */
                    }
                }
            `}</style>
        </section>
    );
}
