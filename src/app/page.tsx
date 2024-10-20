"use client"
import { useUser } from "@clerk/nextjs";
 import { redirect } from "next/navigation";
//  import { auth } from '@clerk/nextjs/server'

const Welcome = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  console.log("mongodb url ")
  console.log(process.env.NEXT_PUBLIC_MONGODB_URL)

   if(!isSignedIn){
redirect("./sign-up")
 }else{
    redirect("./wlcm")

 }


};

export default Welcome;

