"use strict";

/**
 * Function to Create a user
 */
function createUser() {
    var username = document.getElementById('resUsername').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('resPassword').value;
    var userDoesntExists = true;
    fetch('http://localhost:8081/allReg')
        .then(result => {
            return result.json();
        })
        .then(data => {
            for (var x = 0; x < data.length; x++) {
                if (username == data[x].username || data[x].email == email) {
                    alert("This username or email already exist.");
                    userDoesntExists = false;
                    break;
                }
            }
            if (userDoesntExists) {
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open('POST', '/res');
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr.send('username=' + username + '&email=' + email + '&password=' + password);
                reset(document.getElementById("formRes"));
            }
        });
}

/**
 * Function to login into the website
 */
function fetchUser() {
    var username = document.getElementById('logUsername').value;
    var password = document.getElementById('logPassword').value;
    fetch('http://localhost:8081/log/' + username)
        .then(result => {
            return result.json();
        })
        .then(data => {
            try {
                if (data[0].username == username && data[0].password == password) {
                    var table = document.getElementById('LoggedOn').getElementsByTagName('tbody')[0];
                    var table2 = document.getElementById('LoggedPerm').getElementsByTagName('tbody')[0];
                    var row = table.insertRow();
                    var newCell = row.insertCell(0);
                    var newText = document.createTextNode(username);
                    newCell.appendChild(newText);
                    var row2 = table2.insertRow();
                    var newCell2 = row2.insertCell(0);
                    var newText2 = document.createTextNode(data[0].permissions);
                    newCell2.appendChild(newText2);
                    document.getElementById("containerRegister").style.display = "none";
                    document.getElementById("containerLogIn").style.display = "none";
                    document.getElementById("LoggedOn").style.display = "inline";
                    document.getElementById("LoggedPerm").style.display = "inline";
                    document.getElementById("logOff").style.display = "block";
                    if (data[0].permissions == "all") {
                        document.getElementById("Permissions").style.display = "block";
                    }
                    reset(document.getElementById("formLog"));
                } else {
                    alert("The password is incorrect");
                }
            } catch (error) {
                alert("That username does not exist in our database");
            }
        });
}

/**
 * Function to grant the user permissions
 */
function grantUser() {
    var username = document.getElementById('permUsername').value;
    var permissions = document.getElementById('permGrant').value;
    var table2 = document.getElementById('LoggedPerm');
    var cells2 = table2.getElementsByTagName("td");
    if (cells2[0].innerText === "all") {
        if (permissions === "all" || permissions === "none" || permissions === "Economic" || permissions === "Social" || permissions === "Environmental") {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('PUT', '/grant/' + username);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('username=' + username + '&permissions=' + permissions);
            reset(document.getElementById("formPerm"));
        } else {
            alert("The only permissions allowed are: all / none / Economic / Social / Environmental.")
        }
    }
}

/**
 * Function to grant the user permissions
 */
function logout() {
    document.getElementById('LoggedPerm').deleteRow(1);
    document.getElementById('LoggedOn').deleteRow(1);
    document.getElementById("containerLogIn").style.display = "block";
    document.getElementById("LoggedOn").style.display = "none";
    document.getElementById("LoggedPerm").style.display = "none";
    document.getElementById("logOff").style.display = "none";
    document.getElementById("Permissions").style.display = "none";
}

/**
 * Function to clear the forms input boxes
 */
function reset(object) {
    object.reset();
}

