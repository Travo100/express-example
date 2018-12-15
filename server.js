var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var userList = [
    {
        "name": "Travis Thompson",
        "email": "tthompson@bootcampspot.com"
    }
];

// Our view routes 
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "public/contact.html"));
});

// Our data routes

app.get("/api/users", function(req, res){
    res.json(userList);
});

app.post("/api/users", function(req, res){
    var user = req.body;
    userList.push(user);

    res.json({
        message: "User added to list!",
        data: user
    });
});

app.listen(PORT, function(){
    console.log(`App is running on ${PORT}`);
});