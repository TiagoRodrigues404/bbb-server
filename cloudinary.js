const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = async file => {
  const image = await cloudinary.uploader.upload(file, { folder: 'static' }, result => result);
  return image;
};

const destroy = async fileName => {
  await cloudinary.uploader.destroy(fileName, { folder: 'static' }, result => result);
};

module.exports = { upload, destroy };
