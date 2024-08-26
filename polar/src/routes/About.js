import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About() {
  const Aboutdata = {
    Cname: "Hero not-hero-home",
    image: "aboutimg3.jpg",
    classimg: 'not-hero-img',
    divtext: 'not-hero-txt',
    Htext: "About Us",
    Ptext: "Discover the passion behind our hiking adventures",
    url: "/about",
    class: "hide_a_tag",
  };

  return (
    <div>
      <Hero
        cName={Aboutdata.Cname}
        img={Aboutdata.image}
        imgclass={Aboutdata.classimg}
        textdiv={Aboutdata.divtext}
        H={Aboutdata.Htext}
        Ptext={Aboutdata.Ptext}
        Aclassname={Aboutdata.class}
      />
      <Aboutus/>

    </div>
  );
}

export default About;
