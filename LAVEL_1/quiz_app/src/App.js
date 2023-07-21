import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useEffect } from "react";
import { useReducer } from "react";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import StartScreen from "./Components/StartScreen";
import Questions from "./Components/Questions";

const initialState = {
  questions: [],

  status: "loading",
  index: 0,
  answer:"null"
};

function reducer(state=initialState, action) {
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
    default:
      throw new Error("no matching action type");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions=state?.questions.length;
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
      <div className="App">
        <Header />
        <Main>
        {state.status ==="loading" && <Loader></Loader>}
        {state.status ==="error" && <Error></Error>}
        {state.status ==="ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}></StartScreen>}
        {state.status ==="start" && <Questions question={state?.questions[state?.index]}></Questions> }
        </Main>

        
      </div>
    </>
  );
}

export default App;
