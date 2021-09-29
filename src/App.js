import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/all" component={About} />
      </Switch>
      <Route path="/">
          <About />
        </Route>
    </div>
  </Router>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}