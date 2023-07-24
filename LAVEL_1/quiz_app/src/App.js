import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useEffect } from "react";
import { useReducer } from "react";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Questions from "./Components/Questions";
import NextButton from "./Components/NextButton";
import Progress from "./Components/Progress";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataError":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "start",
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    default:
      throw new Error("no matching action type");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state?.questions.length;
  //console.log(numQuestions);
  //https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataError" }));
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {state.status === "loading" && <Loader></Loader>}
          {state.status === "error" && <Error></Error>}
          {state.status === "ready" && (
            <StartScreen
              numQuestions={numQuestions}
              dispatch={dispatch}
            ></StartScreen>
          )}
          {state.status === "start" && (
            <>
            <Progress 
            index={state.index}
            points={state.points}
            answer={state.answer}
            numQuestions={numQuestions}
            maxPossiblePoints={state.questions.reduce((acc,question)=>acc+question.points,0)}
             ></Progress>
              <Questions
                question={state?.questions[state?.index]}
                dispatch={dispatch}
                answer={state?.answer}
              ></Questions>

              <NextButton
                dispatch={dispatch}
                answer={state?.answer}
              ></NextButton>
            </>
          )}
        </Main>
      </div>
    </>
  );
}

export default App;
