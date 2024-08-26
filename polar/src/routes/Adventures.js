import React from "react";
import Hero from "../components/Hero";
import Story ,{Storydata} from "../components/Story";


function Adventures() {
  const Adventuredata = {
    Cname: "Hero not-hero-home",
    image: "Adventureimg.png",
    classimg: 'not-hero-img',
    divtext: 'not-hero-txt',
    Htext: "Explore The Earth With Us",
    Ptext: "We Explore the Earth",
    class: "hide_a_tag",
  };

  return (
    <div>
      <Hero
        cName={Adventuredata.Cname}
        imgclass={Adventuredata.classimg}
        img={Adventuredata.image}
        textdiv={Adventuredata.divtext}
        H={Adventuredata.Htext}
        Ptext={Adventuredata.Ptext}
        Aclassname={Adventuredata.class}
      />
      <Story numStories={Storydata.length}/>
    </div>
  );
}

export default Adventures;
