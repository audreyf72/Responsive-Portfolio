var nodemailer = require('nodemailer');

$(document).ready(function(){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'audreydesigns@gmail.com',
               pass: 'kkcanon247'
           }
       });

    $("#mainContent").click(function(){
        $("#topFrame").slideUp("slow");
    });

    function myFunction() {
    document.getElementById("contactForm").submit();
    };

});