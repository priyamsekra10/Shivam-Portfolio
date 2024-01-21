'use client'
import React from "react";
import ScrollTo from "react-scroll-into-view";

function HeroLink() {
  const handleResumeClick = () => {
    // Replace the URL below with the actual link to your resume
    window.location.href = "your_resume_link_here";
  };

  return (
    <ScrollTo selector={`#main-section`}>
      <div
        className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors"
        onClick={handleResumeClick}
      >
        View Resume
      </div>
    </ScrollTo>
  );
}

export default HeroLink;
