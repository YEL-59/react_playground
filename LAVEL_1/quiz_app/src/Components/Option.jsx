import React from "react";

const Option = ({ question, dispatch, answer }) => {
  const hasAnsered = answer !== null;
  return (
    <>
      <div className="options">
        {" "}
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnsered ?
              index === question.correctOption ? "correct" : "wrong":''
            }`}
            key={option}
            disabled={hasAnsered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
export default Option;
