import { React } from "react";
import { useHistory } from "react-router-dom";

export default function WelcomePage() {
  let history = useHistory();

  function handleStart() {
    history.push("/question-page");
  }
  return (
    <div>
      <div>The Vroom-Yetton-Jago Decision Model</div>
      <button type="button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
