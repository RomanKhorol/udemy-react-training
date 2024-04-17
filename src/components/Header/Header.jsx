import reactCoreImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reacDescription = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const statement = reacDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactCoreImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {statement} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
