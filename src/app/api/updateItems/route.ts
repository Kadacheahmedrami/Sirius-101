  import { NextRequest ,NextResponse } from 'next/server';
  import {connect} from "../../../db" 
  import User from '../../../modals/user.modal';   // Mongoose User model
  export async function PUT(req: NextRequest) {
      try {
        // Connect to MongoDB
        const body = await req.json();
        await connect();
        const { clerkId, items } = body;


      // Validate input
      if (!clerkId || !items || !Array.isArray(items) || items.length !== 6) {
        return NextResponse.json(
          { message: 'Invalid request. Clerk ID and items array with 6 elements are required.' },
          { status: 400 }
        );
      }
      await connect();


        // Find the user by their clerkId and update the items array
        const updatedUser = await User.findOneAndUpdate(
          { clerkId },
          { $set: { items } }, // Update the items array
          { new: true } // Return the updated user
        );
        if (!updatedUser) {
          return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }



        // Send back the updated user data
        return NextResponse.json({ message: 'Items updated successfully', user: updatedUser });
      } catch (error) {
        console.error('Error updating items:', error);
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });

      }
  
  }
