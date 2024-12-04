// Controller for handling video uploads
const cloudinary = require('../config/cloudinaryConfig');

exports.uploadVideo = (req, res) => {
  // Logic for handling video uploads
  const file = req.files.video;
  cloudinary.uploader.upload(file.tempFilePath, { resource_type: "video" }, (error, result) => {
    if (error) {
      return res.status(500).send('Cloudinary upload error');
    }
    res.send({ message: 'Video uploaded successfully', url: result.url });
  });
};
