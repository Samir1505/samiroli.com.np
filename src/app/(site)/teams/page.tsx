import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import Progresswork from "@/app/component/WorkProgress";
import TeamsSection from "./TeamsSection";
export const metadata: Metadata = {
  title: "Teams | Samir",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/teams", text: "Teams" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <TeamsSection />
    </>
  );
};

export default About;
