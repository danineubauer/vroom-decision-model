import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//https://moodle2.brandeis.edu/pluginfile.php/2048571/mod_resource/content/2/Handouts%20-%20Decision%20Making.pdf

export default function WelcomePage() {
  const [displayAbout, setDisplayAbout] = useState(false);
  let history = useHistory();

  function handleStart() {
    history.push("/question-page");
  }
  return (
    <div>
      {displayAbout ? (
        <div>
          <h6
            onMouseEnter={() => setDisplayAbout(false)}
            style={{ position: "absolute", bottom: -20, left: 20 }}
          >
            Return ->
          </h6>
          <h6 style={{ fontWeight: 100, lineHeight: 1 }}>
            How you go about making a decision can involve as many choices as
            the decision itself.
            <br></br>
            <br></br>
            Sometimes you have to take charge and decide what to do on your own.
            Other times it's better to make a decision using group consensus.
            <br></br>
            <br></br>
            How do you decide which approach to use? Making good decisions is
            one of the main leadership tasks. Part of doing this is determining
            the most efficient and effective means of reaching the decision. You
            don't want to make autocratic decisions when team acceptance is
            crucial for a successful outcome. Nor do you want be involving your
            team in every decision you make, because that is an ineffective use
            of time and resources.
            <br></br>
            <br></br>
            What this means is you have to adapt your leadership style to the
            situation and decision you are facing. Autocratic styles work some
            of the time, highly participative styles work at other times, and
            various combinations of the two work best in the times in between.
            <br></br>
            <br></br>
            The <b>Vroom-Yetton-Jago Decision Model</b> provides a useful
            framework for identifying the best leadership style to adopt for the
            situation you're in
          </h6>
        </div>
      ) : (
        <div>
          <h6
            onMouseEnter={() => setDisplayAbout(true)}
            style={{
              position: "absolute",
              top: -20,
              left: 20,
              cursor: "pointer",
            }}
          >
            About
          </h6>
          <div>The Vroom-Yetton-Jago Decision Model</div>
          <h3>Deciding How to Decide</h3>
          <h5>- An interactive tool - </h5>
          <button type="button" onClick={handleStart}>
            Start
          </button>
        </div>
      )}
    </div>
  );
}
