'use client'
import React from "react";
import ScrollTo from "react-scroll-into-view";

function HeroLink() {
  const handleResumeClick = () => {
    // Replace the URL below with the actual link to your resume
    window.location.href = "/PriyamSekra-CV.pdf";
  };

  // return (
  //   <ScrollTo selector={`#main-section`}>
  //     <div
  //       className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors"
  //       onClick={handleResumeClick}
  //     >
  //    {"View Resume".split("").map((letter, index) => {
  //             return (
  //               <span
  //                 key={index}
  //                 className="hover:text-fun-pink-dark hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
  //               >
  //                 {letter}
  //               </span>
  //             );
  //           })}
  //     </div>
  //   </ScrollTo>
  // );
}

export default HeroLink;
