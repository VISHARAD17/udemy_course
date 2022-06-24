const express = require('express');
// const bodyParser = require('body-parser');
const request = require('request');

// to use static files
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
// app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);

});

app.listen(3000, () => {
    console.log("server is up and running on PORT 3000");
});

// mailCimps
// c6c1e8c2e8c6dc3b4b5869892762cceb-us9