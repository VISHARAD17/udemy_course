const express = require('express');
const app = express();
const port = 3000;
const date = require(__dirname + '/date.js');
// tells the app to use ejs as view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true})); // instead of body parser
app.use(express.static('public'));
var items = [];
var workItems = [];
app.get("/", (req, res) => {
    
    let day = date.getDate();

    res.render('list', {listTitle: day, newListItem: items});
});

// new route for work page
app.get("/work", (req, res) => {
    res.render('list', {listTitle:"Work List", newListItem: workItems});
});

app.post("/work", (req, res) => {

});

app.post("/", (req, res) => {
    if(req.body.res)
    console.log(req.body)
    var item = req.body.newItem;
    // console.log(item);
    items.push(item);
    res.redirect("/"); // go to home
});

app.listen(port, () => {
    console.log("server is up and running on port" + port);
});