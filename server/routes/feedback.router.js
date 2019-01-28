const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// const userfeedack = {
//     feeling,
//     understanding,
//      support,
//      comments

// // };



router.post('/', (req, res) => {
    console.log('in post', req.body);
    
    const userFeedack = {
        feeling,
        understanding,
        support,
        comments,
        name

    } = req.body;
    
    console.log(req.body);
    // const userFeedack = req.body;
    
    queryText = `INSERT INTO "feedback"("feeling", 
                "understanding", "support", "comments", "name")
                VALUES( $1, $2, $3, $4, $5);`
    pool.query(queryText, [feeling, understanding, 
                            support, comments, name])
                            .then((databaseresponse) => {
       
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error in post',error);
        res.sendStatus(500);
        
    })
})
    


module.exports = router;