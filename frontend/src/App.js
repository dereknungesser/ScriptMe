import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import TextEditor from "./components/TextEditor/TextEditor"
import Homeview from "./components/Homeview/Homeview"
import Projects from "./components/Projects/Projects"
import CharacterGenerator from "./components/CharacterGenerator/CharacterGenerator"
import IdeasWeb from "./components/IdeasWeb/IdeasWeb.js"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
          <Switch>
            <Route path="/texteditor">
              <TextEditor />
            </Route>
            <Route path="/characters">
              <CharacterGenerator />
            </Route>
            <Route path="/documents">
              <Projects />
            </Route>
            <Route path="/ideas">
              <IdeasWeb />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/">
              <Homeview />
            </Route>
          </Switch>
      )}
    </>
  );
}

export default App;
