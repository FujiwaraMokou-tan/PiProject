"use strict";

/**
 * Function to Add to the table of articles a newly created article
 * @param articleTitle - the article's title that will be added
 */
function addToTable(articleTitle) {
    var table = document.getElementById('articlesTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var newCell = row.insertCell(0);
    var newText = document.createTextNode(articleTitle);
    newCell.appendChild(newText);
}

/**
 * Function to create an article, it verifies if the current user is logged and if he has the required permission
 */
function articleInfo() {
    var table2 = document.getElementById('LoggedPerm');
    var cells2 = table2.getElementsByTagName("td");
    if (cells2[0] !== undefined) {
        var option = document.getElementById('sectionOptions').value;
        if (cells2[0].innerText == "all" || cells2[0].innerText == option) {
            let articleTitle = document.getElementById('nameOfArticle').value;
            let authorName = document.getElementById('nameOfAuthor').value;
            let description = document.getElementById('descrip').value;
            if (validateMyForm(articleTitle, authorName, description)) {
                createArticle(articleTitle, authorName, option, description)
            } else {
                alert("Submission failed certain validations.")
            }
        } else {
            alert("You do not have permission to create that type of article.")
        }
    } else {
        alert("You must be logged in to create an article.")
    }
}

/**
 * Function to update an article
 */
function putInfo() {
    var articleTitle = document.getElementById('editNameOfArticle').value;
    fetch('http://localhost:8081/' + articleTitle)
        .then(result => {
            return result.json();
        })
        .then(data => {
            putArticle(data);
        });
}

/**
 * Function to update an article
 */
function putArticle(data) {
    var table = document.getElementById('articlesTable');
    var cells = table.getElementsByTagName("td");
    var table2 = document.getElementById('LoggedPerm');
    var cells2 = table2.getElementsByTagName("td");
    var articleTitle = document.getElementById('editNameOfArticle').value;
    var option = document.getElementById('editSectionOptions').value;
    var description = document.getElementById('editDescrip').value;
    var updated = false;
    if (validateMyEditForm(articleTitle, description)) {
        try {
            if (cells2[0].innerText == "all" || cells2[0].innerText == option && data[0].sectionOption == cells2[0].innerText) {
                for (var x = 0; x < (table.rows.length - 1); x++) {
                    if (cells[x].innerText == articleTitle) {
                        var xhr = new XMLHttpRequest();
                        xhr.responseType = 'json';
                        xhr.open('PUT', '/' + articleTitle);
                        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        xhr.send('nameOfArticle=' + articleTitle + '&sectionOption=' + option + '&descrip=' + description);
                        reset(document.getElementById("editArticle"));
                        updated = true;
                        break;
                    }
                }
                if (!updated) {
                    alert("That title doesnt exist.")
                }
            } else {
                alert("Submission could not be edited due to of lack of permissions.")
            }
        } catch (error) {
            alert("User must be logged on to edit an article.")
        }
    } else {
        alert("Submission could not be edited due to not meeting the validation requirements.")
    }
}

/**
 * Function to see if the validations for the creation of an article are correct
 * @param articleTitle - the article's title that will be added
 * @param authorName - The name of the author
 * @param description - the content of the article
 */
function validateMyForm(articleTitle, authorName, description) {
    if (articleTitle.length <= 6) {
        alert('Title is too short');
        return false;
    }
    if (authorName.length <= 1) {
        alert('Please insert a name bigger than 1 letter');
        return false;
    }
    if (description.length <= 150) {
        alert('It is too small to be considered an article.');
        return false;
    }
    return true;
}

/**
 * Function to see if the validations for the edit of an article are correct
 * @param articleTitle - the article's title that will be added
 * @param description - the content of the article
 */
function validateMyEditForm(articleTitle, description) {
    if (articleTitle.length <= 6) {
        alert('Title is too short');
        return false;
    }
    if (description.length <= 150) {
        alert('It is too small to be considered an article.');
        return false;
    }
    return true;
}

/**
 * Function to see if the validations for the creation of an article are correct
 * @param articleTitle - the article's title that will be added
 * @param authorName - the name of the author
 * @param option - the topic of the article
 * @param description - the content of the article
 */
function createArticle(articleTitle, authorName, option, description) {
    var table = document.getElementById('articlesTable');
    var cells = table.getElementsByTagName("td");
    for (var x = 0; x < (table.rows.length - 1); x++) {
        if (cells[x].innerText == articleTitle) {
            alert("That title already exists.")
            return;
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('nameOfArticle=' + articleTitle + '&nameOfAuthor=' + authorName + '&sectionOption=' + option + '&descrip=' + description);
    addToTable(articleTitle);
    reset(document.getElementById("createArticle"));
}

/**
 * Function to view an article
 */
function fetchInfo() {
    var articleTitle = document.getElementById('fetchArticle').value;
    fetch('http://localhost:8081/' + articleTitle)
        .then(result => {
            return result.json();
        })
        .then(data => {
            articleBom(data);
        });
}

/**
 * Function to write the contents of the article stored in the database into the website
 */
function articleBom(data) {
    document.getElementById("addTitle").textContent = "Title: " + data[0].nameOfArticle;
    document.getElementById("addAuthor").textContent = "Author: " + data[0].nameOfAuthor;
    document.getElementById("addOption").textContent = "Theme: " + data[0].sectionOption;
    document.getElementById("descripAdd").textContent = data[0].descrip;
}


/**
 * Function to delete an article from the database
 */
function deleteInfo() {
    var table2 = document.getElementById('LoggedPerm');
    var cells2 = table2.getElementsByTagName("td");
    var articleTitle = document.getElementById('deleteArticle').value;
    fetch('http://localhost:8081/' + articleTitle)
        .then(result => {
            return result.json();
        })
        .then(data => {
            try {
                if (cells2[0].innerText === "all" || data[0].sectionOption === cells2[0].innerText) {
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'json';
                    xhr.open('DELETE', '/' + articleTitle);
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    xhr.send();
                    removeFromTable(articleTitle);
                    document.getElementById("addTitle").textContent = "";
                    document.getElementById("addAuthor").textContent = "";
                    document.getElementById("addOption").textContent = "";
                    document.getElementById("descripAdd").textContent = "";
                } else {
                    alert("Only Admins or Users with the right permission can delete this Article")
                }
            } catch (error) {
                alert("Non-registered user cannot delete anything.")
            }
        });

}

/**
 * Function to remove an article from the table of available articles
 */
function removeFromTable(articleTitle) {
    var table = document.getElementById('articlesTable');
    var cells = table.getElementsByTagName("td");
    for (var x = 0; x < (table.rows.length - 1); x++) {
        if (cells[x].innerText == articleTitle) {
            table.deleteRow((x + 1));
            break;
        }
    }
}

/**
 * Function to view all articles
 */
function fetchAll() {
    fetch('http://localhost:8081/allArticles')
        .then(result => {
            return result.json();
        })
        .then(data => {
            var table = document.getElementById('articlesTable');
            if (table.rows.length == 1) {
                for (var x = 0; x < data.length; x++) {
                    addToTable(data[x].nameOfArticle);
                }
            }
        });
}

/**
 * Function to clear the forms
 */
function reset(object) {
    object.reset();
}

/**
 * Function to alternate from edit to create
 */
function showCreateArticle() {
    document.getElementById("createArticle").style.display = "block";
    document.getElementById("editArticle").style.display = "none";
}

/**
 * Function to alternate from create to edit
 */
function showEditArticle() {
    document.getElementById("createArticle").style.display = "none";
    document.getElementById("editArticle").style.display = "block";
}