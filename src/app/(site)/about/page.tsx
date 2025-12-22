import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import Progresswork from "@/app/component/WorkProgress";
export const metadata: Metadata = {
  title: "About | samir",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <Progresswork isColorMode={true} />
    </>
  );
};

export default About;
