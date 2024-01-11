import React from "react";
import HomeBanner from "../components/HomeBanner";
import ProfileCard from "../components/ProfileCard";
import Counts from "../components/Counts";
import Expirience from "../components/Expirience";
import Skills from "../components/Skills";
import Cases from "../components/Cases";

const Home = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-4">
          <h1>Hellow</h1>
          <ProfileCard />
        </div>
        <div className="col-lg">
          <HomeBanner />
          <Counts />
          <Expirience />
          <Skills />
          <Cases />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Home;
