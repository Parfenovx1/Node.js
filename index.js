const express = require("express");
const server = express();
const person = require("./person")

let persons = [
    new person("Nikolay", 18),
    new person("Vasilyi", 22),
    new person("Danik", 19),
    new person("Ivan", 23),
    new person("Daniil", 23)
]

server.get("/", (req, res) => res.send(persons))

server.listen(3000, () => console.log("Server is working on localhost:3000"));