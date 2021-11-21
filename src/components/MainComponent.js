import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Challenge from './ChallengeComponent';

class Main extends Component{

    render() {
        return (
                <div className="container">
                    <Header />
                    <div className="row">
                        <div className="col-md-8">
                            <h1>tagline of the product</h1>
                            <h3>value proposition</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue tempor sem at imperdiet. Suspendisse hendrerit sem eu eros laoreet. </p>
                        </div>
                        <div className="col-md-4">
                            [image]
                        </div>
                    </div>
                    <Challenge />
                    <Footer />
                </div>
            )
    }
} 

export default  Main;
