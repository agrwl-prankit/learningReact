import '../tic-tac-toe/index.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function TicTacToeApp() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare(){
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    }

    return (
        <main>
            <header>
                <img src="game-logo.png" alt="Hand drawn tic-tac-toe game board"/>
                <h1>Tic-Tac-Toe</h1>
            </header>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
                <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
            </div>
        </main>
    );
}

export default TicTacToeApp;