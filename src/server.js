const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const uri = "mongodb+srv://cshekharazad245:Azad2508@cluster0.ygljqv9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose schema and model (replace 'YourModel' and 'yourSchema' with your actual model and schema)
const yourSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: Number,
  dob: Number,
  street: String,
  city: String,
  state: String,
  postalcode: Number,
  country:String
  // Add other fields as needed
});

const YourModel = mongoose.model('YourModel', yourSchema);

app.use(bodyParser.json());

// Handle POST request to submit form data
app.post('/Onito-form', async (req, res) => {
  try {
    // Create a new document using the mongoose model
    const newEntry = new YourModel(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
