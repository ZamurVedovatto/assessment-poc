import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de jogo!</h2>
            <p>Pontuação: x</p>
            <p>
                Você acertou x de {quizState.questions.length}{" "}
                perguntas.
            </p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button>Reiniciar</button>
        </div>
    );
};

export default GameOver;