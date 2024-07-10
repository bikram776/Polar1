import "./Card.css";

  function Card({ data }) {
    return (
      <div className="card">
        <img src={data.image} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.contents}</p>
      </div>
    );
  };

  export default Card;
