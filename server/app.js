const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

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

const usersRoute = require('./routes/usersRoute');

app.use(usersRoute);

const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.get("/backend", (req, res) => {
    res.send({ express: "The backend is now connected to React" });
});

const server = app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});