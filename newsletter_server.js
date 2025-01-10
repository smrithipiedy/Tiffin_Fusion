import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize Express
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/newsletter')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

app.post('/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
  
      // Email regex pattern to validate the format
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      // Check if email is valid
      if (!emailPattern.test(email)) {
        return res.status(400).send('Invalid email format');
      }
  
      // Check if the email already exists
      const existingSubscriber = await Subscriber.findOne({ email });
      if (existingSubscriber) {
        return res.status(409).send('Email is already subscribed');
      }
  
      // Create a new subscriber
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
  
      res.status(200).send('Subscription successful');
    } catch (error) {
      console.error('Error subscribing:', error);
      res.status(500).send('Error subscribing. Please try again later.');
    }
  });

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
