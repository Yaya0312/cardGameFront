import React, { useState } from "react";
import Header from "../../components/Header";
import Play from "../../components/Play";
import JankenGame from "../../components/JankenGame";
import Footer from "../../components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {o
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game/janken">
            <JankenGame myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
