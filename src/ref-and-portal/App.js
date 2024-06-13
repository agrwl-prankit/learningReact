import './index.css';
import { Header } from './components/Header';
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function RefAndPortalApp(){
    return (
        <div id="content">
            <Header/>
            <Player/>
            <div id='challenges'>
                <TimerChallenge title="Easy" targetTime='1'></TimerChallenge>
                <TimerChallenge title="Not Easy" targetTime='5'></TimerChallenge>
                <TimerChallenge title="Getting tough" targetTime='10'></TimerChallenge>
                <TimerChallenge title="Pros only" targetTime='15'></TimerChallenge>
            </div>
        </div>
    )
}

export default RefAndPortalApp;