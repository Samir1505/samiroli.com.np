import React from 'react'
import { Metadata } from "next";
import Hero from './components/Home/Hero';
import Counter from './components/Home/Counter';
import Progresswork from './component/WorkProgress';
import MyServicesPage from './(site)/services/Services';
import MyCertificates from './(site)/certificates/Certificates';
import SkillsSection from './(site)/skills/SkillsSection';
import TeamsSection from './(site)/teams/TeamsSection';
import ContactUs from './(site)/contact/Contact';





export const metadata: Metadata = {
  title: "samir",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <MyServicesPage/>
      <SkillsSection/>
      <TeamsSection/>
      <ContactUs/>

    </main>
  )
}
