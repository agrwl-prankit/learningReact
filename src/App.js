import './App.css';
import {CORE_CONCEPTS} from './data'
import { Header } from './components/Header/Header';
import { CoreConcepts } from './components/CoreComponent/CoreConcepts';
import { TabButton, TabLabelButton } from './components/TabButton/TabButton';

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* children prop: content between component tag */}
            <TabButton>Component</TabButton>
            <TabLabelButton label='Component2'></TabLabelButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
