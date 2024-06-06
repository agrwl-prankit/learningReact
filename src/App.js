import './App.css';
import {Fragment} from 'react';
import { Header } from './components/Header/Header';
import { Examples } from './components/Example/Example';
import { CoreConcept } from './components/CoreConcepts/CoreConcepts';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <CoreConcept></CoreConcept>
        <Examples></Examples>
      </main>
    </Fragment>
  );
}

export default App;
