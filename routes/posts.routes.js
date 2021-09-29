const Router = require('express');
const postController = require('../controller/post.controller');
const router = new Router();


router.post('/posts', postController.createPost);
router.get('/posts', postController.getPostsByUser);


module.exports = router;