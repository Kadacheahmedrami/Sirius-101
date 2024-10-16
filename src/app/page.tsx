"use client"
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Welcome = () => {
  const { isLoaded, isSignedIn, user } = useUser();
console.log(user)

  console.log(isSignedIn)
   if(!isSignedIn){
redirect("./sign-up")
 }else{
    redirect("./wlcm")

 }


};

export default Welcome;

