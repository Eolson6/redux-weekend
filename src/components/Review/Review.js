import React, { Component } from 'react';
import { connect } from 'react-redux';



class Review extends Component {

    //no function called - compnent used to dixplay frlom reduxstate



    render() {
        return (
            <div>
                <h1>Review Feedback</h1>
                <h1>Name:{this.props.reduxState.userName}</h1>
                <h1>Feelings:{this.props.reduxState.feelingsFeedback}</h1>
                <h1>Understanding:{this.props.reduxState.understandingfeedback}</h1>
                <h1>Supported:{this.props.reduxState.supportedFeedback}</h1>
                <h1>Comments:{this.props.reduxState.commentsFeedback}</h1>

                {/* {JSON.stringify(this.props.submission)} */}
            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Review);
