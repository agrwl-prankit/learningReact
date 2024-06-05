import logo from './logo.svg';  // setting html attribute dynamically
import './App.css';
import {CORE_CONCEPTS} from './data'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random()* (max+1));
}

// custom component - function, start with capital letter, return jsx code
function Header() {
  return (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        {/* use dynamic value */}
        <p>
          {reactDescriptions[getRandomInt(2)]} react concepts you will need for almost any app you are going to build !
        </p>
      </header>
  )
}

function CoreConcepts(props){
  return (
    <li>
      <img src={logo} alt='...'/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
            <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
