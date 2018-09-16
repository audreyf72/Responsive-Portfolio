var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('../index.html')
})

$(document).ready(function(){

    $("#mainContent").click(function(){
        $("#topFrame").slideUp("slow");
    });

    function myFunction() {
    document.getElementById("contactForm").submit();
    };

});