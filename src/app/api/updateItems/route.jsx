// pages/api/updateItems.js
import { connect } from '../../../db'; // MongoDB connection
import User from '../../../modals/user.modal';   // Mongoose User model


export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      // Connect to MongoDB
      await connect();
      const { clerkId, items } = req.body;

      if (!clerkId || !items || !Array.isArray(items) || items.length !== 6) {
        return res.status(400).json({ message: 'Invalid request. Clerk ID and items array with 6 elements are required.' });
      }

      // Find the user by their clerkId and update the items array
      const updatedUser = await User.findOneAndUpdate(
        { clerkId },
        { $set: { items } }, // Update the items array
        { new: true } // Return the updated user
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Send back the updated user data
      return res.status(200).json({ message: 'Items updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating items:', error);
      return res.status(500).json({ message: 'Server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
