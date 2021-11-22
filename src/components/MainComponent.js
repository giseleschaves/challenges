import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Challenge from "./ChallengeComponent";
import ChallengeNew from "./ChallengeNewComponent";
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
        <div className="row p-5">
          <div className="col-md-8 order-2 order-md-1">
            <h1>tagline of the product</h1>
            <h3>value proposition</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque congue tempor sem at imperdiet. Suspendisse hendrerit
              sem eu eros laoreet.{" "}
            </p>
          </div>
          <div className="col-md-4 order-1 order-md-2">
            <img
              src="/assets/images/placeholder-image.png"
              alt="our brand"
              width="400"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>How it works</h3>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-4">[step1]</div>
          <div className="col-4">[step2]</div>
          <div className="col-4">[step3]</div>
        </div>
        <Challenge challenges={this.state.challenges} />
        <ChallengeNew addChallenge={this.addChallenge} />
        <Footer />
      </div>
    );
  }
}

export default Main;
