import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import BehindTheSceneApp from './behind-the-scene/App';
// import TicTacToeApp from './tic-tac-toe/App';
// import InvestmentCalculatorApp from './investment-calculator/App'
// import ReactArt from './reactart-styling/App';
// import RefAndPortalApp from './ref-and-portal/App';
// import ElegantContextApp from './elegant-context/App';
// import PlacePickerApp from './place-picker/App';
import ClassBasedComponentApp from './class-based-components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TicTacToeApp/> */}
    {/* <InvestmentCalculatorApp/> */}
    {/* <ReactArt /> */}
    {/* <RefAndPortalApp/> */}
    {/* <ElegantContextApp /> */}
    {/* <PlacePickerApp/> */}
    {/* <BehindTheSceneApp/> */}
    <ClassBasedComponentApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
