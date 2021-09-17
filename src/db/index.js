const { connect } = require("mongoose");

// const LOCAL_URI = "mongodb://localhost:27017";
const URI = "mongodb+srv://talha_shaikh:4A%23%25d9TS3%23DYAmh@cluster0.7pqln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connect(URI)
    .then(conn => {
        console.log("Mongoose connected!")
    })
    .catch(err=>console.log(err))