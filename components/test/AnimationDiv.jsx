"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationDiv = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div className={`h-20 w-40 bg-slate-500`} data-aos="fade-up"></div>;
};

export default AnimationDiv;
