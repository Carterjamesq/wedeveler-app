import React from "react";

const ExperienceDate = () => {
  const startYear = 2007;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div>
      <p>{yearsOfExperience}</p>
    </div>
  );
};

export default ExperienceDate;
