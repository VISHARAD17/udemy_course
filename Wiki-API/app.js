const express = require("express");
// const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// connection to mongoDB
mongoose.connect("mongodb://localhost:27017/wikiDB");
// new schema
const articleSchema = {
    title: String,
    content: String
}
// model
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
    .get((req, res) =>{
        Article.find({}, (err, foundList) =>{
            if(!err) res.send(foundArticles);
            else res.send(err);
        });
    })
    .post((req, res) =>{
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
    
        newArticle.save((err) => {
            if(err) res.send(err);
            else res.send("Successfully added");
        });
    })
    .delete((req, res) =>{
        Article.deleteMany((err) => {
            if(!err) res.send('Successfull deleted all articles');
            else res.send(err);
        });
    });

app.route("/articles/:articleTitle")
    .get((req, res) => {
        const articleTitle = req.params.articleTitle;
        Article.findOne({title: articleTitle}, (err, foundArticle) => {
            if(foundArticle) res.send(foundArticle);
            else res.send("No matching articles");
        });
    })
    // put replaces entire document with that matching title
    // with the given data ( if title is not given then it will remove title
    // keeping just content cause that's only been given or send)
    .put((req, res) => {
        // const articleTitle = req.params.articleTitle;
        Article.replaceOne(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            (err) => {
                if(!err) res.send("Successfully updated");
                else res.send(err);
            }
        );
    })
    // wiwiwil aipajafhso[gho[wrhghwro[intygo wehio 'huoweh t[uow huo[h [uh ]]]]]]
    .patch((req, res) =>{
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set:req.body},
            (err) =>{
                if(!err) res.send("Successfully updated");
                else res.send(err);
            }
        );
    })
    // delete a single article
    .delete((req, res) =>{
        Article.deleteOne(
            {title: req.params.articleTitle},
            (err) => {
                if(!err) res.send("successfully deleted");
                else res.send(err);
            }
        )
    });
// app.get('/articles', (req, res) => {
//     Article.find({}, (err, foundArticles) => {
//         // console.log(foundArticle);
//         if(!err) res.send(foundArticles);
//         else res.send(err);
//     }); 
// });

// app.post('/articles', (req, res) => {
//     // console.log(req.body.content); console.log(req.body.title); 
   

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save((err) => {
//         if(err) res.send(err);
//         else res.send("Successfully added");
//     });
// });

// app.delete("/articles", (req, res) =>{
//     Article.deleteMany((err) => {
//         if(!err) res.send('Successfull deleted all articles');
//         else res.send(err);
//     });
// });

app.listen(3001, function() {
  console.log("Server started on port 3001");
});