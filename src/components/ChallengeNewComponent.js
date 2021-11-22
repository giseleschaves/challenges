import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';


class ChallengeNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            topic: [],
            description: '',
            image: '',
            scenario: '',
            task: '',
            tutorials: [
                
            ],
            tools: [
                {
                    name: '',
                    icon: '',
                    url: ''
                }
            ],
            touched: {
                title: false,
                topic: false,
                description: false,
                image: false,
                scenario: false,
                task: false,
                toolName: false
            }                
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    validade(title) {
        const errors = {
            title: '',
            description: '',
            image: '',
            scenario: '',
            task: '',
            tutorial: '',
            toolName: ''
        }

        if(this.state.touched.title) {
            if(title.length <5) {
                errors.title = "Title must must be at least 5 characteres"
            } else if(title.length > 30) {
                errors.title = 'Title name must be at least 30 characters.'
            }
        }

        return errors
    }

    handleBlur = (field) => () => {
        this.setState( {
            touched: {...this.state.touched, [field]:true }
        })
    }
    handleInputChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){

        const errors = this.validade(this.state.title, this.state.description, this.state.image, this.state.scenario, this.state.task)

        return(
               <React.Fragment>
                    <div className="row">
                        <div className="col-12">
                            <h3>Create a New Challenge</h3>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-10">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="title" md={2}>Title</Label>
                                <Col md={10}>
                                    <Input type="text" id="title" name="title" placeHolder="Title"
                                        value={this.state.title}
                                        invalid={errors.title}
                                        onBlur={this.handleBlur("title")}
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.title}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="description" md={2}>Description</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="description" name="description" placeHolder="description of the challenge"
                                        value={this.state.description}
                                        invalid={errors.description}
                                        onBlur={this.handleBlur("description")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.description}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="image" md={2}>Image</Label>
                                <Col md={10}>
                                    <Input type="file" id="image" name="image"
                                        value={this.state.image}
                                        invalid={errors.image}
                                        onBlur={this.handleBlur("image")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.image}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="scenario" md={2}>Scenario</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="scenario" name="scenario" placeHolder="describe the scenario for the challenge"
                                        value={this.scenario}
                                        invalid={errors.scenario}
                                        onBlur={this.handleBlur("scenario")} 
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.scenario}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="task" md={2}>Task</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="task" name="task" placeHolder="describe the task"
                                        value={this.task}
                                        invalid={errors.task}
                                        onBlur={this.handleBlur("task")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.task}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Create a challenge
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                </React.Fragment>
        )
    }
}

export default ChallengeNew