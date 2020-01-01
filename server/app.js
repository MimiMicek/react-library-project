const express = require("express");
const app = express();
const path = require("path");

const server = app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});