function Options({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div>
      {question.options.map((option, i) => (
        <button
          key={i}
          className={`btn btn-option ${i === answer ? "answer" : null} ${
            hasAnswerd
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : null
          }
          ${i === answer && i !== question.correctOption ? "wrong2" : ""} `}
          disabled={hasAnswerd}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: i });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
