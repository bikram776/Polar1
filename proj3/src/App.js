import KeyConcepts from './images/key-concepts.png';
import "./App.css";
import Components from "./images/components.png";
import Ui from "./images/events.png";
import State from "./images/state.png";
import Card from './component/Card';

const datas = [
  {
    title: "Components",
    image: Components,
    contents:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components",
  },
  {
    title: "UI",
    image: Ui,
    contents:
      "User interface (UI) design is an essential aspect of software and digital device design. Good UI design enhances the user experience, improves productivity",
  },
  {
    title: "State",
    image: State,
    contents:
      "State management in React is a crucial aspect of building dynamic user interfaces. It involves managing the data that drives component behavior and appearance dynamically",
  }
];

function App(){
  return(
    <div className="main">
      <header className="mainHeader">
        <img src={KeyConcepts} alt="star badge"/>
        <div className="textdiv">
        <h1>React Concepts</h1>
        <p>Selected key React components you should know about</p>
        </div>
      </header>
      <div className="container">
        {datas.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
    
  );
}

export default App;
