import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'
import Button from '@material-ui/core/Button'



class FeelingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            name: '',
        }
    }

    // Function called as user selects feelings rating
    handleChange = (event) => {
        console.log('feelings', event.target.value);
        this.setState({
            input: event.target.value,

        });
    }

    //function called when user hits next
    handleNext = (event) => {
        if (this.state.input != "" || this.state.name != "") {
            const action = { type: 'UPDATE_FEELINGS_RATING', payload: this.state.input };
            this.props.dispatch(action);
            this.setState({
                input: '',
            });
            this.props.history.push('understandingform')
        } else {
            alert('Please complete section')
        }
    }


    //function called when user enters name information
    handleNameChange = (event) => {
        console.log('name', event.target.value);
        this.setState({
            name: event.target.value,

        });
    }

    //function called when user hits login to dispatch user information 
    userLogin = (event) => {
        if (this.state.input != "" || this.state.name != "") {
            const action = { type: 'ADD_USER', payload: this.state.name };
            this.props.dispatch(action);
            this.setState({
                name: '',
            });
        } else {
            alert('Please complete section')
        }
    }

    //function called once user has completed feedback form
    submit = (event) => {
        console.log('in review handle submit');
        const userFeedback = {
            feeling: this.props.reduxState.feelingsFeedback,
            understanding: this.props.reduxState.understandingfeedback,
            support: this.props.reduxState.supportedFeedback,
            comments: this.props.reduxState.commentsFeedback,
            name: this.props.reduxState.userName
        };
        console.log(userFeedback);
    }

    render() {
        return (





            <div>
                <form className="userInput">
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    <Button variant="contained" color="primary" onClick={this.userLogin}>Login</Button>
                    <h1>How are you Feeling?</h1>
                    <h2>1 would be the lowest, and 5 is the highest.</h2>
                    <select onChange={this.handleChange} value={this.state.input}>
                        {/* {JSON.stringify(this.state.input)} */}
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

export default connect(mapReduxStateToProps)(FeelingsForm);