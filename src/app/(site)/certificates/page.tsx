
import React from "react";
import HeroSub from "@/app/component/HeroSub";
import { Metadata } from "next";
import Certificates from "./Certificates";
export const metadata: Metadata = {
  title: "Certificates |Samir ",
};

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/certificates", text: "Certificates" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <Certificates/>
    </>
  );
};

export default About;
