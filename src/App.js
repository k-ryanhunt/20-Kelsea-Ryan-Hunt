import React from "react";
import "./App.css";
import Wrapper from "./components/wrapper/wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navBar/navBar";
import About from "./pages/aboutMe";
import Portfolio from "./pages/workPortfolio";
import Contact from "./pages/contactMe";
import NotFoundPage from "./pages/notFound";
function App() {
  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={NotFoundPage} />{" "}
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
