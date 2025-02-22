import React from "react";

export default function StartScreen({ numQuestins, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react Quiz!</h2>
      <h3>{numQuestins} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
