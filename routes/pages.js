
const express = require("express");
const path = require("path");

const router = express.Router();

// Home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Networking page
router.get("/networking", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/networking.html"));
});

// Programming page
router.get("/programming", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/programming.html"));
});

// About page
router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
});

// 404 - Page Not Found
router.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "../views/404.html")
    );
});

module.exports = router;
