import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
    const reactKeyWord = reactDescriptions[randomInt(reactDescriptions.length)];
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactKeyWord} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }