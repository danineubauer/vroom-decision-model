import React, { useState } from "react";

const questionArray = [
  "Is the quality of the decision important?",
  "Is team commitment important to the decision",
  "Do you have anough info to make the decision on your own?",
  "Is the problem well-structured?",
  "If you made the decision yourself, would the team support it?",
  "Does the team share organizational goals?",
  "Is conflict amongst the team over the decision likely?",
];

const A1 = ["no", "no"];
const A1_2 = ["no", "yes", "yes"];
const G2 = ["no", "yes", "no"];
const C2 = ["yes", "no", "no", "no"];
const A1_3 = ["yes", "no", "yes"];
const A2 = ["yes", "no", "no", "yes", "no"];
const A1_4 = ["yes", "no", "no", "yes", "yes", "yes"];
const A2_2 = ["yes", "no", "no", "yes", "yes", "no"];
const C2_2 = ["yes", "yes", "no", "no", "no", "no"];
const C2_3 = ["yes", "yes", "no", "no", "yes"];
const G2_3 = ["yes", "yes", "no", "no", "no", "yes"];
const A2_3 = ["yes", "yes", "yes", "yes"];
const G2_4 = ["yes", "yes", "yes", "no", "yes"];
const C2_4 = ["yes", "yes", "yes", "no", "no"];

export default function Questions() {
  const [count, setCount] = useState(1);
  const [questionDisplay, setQuestionDisplay] = useState(questionArray[0]);

  const [answersArray, setAnswersArray] = useState([]);

  const [finalPage, setFinalPage] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswersArray = answersArray.push(answer);
    if (count < 7) {
      setQuestionDisplay(questionArray[count]);
      setCount(count + 1);
    } else {
      setFinalPage(true);
    }
    console.log(
      "answers Array",
      answersArray,
      "new Answers array",
      newAnswersArray,
      newAnswersArray.toString(),
      A1.toString()
    );
  };

  return (
    <div>
      {finalPage ? (
        <div>
          <div>Congrats! Here's your decision:</div>
        </div>
      ) : (
        <div>
          <div>Question {count}</div>
          <div>
            <div style={{ margin: "20px" }}>{questionDisplay}</div>
            <button onClick={() => handleAnswer("yes")}>Yes</button>
            <button onClick={() => handleAnswer("no")}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}
