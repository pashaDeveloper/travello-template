import React, { useState, useEffect } from "react";
import Button from "@/components/shared/button/Button";
import HighlightText from "@/components/shared/highlightText/HighlightText";

const TypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    // Typing effect
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    if (index >= text.length) {
      clearInterval(typingInterval);
    }

    return () => clearInterval(typingInterval);
  }, [index, text, speed]);

  useEffect(() => {
    // Blinking cursor effect
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`cursor ${isBlinking ? 'blink' : ''}`}>|</span>
    </span>
  );
};

const HeroDescription = () => {
  return (
    <section className="lg:col-span-8 md:col-span-6">
      <article className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-8">
          <p className="lg:text-7xl md:text-5xl text-3xl ">
            <HighlightText>با کوارمونیا</HighlightText>
            <TypingText
              text=" آینده‌ای روشن در کشوری جدید"
              speed={50} 
            // Typing speed in milliseconds
            />
          </p>
          <p className=" lg:text-2xl md:text-1xl text-1lg">
            <TypingText
              text="آغاز سفر جدید شما با یک کلیک! از خانه به سرزمین‌های جدید، با اطمینان و راحتی"
              speed={30} // Typing speed in milliseconds
            />
          </p>
        </div>
        <div>
        <Button
            className="px-[18px] py-[13px] w-[200px] bg-black"
            onClick={() => window.open("/tours", "_self")}
          >
           کلیک کن
          </Button>
        </div>
      </article>
    </section>
  );
};

export default HeroDescription;
