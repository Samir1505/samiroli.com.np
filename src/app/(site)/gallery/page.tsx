import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import Gallery from "./Gallery";
export const metadata: Metadata = {
  title: "Gallery | Samir",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/gallery", text: "Gallery" },
  ];
  
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <Gallery/>
    </>
  );
};

export default About;
