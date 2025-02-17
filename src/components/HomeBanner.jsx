import React, { useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";

import ScrollReveal from "scrollreveal";
import { IoMdHome } from "react-icons/io";

const HomeBanner = () => {
  const boxRef = useRef();

  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 700,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };
    ScrollReveal().reveal(boxRef.current, config);
  }, []);

  return (
    <div ref={boxRef}>
      <div className="col d-flex icon">
        <div className="border rounded-5 px-4 py-2 mb-5">
          <IoMdHome />
          <p>Introducing</p>
        </div>
      </div>
      <div className="h1 mb-5 display-1">
        Hi, I'm <span>Vitalyi</span>,<br></br> Web Developer &nbsp;
        <br></br>
        <ReactTypingEffect
          text={["WordPress", "Webflow", "Headless", "<React />"]}
          speed={150}
          typingDelay={300}
          eraseDelay={600}
        />
      </div>
      <p className="mb-5 pb-5 grey-text">
        With a knack for translating design into seamless, responsive
        experiences,<br></br>
        I'm here to enhance your online presence. Let's collaborate to bring
        your digital vision to life!
      </p>
    </div>
  );
};

export default HomeBanner;
