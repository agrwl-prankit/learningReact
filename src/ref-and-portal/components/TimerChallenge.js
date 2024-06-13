import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function handleTimerStart(){
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            dialog.current.open();
        }, targetTime * 1000);
    }

    function handleStopTimer(){
        clearTimeout(timer.current);
    }

    return(
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime>1 ?'s':''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStopTimer : handleTimerStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                        </button>
                </p>
                <p className={timerStarted ? 'active' : ''}>
                    {timerStarted ? 'Timer is running' : 'Timer is Inactive'}
                </p>
            </section>
        </>
    )
}