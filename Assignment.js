const express = require('express');
const multer = require('multer');

const app = express();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // destination for the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // specify the name of the uploaded file
  }
})

const upload = multer({ storage: storage })

// handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // log the uploaded file object to the console
  res.status(200).send('File uploaded successfully!'); // send response to client
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
