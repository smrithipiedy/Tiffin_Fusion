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
  const email = req.body.email;

  // Log the incoming email to ensure it's received properly
  console.log('Received email:', email);

  if (!email) {
    console.log('No email provided');
    return res.status(400).send('Email is required');
  }

  try {
    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email: email });
    if (existingSubscriber) {
      console.log('Email already subscribed:', email);
      return res.status(400).send('This email is already subscribed');
    }

    // Save the new subscriber
    const newSubscriber = new Subscriber({ email: email });
    await newSubscriber.save();

    console.log('Email successfully subscribed:', email);
    res.status(200).send('Thank you for subscribing!');

  } catch (err) {
    // Handle unexpected errors
    console.error('Error during subscription process:', err);
    res.status(500).send('Error subscribing. Try again later.');
  }
});

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
