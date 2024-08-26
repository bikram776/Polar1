import React from "react";
import Hero from "../components/Hero";
import Contactform from "../components/Contactform";

function Contact() {
  const Contactdata = {
    Cname: "Hero not-hero-home",
    image: "Contactimg.png",
    classimg: 'not-hero-img',
    divtext: 'not-hero-txt',
    Htext: "Reach Out To Us",
    Ptext: "Don't be shy",
    class: "hide_a_tag",
  };

  return (
    <div>
      <Hero
        cName={Contactdata.Cname}
        imgclass={Contactdata.classimg}
        img={Contactdata.image}
        textdiv={Contactdata.divtext}
        H={Contactdata.Htext}
        Ptext={Contactdata.Ptext}
        Aclassname={Contactdata.class}
      />
      <Contactform/>
    </div>
  );
}

export default Contact;
