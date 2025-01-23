const express = require("express");
const router = express.Router();

const {createBlog} = require("../controllers/Blog")

router.post("/create",createBlog);

module.exports = router;