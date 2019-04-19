const express = require("express");
const router = express.Router();
const db = require("../config/connection");
const Gig = require("../models/Gig");

// Get gig list
router.get("/", function(req, res) {
  Gig.findAll()
    .then(function(gigs) {
      console.log(gigs);
      res.render("gigs");
    })
    .catch(function(err) {
      console.log(err);
    });
});

// Add a gig
router.get("/add", function(req, res) {
  const data = {
    title: "Looking for a React Dev",
    technologies: "React, JS, HTML, CSS",
    budget: "$3,000",
    descrption: "React developer looking for sample text lorem ipsem etc",
    contact_email: "user1@gmail.com"
  };
  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(function(gig) {
      res.redirect("/");
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
