import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'
import Button from '@material-ui/core/Button'

class SupportedForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    // Function called as the user input changes
    handleChange = (event) => {
        console.log('supported', event.target.value);
        this.setState({
            input: event.target.value,

        });
    }

    //function called when user hits next. info is dispatched to redux state
    handleNext = (event) => {
        if (this.state.input != "") {
            const action = { type: 'UPDATE_SUPPORTED_RATING', payload: this.state.input };
            this.props.dispatch(action);
            this.setState({
                input: '',
                submission: true
            });
            this.props.history.push('commentsform')
        } else {
            alert('Please complete section')
        }
    }

    render() {
        return (
            <div>
                <form className="userInput">
                    <h1>Are you feeling supported?</h1>
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

export default connect(mapReduxStateToProps)(SupportedForm);