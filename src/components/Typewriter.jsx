import React, { useEffect, useMemo, useState } from "react";

const Typewriter = ({ children }) => {
  const text = "about";
  const delay = 500;
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-2);
  const [openTag, setOpenTag] = useState(
    <h1 className="text-white text-4xl font-bold">
      <span className=" pl-1 animate-cursor font-normal text-5xl">|</span>
    </h1>
  );
  const [closeTag, setCloseTag] = useState(
    <h1 className="text-white text-4xl font-bold">
      <span className=" pl-1 animate-cursor font-normal text-5xl">|</span>
    </h1>
  );

  useEffect(() => {
    if (currentIndex < 5) {
      const timeout = setTimeout(() => {
        if (currentIndex == -2) {
          setOpenTag(
            <h1 className="text-white text-4xl font-bold">
              {"<"}
              <span className=" pl-1 animate-cursor font-normal text-5xl">
                |
              </span>
            </h1>
          );
          setCloseTag(
            <h1 className="text-white text-4xl font-bold">
              {"</"}
              <span className=" pl-1 animate-cursor font-normal text-5xl">
                |
              </span>
            </h1>
          );
        } else if (currentIndex == -1) {
          setOpenTag(
            <h1 className="text-white text-4xl font-bold">
              {"<"}
              <span className=" pl-1 animate-cursor font-normal text-5xl">
                |
              </span>
              {">"}
            </h1>
          );
          setCloseTag(
            <h1 className="text-white text-4xl font-bold">
              {"</"}
              <span className=" pl-1 animate-cursor font-normal text-5xl">
                |
              </span>
              {">"}
            </h1>
          );
        } else {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setOpenTag(
            <h1 className="text-white text-4xl font-bold">
              {"<"}
              {currentText}
              <span className=" pl-1 animate-cursor font-normal text-5xl">
                |
              </span>
              {">"}
            </h1>
          );
          setCloseTag(
            <h1 className="text-white text-4xl font-bold">
              {"</"}
              {currentText}
              <span className=" pl-1 animate-cursor font-normal text-5xl">
                |
              </span>
              {">"}
            </h1>
          );
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
    if (currentIndex == 5) {
      const timeout = setTimeout(() => {
        setOpenTag(
          <h1 className="text-white text-4xl font-bold">{"<about>"}</h1>
        );
        setCloseTag(
          <h1 className="text-white text-4xl font-bold">{"</about>"}</h1>
        );
      }, 1000);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="h-full w-full flex flex-col justify-center gap-5 leading-relaxed">
      {openTag}
      {children}
      {closeTag}
    </div>
  );
};

export default Typewriter;
