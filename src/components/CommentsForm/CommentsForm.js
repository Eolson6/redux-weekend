import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.js'
import Button from '@material-ui/core/Button'

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    // Function called as the user input changes
    handleChange = (event) => {
        console.log('comments', event.target.value);
        this.setState({
            input: event.target.value,


        });
    }

    //dispatch info to reducer
    handleNext = (event) => {
        if (this.state.input != "") {
            const action = { type: 'UPDATE_COMMENTS', payload: this.state.input };
            this.props.dispatch(action);
            this.setState({
                input: '',
                submission: true,
            });

            this.props.history.push('/submitform')
        } else {
            alert('Please complete section')
        }
    }
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
                    <h1>Comments</h1>
                    <h2>Anything you would like us to know?</h2>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                    <Button variant="contained" color="primary" onClick={this.handleNext}>Next</Button>
                </form>

                <Review />

                {/* seperate submit button */}
                <button onClick={this.handleSubmit}>submit</button>>
               </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(CommentsForm);