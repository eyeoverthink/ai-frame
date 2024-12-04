const express = require('express');
const router = express.Router();

// Controller functions
const { uploadVideo } = require('../controllers/videoController');

// Route for uploading videos
router.post('/upload', uploadVideo);

module.exports = router;
