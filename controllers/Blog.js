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

exports.updateBlog = async (req,res) =>{
    try{
        // const userId = req.user.id;
        let {
            id,
            title,
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
        const updatedBlog = await Blog.findByIdAndUpdate(id,{
            title:title,
            description:description,
            category:category,
        },{new:true})

        if(!updatedBlog){
            res.status(400).json({
                success: false,
                message: "Blog not found",
            })
        }

        // user.blogs.push(newBlog._id);
        // await user.save();

        res.status(200).json({
            success: true,
            data: updatedBlog,
            message: "Blog Updated Successfully",
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to update blog",
          error: error.message,
        })
      }
}

exports.deleteBlog = async (req,res) =>{
    try{
        // const userId = req.user.id;
        let { id} = req.body;

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if(!deletedBlog){
            res.status(400).json({
                success: false,
                message: "Blog not found",
            })
        }

        res.status(200).json({
            success: true,
            data: deletedBlog,
            message: "Blog deleted Successfully",
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to delete blog",
          error: error.message,
        })
    }
}

exports.getAllBlog = async(req,res)=>{
    try{
        const blogs = await Blog.find();

        res.status(200).json({
            success: true,
            data: blogs,
            message: "All Blogs get Successfully",
        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          message: "Failed to get all blogs",
          error: error.message,
        })
    }
}