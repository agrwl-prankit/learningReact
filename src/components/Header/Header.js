import logo from '../../logo.svg';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
    return Math.floor(Math.random()* (max+1));
}


export function Header() {
    return (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {reactDescriptions[getRandomInt(2)]} react concepts you will need for
            almost any app you are going to build !
        </p>
    </header>
    );
}
