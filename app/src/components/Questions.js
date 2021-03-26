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
const A1_Jump = ["no", "yes"];

const A1_2 = ["no", "yes", "yes"];
const G2 = ["no", "yes", "no"];

const Jump_to_question_5 = ["yes", "yes", "yes"];

const C1 = ["yes", "no", "no", "yes", "yes", "yes"];
const C1_2 = ["yes", "yes", "no", "yes", "yes", "yes", "yes"];
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
const A2_4 = ["yes", "yes", "no", "yes", "yes", "yes", "no"];

const options = [
  [
    "A1 - Autocratic",
    "You make the decision and inform others of it.",
    "You use the information you already have and make the decision",
  ],
  [
    "A2 - Autocratic",
    "You make the decision and inform others of it.",
    "you ask team members for specific information and once you have it, you make the decision. Here you don't necessarily tell them what the information is needed for",
  ],
  [
    "C1 - Consultative",
    "You gather information from the team and other and then make the decision.",
    "You inform team members of what you are doing and may individually ask opinions, however, the group is not brought together for discussion. You make the decision.",
  ],
  [
    "C2 - Consultative",
    "You gather information from the team and other and then make the decision.",
    "You are responsible for making the decision, however, you get together as a group to discuss the situation, hear other perspectives, and solicit suggestions.",
  ],
  [
    "G2 - Collaborative",
    "You and your team work together to reach a consensus.",
    "The team makes a decision together. Your role is mostly",
    "facilitative and you help the team come to a final decision that everyone agrees on.",
  ],
];

export default function Questions() {
  const [count, setCount] = useState(1);
  const [questionDisplay, setQuestionDisplay] = useState(questionArray[0]);

  const [answersArray, setAnswersArray] = useState([]);

  const [finalPage, setFinalPage] = useState(false);
  const [result, setResult] = useState();

  const handleAnswer = (answer) => {
    const newAnswersArray = answersArray.push(answer);
    if (count < 8) {
      setQuestionDisplay(questionArray[count]);
      setCount(count + 1);

      const stringArray = answersArray.toString();

      //A1:
      if (
        stringArray === A1.toString() ||
        stringArray === A1_2.toString() ||
        stringArray === A1_3.toString() ||
        stringArray === A1_4.toString()
      ) {
        setFinalPage(true);
        setResult(options[0]);
      }

      if (stringArray === A1_Jump.toString()) {
        setCount(5);
      }

      if (stringArray === Jump_to_question_5.toString()) {
        setCount(5);
      }

      //A2:
      if (
        stringArray === A2.toString() ||
        stringArray === A2_2.toString() ||
        stringArray === A2_3.toString() ||
        stringArray === A2_4.toString()
      ) {
        setFinalPage(true);
        setResult(options[1]);
      }
      //C1:
      if (stringArray === C1.toString() || stringArray === C1_2.toString()) {
        setFinalPage(true);
        setResult(options[2]);
      }
      //C2:
      if (
        stringArray === C2.toString() ||
        stringArray === C2_2.toString() ||
        stringArray === C2_3.toString() ||
        stringArray === C2_4.toString()
      ) {
        setFinalPage(true);
        setResult(options[3]);
      }
      //G2:
      if (
        stringArray === G2.toString() ||
        stringArray === G2_3.toString() ||
        stringArray === G2_4.toString()
      ) {
        setFinalPage(true);
        setResult(options[4]);
      }

      //
      //   if (stringArray === A1.toString()) {
      //     setFinalPage(true);
      //     setResult(options[0]);
      //   }
      // } else {
      //   setFinalPage(true);
    }
    console.log(
      "answers Array",
      answersArray,
      "new Answers array",
      newAnswersArray,
      answersArray.toString() === A1.toString()
    );
  };

  return (
    <div>
      {finalPage ? (
        <div>
          <div>Congrats! Your style is: </div>
          <div>{result[0]}</div>
          <div>Your Style: {result[1]}</div>
          <div>Process: {result[2]}</div>
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
