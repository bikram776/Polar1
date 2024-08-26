import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Story from "../components/Story";
import Cform from "../components/Cform";


function Home() {
  const Homedata = {
    Cname: "Hero",
    divtext: 'hero-text',
    image: "homeimg3.jpg",
    imgclass: 'Hero-img',
    Htext: "Explore the Uncharted",
    Ptext: "Join us on an unforgettable adventure to the world's most breathtaking destinations..",
    url: "/",
    atext: "Get Started",
  };

  return (
    <div>
      
      <Hero
        cName={Homedata.Cname}
        img={Homedata.image}
        imgclass={Homedata.imgclass}
        textdiv={Homedata.divtext}
        H={Homedata.Htext}
        Ptext={Homedata.Ptext}
        href={Homedata.url}
        Atag={Homedata.atext}
      />
      <Destination/>
      <Story numStories={3}/>
      <Cform/>
    </div>
  );
}

export default Home;
