

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors'); // Import the cors middleware
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/imageDB', { useNewUrlParser: true, useUnifiedTopology: true });
const imageSchema = new mongoose.Schema({
  batch: String,
  date: String,
  filename: String,
});

const Image = mongoose.model('Image', imageSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    const { batch, date } = req.body;
    const filename = `${batch}_${date}_${timestamp}${ext}`;
    cb(null, filename);

    // Save image information to the database using async/await
    const saveImage = async () => {
      const image = new Image({
        batch: batch,
        date: date,
        filename: filename,
        
      });

      try {
        await image.save();
      } catch (error) {
        console.error('Error saving image to database:', error);
      }
    };

    saveImage();
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static('uploads'));

// GET request to fetch an image by batch, date, and filename
app.get('/image/:batch/:date/:filename', (req, res) => {
  const { batch, date, filename } = req.params;
  res.sendFile(path.join(__dirname, 'uploads', `${batch}_${date}_${filename}`));
});

// GET request to fetch images by batch and date
app.get('/images/:batch/:date', async (req, res) => {
  const { batch, date } = req.params;
  try {
    const images = await Image.find({ batch: batch, date: date });
    res.json({ success: true, images });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching images', error: error.message });
  }
});

// POST request to upload an image with batch and date information
app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    const { batch, date } = req.body;
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ success: true, imageUrl, batch, date });
  } else {
    res.status(400).json({ success: false, message: 'No file uploaded' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
