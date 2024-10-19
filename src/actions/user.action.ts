"use server";
import User from "../modals/user.modal";
import { connect } from "../db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUsernotsaved = await User.create(user);
    const newUser = newUsernotsaved.save()
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}