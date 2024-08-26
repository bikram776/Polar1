import "../components/Story.css";

export const Storydata = [
  {
    image: "tripimg1.jpg",
    caption: "Mount Fuji",
    para: `Discover the epic scale of Mount Fuji, a towering 3765-meter-high 
          volcano that’s iconic to Japan. The stunning snow-capped peak can 
          be seen from near and far, complemented by candy-colored blossom 
          trees in the spring and the vibrant foliage of the maple trees in 
          the fall.`,
  },
  {
    image: "tripimg1.jpg",
    caption: "Mount Fuji",
    para: `Discover the epic scale of Mount Fuji, a towering 3765-meter-high 
          volcano that’s iconic to Japan. The stunning snow-capped peak can 
          be seen from near and far, complemented by candy-colored blossom 
          trees in the spring and the vibrant foliage of the maple trees in 
          the fall.`,
  },
  {
    image: "tripimg1.jpg",
    caption: "Mount Fuji",
    para: `Discover the epic scale of Mount Fuji, a towering 3765-meter-high 
          volcano that’s iconic to Japan. The stunning snow-capped peak can 
          be seen from near and far, complemented by candy-colored blossom 
          trees in the spring and the vibrant foliage of the maple trees in 
          the fall.`,
  },
  {
    image: "tripimg1.jpg",
    caption: "Mount Fuji",
    para: `Discover the epic scale of Mount Fuji, a towering 3765-meter-high 
          volcano that’s iconic to Japan. The stunning snow-capped peak can 
          be seen from near and far, complemented by candy-colored blossom 
          trees in the spring and the vibrant foliage of the maple trees in 
          the fall.`,
  },
  {
    image: "tripimg1.jpg",
    caption: "Mount Fuji",
    para: `Discover the epic scale of Mount Fuji, a towering 3765-meter-high 
          volcano that’s iconic to Japan. The stunning snow-capped peak can 
          be seen from near and far, complemented by candy-colored blossom 
          trees in the spring and the vibrant foliage of the maple trees in 
          the fall.`,
  },
];

function Story({numStories}) {
  return (
    <>
      <div className="story-head">
        <h1>Recent Story</h1>
      </div>
      <div className="container">
        {Storydata.slice(0, numStories).map((trip, index) => (
          <div className="responsive-container" key={index}>
            <img src={trip.image} alt="Image" className="image" />
            <div className="imgtext">
              <figcaption className="figcaption">{trip.caption}</figcaption>
              <p className="paragraph">{trip.para}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Story;
