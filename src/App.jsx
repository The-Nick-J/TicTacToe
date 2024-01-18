import React, { useState } from 'react';
import Info from './Info';
import Board from './Board';
import "./App.css";


const App = () => {

     // reiniciar el juego
     const [reset, setReset] = useState(false);

     //actualiza y muestra el ganador
     const [winner, setWinner] = useState('');

     //actualiza setReset a true
     const resetBoard = () => {
         setReset(true);
     };



        return (
            <div className="App">
            {/*oculta el texto si no hay ganador*/}
            <div className={`winner ${winner !== "true" ? "false" : "ocultar"}`}>
            {/*muestra el ganador*/}
            <div className="winnner-text">{winner}</div>
            {/*boton para reiniciar el juego*/}
            <button onClick={() => resetBoard()}>
                Reset Board
            </button>
            </div>
            {/*muestra el componente tablero*/}
            <Board
                reset={reset}
                setReset={setReset}
                winner={winner}
                setWinner={setWinner}

                />
                <Info />
            </div>

    );
}

export default App;