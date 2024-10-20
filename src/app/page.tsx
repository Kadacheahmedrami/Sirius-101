"use client"
import { useUser } from "@clerk/nextjs";
 import { redirect } from "next/navigation";
//  import { auth } from '@clerk/nextjs/server'

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

// const Welcome = () => {
//   // const { isLoaded, isSignedIn, user } = useUser();
//   const { userId }: { userId: string | null } = auth()

//    if(!userId){
// redirect("./sign-up")
//  }else{
//     redirect("./wlcm")

//  }


// };

// export default Welcome;