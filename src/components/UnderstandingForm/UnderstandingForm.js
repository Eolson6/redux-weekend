import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'
import Button from '@material-ui/core/Button'

class UnderstandingForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    // Function called as the user input changes
    handleChange = (event) => {
        console.log('understanding', event.target.value);
        this.setState({
            input: event.target.value,

        });
    }

    //function called when user hits next to dispatch info to redux state
    handleNext = (event) => {
        if (this.state.input != "") {
            const action = { type: 'UPDATE_UNDERSTANDING_RATING', payload: this.state.input };
            this.props.dispatch(action);
            this.setState({
                input: '',
            });
            this.props.history.push('supportedform');
        } else {
            alert('Please complete section')
        }
    }

    //function called when submission sucess state is true
    //submits info to the database
    HandleSubmit = (event) => {
        console.log('in review handle submit');

        if (this.props.reduxState.submissionSucess === 'true') {


            this.props.history.push('submissionsuccess')
        } else {
            alert('Please complete section')
        }
    }

    render() {
        return (
            <div>
                <form className="userInput">
                    <h1>Do you feel you are understanding the material?</h1>
                    <h2>1 would be the lowest, and 5 is the highest.</h2>

                    <select onChange={this.handleChange} value={this.state.input}>
                        <option value=''>Choose</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <Button variant="contained" color="primary" onClick={this.handleNext}>Next</Button>
                </form>
                <Review />
                <button onClick={this.handleSubmit}>submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(UnderstandingForm);