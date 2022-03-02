const express = require('express');
const app = express();

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/bfhl', function(req, res){
    let response = {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email" : "john@xyz.com",
        "roll_number":"ABCD123",
        "numbers": req.body.data.filter(function(n){
            return Number.isInteger(parseInt(n))? n : null;
            }),
        "alphabets": req.body.data.filter(function(n){
            return !Number.isInteger(parseInt(n))? n : null;
        }),

    };
    console.log(response.alphabets);
    res.send(response);
});

app.listen(process.env.PORT||8080, function(){
    console.log('listening on port 8080');
});
