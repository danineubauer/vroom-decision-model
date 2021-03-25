import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ maxWidth: "1000px" }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <WelcomePage />
              </Route>
              <Route path="/question-page">
                <Questions />
              </Route>
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
