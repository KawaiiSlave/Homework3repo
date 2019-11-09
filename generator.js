var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var all = uppercase + lowercase + numbers + symbols;
    
    

    var length = prompt("Please enter a password length from 8-128");

    var type = prompt("Would you like to use special characters?")

    var password = "";
    
    function generatePwd() {
        for (var i = 0; i <= length; i++) {
        password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length-1)));
        

    }
    
    document.getElementById("pwd").value = password;

    
}

    function copy(){

        document.getElementById("pwd").select();

        document.execCommand("Copy");

        alert("Password copied to clipboard!");


    }

    
        

