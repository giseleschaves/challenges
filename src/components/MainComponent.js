import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import ChallengeNew from "./ChallengeNewComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { CHALLENGES } from "../shared/challenges";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: CHALLENGES,
    };
  }

  addChallenge = (newChallenge) => {
    this.setState(
      {
        challenges: [...this.state.challenges, newChallenge],
      },
      () => console.log("state:", this.state)
    );
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route
            path="/home"
            render={() => <Home challenges={this.state.challenges} />}
          />
          <Route
            exact
            path="/challengenew"
            render={() => <ChallengeNew addChallenge={this.addChallenge} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
