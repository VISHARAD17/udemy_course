// import { MongoClient } from "mongodb";

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');
// fruitSchema without validator
// const fruitSchema = new mongoose.Schema({
//     // name cannot be null as without name data doese not make sense
//     name: Number,
//     rating: Number,
//     review: String
// });

// fruitSchema with validations
const fruitSchema = new mongoose.Schema({
    // name cannot be null as without name data doese not make sense
    name: {
        type: String,
        required: [true, "Name cannot be empty!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    }, 
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const Apple = new Fruit({
    name: 'Apple', 
    rating: 7,
    review: 'Pretty solid as a fruit'
});

const peach = new Fruit({
    name : "Peach",
    rating: 10,
    review: 'peach is not that tasty for me'
});

// inserting one document
// peach.save();

//updating the document
// Fruit.updateOne({_id:"62bdcb7f3cee8ca8dcca2776"}, {name: "Watermelon"}, (err) =>{
//     if(err) console.log(err);
//     else console.log("Succesfully updated !");
// });

// deleting peach document
Fruit.deleteOne({name: "Apple"}, (err) => {
    if(err) console.log(err);
    else console.log("Successfully deleted !");
})

// const personSchema = new mongoose.Schema({
//     name: String, 
//     age: Number
// });

// // creating new different scheme
// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "visharad",
//     age: 22
// });

// // this will also be get inserted into fruitDB
// person.save();

// const kiwi = new Fruit({
//     name: 'kiwi', 
//     rating: 10,
//     review: 'Best fruit!'
// });

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 3,
//     review: 'weird texture'
// });

// insert multiple documents
// Fruit.insertMany([kiwi, banana], (err) => {
//     if(err) console.log(err);
//     else console.log("successfully saved all the fruits");
// });


Fruit.find((err, fruits) => {
    if(err) console.log(err);
    else{
        // close the connection once we are done
        mongoose.connection.close();
        fruits.forEach((fruit) =>{
            console.log(fruit.name);
        });
    }
});