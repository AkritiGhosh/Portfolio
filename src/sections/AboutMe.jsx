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
      className="md:w-3/5 w-full h-full rounded-xl md:px-[10%] px-4 snap-start snap-always text-right float-right"
    >
      {/* <h1 className=""></h1> */}
      <Typewriter>
        <div
          className="text-xl text-white font-medium"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus mollis commodo. Maecenas tristique viverra suscipit. Fusce
          luctus risus ac nulla feugiat molestie. Nunc rhoncus ullamcorper
          sodales. Morbi faucibus aliquet magna quis posuere. Aenean condimentum
          orci et commodo facilisis. Sed tincidunt justo at ante fringilla
          faucibus. Mauris ut laoreet felis, ac efficitur eros. Fusce id egestas
          magna, vulputate dapibus lacus.
        </div>
      </Typewriter>
    </div>
  );
};

export default AboutMe;
