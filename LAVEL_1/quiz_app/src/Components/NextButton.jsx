import React from "react";

const NextButton = ({ dispatch, answer }) => {
  const hasAnsered = answer === null;
  return (
    <>
      {hasAnsered ? (
        <button className="btn btn-ui" disabled>
          Next
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </>
  );
};

export default NextButton;
