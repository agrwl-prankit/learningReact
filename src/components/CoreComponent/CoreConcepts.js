import logo from '../../logo.svg';
import './CoreComponent.css';

export function CoreConcepts(props){
    return (
      <li>
        <img src={logo} alt='...'/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    )
  }