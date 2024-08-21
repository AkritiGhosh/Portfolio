import React, { useEffect, useRef, useState } from "react";
import Typewriter from "../components/Typewriter";

const AboutMe = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    if (aboutRef.current) {
      const rect = aboutRef?.current?.getBoundingClientRect();
      console.log(aboutRef?.current, rect);
    }
  }, [aboutRef]);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="md:w-9/12 w-full h-full rounded-xl md:px-[10%] px-4 snap-start snap-always text-right float-right"
    >
      {/* <h1 className=""></h1> */}
      <Typewriter>
        <div className="text-xl text-white font-normal leading-relaxed">
          I am a Software Engineer currently living & working in Bhilai, India.
          As a CS major, I love to get my hands dirty from challenging & unique
          problems. While I was a student, I worked remotely on different data
          analysis internships and freelanced as a Deep Learning Engineer for a
          Nevada-based company.
          <br />
          Due to the pandemic, I was working remotely, as a Software Engineer at
          Techment, with gracious and welcoming colleagues. This experience gave
          me the confidence of working on production-scale projects. (Read
          more).
          <br />
          After over 2 years in Techment, I joined my current company SproutsAI,
          as a Senior Software Engineer. I was incharge of leading the frontend
          team. (Read more)
          <br />
          In my free time, I like to listen to bollywood music and read novels.
          I love to travel to different places and enjoy cultural and scenic
          diversity in India, though my favorite remains beaches. I hope to
          travel more and perhaps get an opportunity to travel for work.
        </div>
      </Typewriter>
    </div>
  );
};

export default AboutMe;
