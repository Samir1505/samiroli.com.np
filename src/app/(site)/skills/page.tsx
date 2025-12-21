import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import SkillsSection from "./SkillsSection";
export const metadata: Metadata = {
  title: "Skills | Samir",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/skills", text: "Skills" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <SkillsSection isColorMode={true}/>
    </>
  );
};

export default About;
