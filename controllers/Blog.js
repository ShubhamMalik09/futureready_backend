const Blog = require("../models/Blogs");
const User = require("../models/User");

exports.createBlog = async (req,res) =>{
    try{
        // const userId = req.user.id;
        let {title,
            description,
            category,
        } = req.body;

        if(!title || !description || !category ){
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            })
        }

        // const user = await User.findById(userId)
        // if(!user){
        //     return res.status(404).json({
        //         success: false,
        //         message: "User Details Not Found",
        //     })
        // }

        const newBlog = await Blog.create({
            title:title,
            description:description,
            category:category,
        })

        // user.blogs.push(newBlog._id);
        // await user.save();

        res.status(200).json({
            success: true,
            data: newBlog,
            message: "Blog Created Successfully",
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to create blog",
          error: error.message,
        })
      }
}