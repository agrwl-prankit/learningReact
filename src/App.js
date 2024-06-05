import './App.css';
import {CORE_CONCEPTS} from './data'
import { Header } from './components/Header/Header';
import { CoreConcepts } from './components/CoreComponent/CoreConcepts';
import { TabButton } from './components/TabButton/TabButton';

function App() {

  let tabContent = 'Please click tab'

  function handleClick(selectedButton){
    tabContent = selectedButton;
    console.log(selectedButton);
  }

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* children prop: content between component tag */}
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
