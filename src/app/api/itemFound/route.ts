import { NextRequest ,NextResponse } from 'next/server';
import {connect} from "../../../db" 
import User from '../../../modals/user.modal';   // Mongoose User model
export async function POST(req: NextRequest) {
    try {
      // Connect to MongoDB
      const body = await req.json();
      await connect();
      const { foundImage ,clerkId} = body;


    // Validate input
    if (!foundImage || !clerkId ) {
      return NextResponse.json(
        { message: 'Invalid request. Clerk ID and image String are required.' },
        { status: 400 }
      );
    }
    await connect();


      // Find the user by their clerkId and update the items array
      const updatedUser = await User.findOneAndUpdate(
        { clerkId },
        { $set: { foundImage } }, // Update the items array
        { new: true } // Return the updated user
      );
      if (!updatedUser) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }



      // Send back the updated user data
      return NextResponse.json({ message: 'Image upLoaded successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating items:', error);
      return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });

    }

}
    