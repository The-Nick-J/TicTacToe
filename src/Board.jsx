import "./board.css";
import { useState, useEffect, useRef } from "react";

const Board = ({reset, setReset, winner, setWinner}) => {
  // creamos estado de turno para O o X , 0 es O y 1 es X
  const [turn, setTurn] = useState(0);

  //crea los datos del tablero que por defecto son vacios.
  const [data, setData] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  //crea una referencia al tablero
  const boardRef = useRef(null);

  //creamos una funcion para introducir los datos al tablero
  const draw = (e, index) => {
    // solo introduce dato si la posicion esta vacia y no hay ganador aun.
    if(data[index - 1] === "" && winner === ""){
      // dibuja x si es el turno de 0 si no dibuja O
      const current = turn === 0 ? "X" : "O";

      //actualiza el estado del tablero
      data[index - 1] = current;

      //dibuja en el tablero
      e.target.innerText = current;

      //cambia el turno
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  // usar useeffect para reiniciar el tablero cuando hay ganador
  useEffect(() => {
    //se vacia data
    setData(["", "", "", "", "", "", "", "", ""]);

    //se referencia a los Children (casillas) del tablero
    const cells = boardRef.current.children;

    //se recorre cada casilla y se vacia su contenido
    for(let i = 0; i < cells.length; i++) {
      cells[i].innerText = "";
    }

    // se reinicia el turno
    setTurn(0);

    //se reiniciar el winner
    setWinner("");
    setReset(false);

  }, [reset, setReset, setWinner]);

  // revisar si alguien ha ganado
  useEffect(() => {

    //revisar las filas
    const checkRow = () => {
      let ans = false;
      //revisa cada una de las 3 filas
      for(let i = 0; i < 3; i++) {
        ans = ans || (
          data[i] === data[i+1] && data[i] === data[i+2] && data[i] !== ""
        );
      }
      return ans;
    };

    // revisar las columnas
    const checkCol = () => {
      let ans = false;
      // revisar cada una de las 3 columnas
      for(let i = 0; i < 3; i++) {
        ans = ans || (
          data[i] === data[i+3] && data[i] === data[i+6] && data[i] !== ""
        );
      }
      return ans;
    };

    const checkDiagonal = () => {
      return (
        (data[0] === data[4] ) &&
        data[0] === data[8] &&
        data[0] !== "" // si 1 es igual a 5 y 1 es igual a 9
      ) || (
        (data[2] === data[4] &&
        data[2] === data[6] &&
        data[2] !== "")
      );
    };

    //se llaman las 3 funciones y se ve si alguna se cumple
    const checkWin = () => {
      return ( checkRow() || checkCol() || checkDiagonal() );
    };

    // se revisa si hay empate
    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell !== "") {
          count++
        }
      });
      return count === 9;
    };

    // llamar nuestra funcion setWinner para actualizar el ganador
    if(checkWin()) {
      setWinner(
        turn === 0
        ? "Jugador 2 Gana!"
        : "Jugador 1 Gana!"
      );
    } else if (checkTie()) {
      setWinner("Empate!");
    }
  });

  return (
    <div ref={boardRef} className="board">
      <div className="input input-1" onClick={(e) => draw(e, 1)}></div>
      <div className="input input-2" onClick={(e) => draw(e, 2)}></div>
      <div className="input input-3" onClick={(e) => draw(e, 3)}></div>
      <div className="input input-4" onClick={(e) => draw(e, 4)}></div>
      <div className="input input-5" onClick={(e) => draw(e, 5)}></div>
      <div className="input input-6" onClick={(e) => draw(e, 6)}></div>
      <div className="input input-7" onClick={(e) => draw(e, 7)}></div>
      <div className="input input-8" onClick={(e) => draw(e, 8)}></div>
      <div className="input input-9" onClick={(e) => draw(e, 9)}></div>
    </div>
  );
};

export default Board;

