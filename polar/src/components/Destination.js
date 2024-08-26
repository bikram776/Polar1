import "../components/Destination.css";

function Destination() {
  const Destinataiondata = [
    {
      h3text: "Great Lakes, Jammu and Kashmir",
      ptext: `The saying about Kashmir, “If there is Heaven on Earth, it is here,
            it is here, it is here”, made popular long back, still stands strong
            and unfailing in this land of unearthly beauty. Kashmir is the most
            beautiful and most ideal place for trekking. The Great Lakes Trek in
            Kashmir is considered to be the most scenic and picturesque trek.`,
      img1src: "scene1.jpg",
      img2src: "scene2.jpg",
    },
    {
      h3text: "Hemkund and Valley of Flowers, Garhwal",
      ptext: `Valley of Flowers trek is a trek through a fairy-land in the Himalayas
              of Uttaranchal, at an altitude of 3,600 metres above sea-level. The 
              best time to visit this valley is just after the monsoon season, in 
              the months of July, August and early September, as this valley remains 
              fully covered with snow in the winter months. But during autumn and 
              spring, there is a riot of colours and scents on this field with 
              hundreds of varieties of flowers in hues of purple, yellow, white, pink blossom.`,
      img1src: "scene3.jpg",
      img2src: "scene4.jpg",
    },
    {
      h3text: "Dzongri & Goecha-La, Sikkim",
      ptext: `Goecha – La is the most stunning trek in Sikkim. The route takes you 
              through the Kanchenjunga National Park, covering beautiful tropical 
              coniferous woodlands and an array of colourful flora and fauna. You 
              can also find various lush orchids, Himalayan bears, multi-coloured 
              pheasants and other beautiful birds. The trek starts from the sleepy 
              town of Yuksum and through Sachen Pass, up the Dzongri- Goechala Trail. 
              The most stunning of all Himalayan peaks, Mt. Kanchenjunga graces the trek route throughout.`,
      img1src: "scene5.jpg",
      img2src: "scene6.jpg",
    },
  ];

  return (
    <div className="destination">
      <div className="head-text">
        <h1>Popular Locations</h1>
        <p>Discover the world's most popular locations.</p>
      </div>
      {Destinataiondata.map((info, index) => (
        <div className={`places-text ${index % 2 === 0 ? 'even' : ''}`} key={index}>
        <div className="text">
          <h3>{info.h3text}</h3>
          <p>
          {info.ptext}
          </p>
        </div>
        <div className="place">
          <img alt="scenes" src={info.img1src} />
          <img alt="scenes" src={info.img2src} />
        </div>
      </div>
      )
      )}
      
    </div>
  );
}

export default Destination;
