import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import Contact from "./Contact";
export const metadata: Metadata = {
  title: "Contact | Samir",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <Contact/>
    </>
  );
};

export default About;
