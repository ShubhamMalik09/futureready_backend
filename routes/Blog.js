const express = require("express");
const router = express.Router();

const {createBlog, updateBlog, deleteBlog, getAllBlog} = require("../controllers/Blog")

router.post("/create",createBlog);
router.put('/update',updateBlog);
router.delete('/delete',deleteBlog);
router.get('/blogs',getAllBlog)

module.exports = router;