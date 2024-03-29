/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";
import questions from "./../data/questions";

const STAGES = ["Start", "Playing", "End"];

interface QuizInterface {
  gameStage: string;
  questions: [];
  currentQuestion: number;
  score: number;
  disableAnswerButton: boolean;
}

const initialState: QuizInterface = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  disableAnswerButton: true,
};

const quizReducer = (state: QuizInterface, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
      return state;
    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };
    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: !questions[nextQuestion] ? STAGES[2] : state.gameStage,
        disableAnswerButton: true,
      };
    case "NEW_GAME":
      return initialState;
    case "CHECK_ANSWER":
      if (!state.disableAnswerButton) return state; // avoid counting more than one click

      const answer = action.payload.answer;
      const option = action.payload.option;
      const correctAnswer = answer === option ? 1 : 0;

      return {
        ...state,
        score: state.score + correctAnswer,
        disableAnswerButton: false,
      };
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
