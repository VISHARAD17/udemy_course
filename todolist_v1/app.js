const express = require('express');
const app = express();
const port = 3000;
// tells the app to use ejs as view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true})); // instead of body parser

var items = [];

app.get("/", (req, res) => {
    const today = new Date();
    var options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: day, newListItem: items});
});


app.post("/", (req, res) => {
    var item = req.body.newItem;
    // console.log(item);
    items.push(item);
    res.redirect("/"); // go to home
});

app.listen(port, () => {
    console.log("server is up and running on port" + port);
});