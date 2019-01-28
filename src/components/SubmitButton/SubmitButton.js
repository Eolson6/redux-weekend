import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubmitButton extends Component {

    //function able to be called once user has completed al the forms
    handleSubmit = (event) => {
        console.log('in review handle submit');

        if (this.props.reduxState.submissionSucess === 'true') {
            this.props.history.push('/submissionsuccess')
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>submit</button>
            </div>
        );
    }
}


export default withRouter(SubmitButton);