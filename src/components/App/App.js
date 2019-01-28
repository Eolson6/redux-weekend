import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import FeelingsForm from '../FeelingsForm/FeelingsForm.js';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.js';
import SupportedForm from '../SupportedForm/SupportedForm.js';
import CommentsForm from '../CommentsForm/CommentsForm.js';
import SubmitForm from '../SubmitForm/SubmitForm.js';
import Header from '../Header/Header.js';
import Review from '../Review/Review.js';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess.js'
import HomePage from '../HomePage/HomePage.js'
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submission: false
    }
  }

 


  render() {
    return (
     
      <Router>
        <div>

          <Header/>
         
          {/* {JSON.stringify(this.state)} */}
          
        
       <Link to="/feelingsform">Take me to the First page!</Link>
       {/* <br></br> 
           <Link to="/understandingform">Understanding Form</Link>
          <br></br>
          <Link to="/supportedform">Supported Form</Link>
          <br></br>
          <Link to="/commentsform">Comments Form</Link>
          <br></br>
          <Link to="/submitform">Submit Form</Link> */}
         
          {/* Routes */}
          
          <Route exact path="/app" component={App} />
          <Route exact path="/feelingsform" component={FeelingsForm} />
          <Route exact path="/understandingform" component={UnderstandingForm} />
          <Route exact path="/supportedform" component={SupportedForm} />
          <Route exact path="/commentsform" component={CommentsForm} />
          <Route exact path="/submitform" component={SubmitForm} />
          <Route exact path="/submissionsuccess" component={SubmissionSuccess} />
          <Route exact path="/revew" component={Review} />
          <Route exact path="/homepage" component={HomePage} />
          
          
          
        </div>
      </Router>
      
     
    );
  }
}



const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
