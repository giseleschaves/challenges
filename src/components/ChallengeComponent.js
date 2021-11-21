import React, { Component } from "react";
import { CHALLENGES } from "../shared/challenges";


class Challenge extends Component{
    constructor(props) {
        super(props)
        this.state = {
            challenges: CHALLENGES
        }
    }

    render() {
        const challenge = this.state.challenges.map( challenge => {
            return (
                    <div className="col-sm-4">
                            <img src={challenge.image} alt={challenge.name} width="150" />
                            <br />
                            <h3>{challenge.name}</h3>
                            {challenge.description}
                    </div>
            )
        })
          
        return(
            <div className="row">{challenge}</div>
        )
    }

}

export default Challenge