import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Back End Developer",
          "Computer Science",
          "Full Stack Developer(Both Front End and Back End Developer)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
        
      }}
    />
  );
}

export default TypeWriter;
