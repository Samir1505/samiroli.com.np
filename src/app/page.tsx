import React from 'react'
import { Metadata } from "next";
import Hero from './components/Home/Hero';
import Counter from './components/Home/Counter';




export const metadata: Metadata = {
  title: "samir",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
    </main>
  )
}
