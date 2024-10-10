import Options from "./Options";

function Qustion({ question, dispatch, answer }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Qustion;
