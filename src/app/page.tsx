"use client"
import { useUser } from "@clerk/nextjs";
 import { redirect } from "next/navigation";
//  import { auth } from '@clerk/nextjs/server'

const Welcome = () => {
  const { isLoaded, isSignedIn, user } = useUser();

//    if(!isSignedIn){
// redirect("./sign-up")
//  }else{
    redirect("./wlcm")

 }


// };

export default Welcome;

