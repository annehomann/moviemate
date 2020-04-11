const express = require('express');
const router = express.Router();
const { Favourite } = require("../models/Favourite");
const { auth } = require("../middleware/auth");

// Routes for favourited movies per user

router.post("/favouriteNumber", (req, res) => {
    Favourite.find({ "movieId": req.body.movieId })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            res.status(200).json({ success: true, subscribeNumber: subscribe.length })
        })
});

router.post("/favourited", (req, res) => {
    Favourite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (subscribe.length !== 0) {
                result = true
            }
            res.status(200).json({ success: true, subcribed: result })
        })
});

// Add movie to favourites list
router.post("/addToFavourite", (req, res) => {
    console.log(req.body)
    const favourite = new Favourite(req.body);

    favourite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
});

// Remove movie from favourites list
router.post("/removeFromFavourite", (req, res) => {
    Favourite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc })
        })
});

// Fetch the correct favourited movies for the logged in user
router.post("/getFavouredMovie", (req, res) => {

    //Need to find all of the Users that I am subscribing to From Subscriber Collection 
    Favourite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favourites) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favourites })
        })
});



module.exports = router;
