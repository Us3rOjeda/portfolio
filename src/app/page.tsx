"use client"

import { useState } from "react";
import { Navbar, Home, Projects, Skills, Contact } from "./lib/constants/dynamicImports"

export default function Page() {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <>
      <Navbar isEnglish={isEnglish} toggleLanguage={toggleLanguage}/>
      <Home isEnglish={isEnglish}/>
      <Projects isEnglish={isEnglish}/>
      <Skills />
      <Contact isEnglish={isEnglish}/>
    </>
  );
}
