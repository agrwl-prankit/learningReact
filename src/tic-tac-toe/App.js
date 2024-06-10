import '../tic-tac-toe/index.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Header from './components/Header';
import Log from './components/Log';

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if(gameTurns.length>0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }
    return currentPlayer;
}

function TicTacToeApp() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex){
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updateTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];
            return updateTurns;
        });
    }

    return (
        <>
        <main>
            <header>
                <Header></Header>
            </header>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
                <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
        </>
    );
}

export default TicTacToeApp;