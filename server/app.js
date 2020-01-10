const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10 
});

app.use("/users/login", authLimiter);

app.use("/users/signup", authLimiter);

const usersRoute = require("./routes/usersRoute");
const booksRoute = require("./routes/booksRoute");

app.use("/books/add-book", booksRoute);

app.use(usersRoute);
app.use(booksRoute);

const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.get("/backend", (req, res) => {
    res.send({ express: "The backend is now connected to React" });
});

server.listen(port, (error) => {
    if(error){
        console.log(error);
    }
    console.log(`Server is running on port ${port}!`);
});