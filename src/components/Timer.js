import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const mins = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
  const seconds = String(secondsRemaining % 60).padStart(2, "0");

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins}:{seconds}
    </div>
  );
}

export default Timer;
