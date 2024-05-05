const db = require('../database/connection');
const Blog = db.blogs;

function getAllBlogs(request, response) {

   try{

      Blog.findAll()
          .then(data => {
            response.send(data);
          })
          .catch(err => {
            response.status(500).send({
            message:
               err.message || "Some error occurred while retrieving tutorials."
            });
         });
   }
   catch(error){
      return response.status(500).send(error);
   }
};

function getBlogById(request, response) {

   try{
      
      const id = request.params.blogId;

      Blog.findByPk(id)
              .then(data => {
                response.send(data);
               })
              .catch(err => {
                  response.status(500).send({
                  message: 
                     err.message || "Error retrieving Blog with id=" + id
               });
            });
   }
   catch(error){
      return response.status(500).send(error);
   }
};

function createBlog(request, response) {

   try{
      
      if(!request.body.title){
         response.status(400).send({
            message: "Title can't be empty"
         });
         return;
      }
      
      const data = {
         title: request.body.title,
         content: request.body.content
      };

   Blog.create(blog)
      .then(data => {
         response.send(data);
      })
      .catch(err => {
         response.status(500).send({
         message:
            err.message || "Some error occurred while creating the Tutorial."
         });
      });
   }
   catch(error){
      return response.status(500).send(error);
   }
};

function updateBlog(request, response) {

   try{
      
      const id = request.params.blogId;

  Blog.update(request.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "Blog was updated successfully."
        });
      } else {
        response.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      response.status(500).send({
        message: 
            err.message || "Error updating Tutorial with id=" + id
      });
    });
   }
   catch(error){
      return response.status(500).send(error);
   }
};

function deleteBlog(request, response) {

   try{
      const id = request.params.blogId;

  Blog.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        response.send({
          message: "Blog was deleted successfully!"
        });
      } else {
        response.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      response.status(500).send({
        message: 
               err.message || "Could not delete Tutorial with id=" + id
      });
    });
   }
   catch(error){
      return response.status(500).send(error);
   }
};

module.exports = {
   getAllBlogs: getAllBlogs,
   createBlog: createBlog,
   getBlogById: getBlogById,
   updateBlog: updateBlog,
   deleteBlog: deleteBlog
};