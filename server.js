"use strict";
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("./models/MongoStuff.js");

//Obtains the schema for articles
const articleSchema = require("./models/articleSchema.js");
//Obtains the schema for registered users
const logSchema = require("./models/userSchema.js");

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view-engine', 'ejs')
app.use(express.static('public'))

//Model for the articles
const articlePost = mongoose.model('ArticlePost', articleSchema);
//Model for the registrations
const logPost = mongoose.model('logPost', logSchema);


// Simple route to get the index file where everything will be ran
app.get('/', (req, res) => {
    res.render('index.ejs')
});

//gets all registrations
app.get('/allReg', async (req, res) => {
    const logs = await logPost.find();
    res.json(logs);
})

//gets all articles
app.get('/allArticles', async (req, res) => {
    const posts = await articlePost.find();
    res.json(posts);
})


//Posts Articles
app.post('/', (req, res) => {
    try {
        var itemArt = {
            nameOfArticle: req.body.nameOfArticle,
            nameOfAuthor: req.body.nameOfAuthor,
            sectionOption: req.body.sectionOption,
            descrip: req.body.descrip,
        };

        var dataArt = new articlePost(itemArt);

        dataArt.save((error) => {
            if (error) {
                res.json({ message: err });
            } else {
                console.log('Sucessfully saved');
            }
        });
    } catch (error) {
        alert(error);
    }
});

//Get specific Article
app.get('/:nameOfArticle', async (req, res) => {
    try {
        const post = await articlePost.find({ nameOfArticle: req.params.nameOfArticle });
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});

//Deletes a specific Article
app.delete('/:nameOfArticle', async (req, res) => {
    try {
        const removedArticle = await articlePost.deleteOne({ nameOfArticle: req.params.nameOfArticle });
        res.json(removedArticle);
    } catch (error) {
        res.json({ message: error });
    }
});

//Updates a specific Article
app.put('/:nameOfArticle', async (req, res) => {
    try {
        const updatedArticle = await articlePost.updateOne({ nameOfArticle: req.body.nameOfArticle }, { sectionOption: req.body.sectionOption, descrip: req.body.descrip });
        res.json(updatedArticle);
    } catch (error) {
        res.json({ message: error });
    }
});

//Creates a user
app.post('/res', (req, res) => {
    try {
        var itemArt = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            permissions: "none",
        };
        var dataArt = new logPost(itemArt);
        dataArt.save((error) => {
            if (error) {
                res.json({ message: error });
            } else {
                console.log('Sucessfully saved');
            }
        });
    } catch (err) {
        console.log('Values not allowed' + err.stack);
    }

});

//Fetches a user
app.get('/log/:username', async (req, res) => {
    try {
        const post = await logPost.find({ username: req.params.username });
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
});

//Adds Permissions to a User
app.put('/grant/:username', async (req, res) => {
    try {
        const updatedPost = await logPost.updateOne({ username: req.body.username }, { permissions: req.body.permissions });
        res.json(updatedPost);
    } catch (error) {
        res.json({ message: error });
    }
});


app.listen(process.env.PORT || 8081)
