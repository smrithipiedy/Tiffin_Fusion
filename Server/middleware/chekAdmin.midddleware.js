import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const checkAdmin = async (req, res, next) => {
  try {
    // Extract token from headers
    const {email, password} = req.body 



    // Fetch user details from DB
    const user = await User.findOne({email:email});

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Check if user is admin
    if (!user.isAdmin) {
      return res.status(403).send({ message: 'Access denied, admin privileges required' });
    }

    // Proceed to next middleware or route handler
    next();
  } catch (error) {
    console.error('Admin check failed:', error);
    res.status(500).send({ message: 'Server error' });
  }
};
