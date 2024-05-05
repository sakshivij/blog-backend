const express = require('express')
const Router = express.Router;
const controller = require('../controllers/blog.controller');
const blogRouter = Router();

/** GET Methods */
    /**
     * @openapi
     * '/api/blogs':
     *  get:
     *     tags:
     *     - Blog Controller
     *     summary: Get blogs
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
blogRouter.route('/').get(controller.getAllBlogs);

/** GET Methods */
    /**
     * @openapi
     * '/api/blogs/{blogId}':
     *  get:
     *     tags:
     *     - Blog Controller
     *     summary: Get blog by Id
     *     parameters:
     *      - name: blogId
     *        in: path
     *        description: The unique Id of the blog
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */

blogRouter.route('/:blogId').get(controller.getBlogById);

/** POST Methods */
    /**
     * @openapi
     * '/api/blogs':
     *  post:
     *     tags:
     *     - Blog Controller
     *     summary: Create a blog
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - content
     *              - title
     *            properties:
     *              title:
     *                type: string
     *              content:
     *                type: string
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
blogRouter.route('/').post(controller.createBlog);

/** PUT Methods */
    /**
     * @openapi
     * '/api/blogs':
     *  put:
     *     tags:
     *     - Blog Controller
     *     summary: Modify a blog
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - blogId
     *            properties:
     *              blogId:
     *                type: string
     *                default: ''
     *              title:
     *                type: string
     *                default: ''
     *              content:
     *                type: string
     *                default: ''
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */

blogRouter.route('/').put(controller.updateBlog);

/** DELETE Methods */
    /**
     * @openapi
     * '/api/blogs/{blogId}':
     *  delete:
     *     tags:
     *     - Blog Controller
     *     summary: Delete blog by Id
     *     parameters:
     *      - name: blogId
     *        in: path
     *        description: The unique Id of the blog
     *        required: true
     *     responses:
     *      200:
     *        description: Removed
     *      400:
     *        description: Bad request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
blogRouter.route('/:blogId').delete(controller.deleteBlog);


module.exports = blogRouter;

