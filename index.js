var express = require("express");
const bodyParser = require("body-parser");
const cartService = require("./service");

var app = express();

// if data is sent with Content-Type: application/json
app.use(express.json());

// if data is sent with Content-Type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ 
//     extended:true
// }));

var successObj = {
    "code": "00",
    "msg": "success",
    "data": {

    }          
};

var errorObj = {
    "code": "99",
    "msg": "error"       
};

app.post("/api/add2cart", (req, res, next) => {
    var inputJSON = req.body;
    console.log(inputJSON);
    
    if (!inputJSON.products) {
        errorObj.msg = "Empty body params!";
        res.json(errorObj);
    }

    var error = cartService.validateCart(inputJSON.products);

    console.error("error:" + error);

    if (error == "") {
        // sending JSON response
        res.json(successObj);
    }
    else {        
        errorObj.msg = error;
        console.error(errorObj);
        res.json(errorObj);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});