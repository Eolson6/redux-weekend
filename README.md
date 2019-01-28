
### SETUP/PREREQUISITES

Create your database and tables using the provided `data.sql` file. Start the server.
npm install:
"@material-ui/core": "^3.9.1",
    "axios": "^0.17.1",
    "express": "^4.16.4",
    "pg": "^7.8.0",
    "react": "^16.7.0",
    "react-dom": "^16.4.1",
    "react-redux": "^6.0.0",
    "react-router-dom": "^4.3.1",
    "react-scripts": "^2.1.3",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6"


Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### COMPLETED FEATURES

Created a user feedback loop which consists of 10 different components designed to act independently of each other. Review component will continually update as the user navigates through the components to complete their feedback. Information is dispatched to redux state using reducers and called to display for the user to reivew. User cannot proceed to the next page until they have completed the current form. Submit button is not active until the user has added comments. When the user hits the submit button, the information is sent to be stored in the database and the user will be taken to a submission sucess page.


## NEXT STEPS
In the future I would like to add feature that requires the user to enter their name. I would like an auto refresh function once the user has submitted their review. Also I would like to update the styling of the page.


## AUTHORS

> Erin Olson

### ACKNOLEDGEMENT 

Thanks to Prime Digital Academy


