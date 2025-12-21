import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import Services from "./Services";
export const metadata: Metadata = {
  title: "Services | Samir",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services/>
    </>
  );
};

export default About;
