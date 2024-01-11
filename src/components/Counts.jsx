import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountWithAnimation = ({ value, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <span ref={ref} className="display-1">
      <CountUp end={inView ? value : 0} duration={duration} />
    </span>
  );
};

const Counts = () => {
  const boxRef = useRef();
  const [startYear, setStartYear] = useState(2020);

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

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div ref={boxRef}>
      <div className="flex-row my-5">
        <div className="col-lg">
          <p>
            <CountWithAnimation value={yearsOfExperience} duration={2} />
          </p>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="col-lg">
          <p>
            <CountWithAnimation value={15} duration={3} />
          </p>
          <p>PROJECTS COMPLETED IN 15 COUNTRIES</p>
        </div>
        <div className="col-lg">
          <p>
            <CountWithAnimation value={40} duration={4} />
          </p>
          <p>FINISHED PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default Counts;
