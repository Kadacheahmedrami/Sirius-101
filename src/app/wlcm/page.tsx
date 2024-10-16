"use client"
import { useUser } from "@clerk/nextjs";
import React from "react";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { redirect } from "next/navigation";

const Welcome = () => {
  const { isLoaded, isSignedIn, user } = useUser();
console.log(user)

  console.log(isSignedIn)
   if(!isSignedIn){
redirect("./sign-in")
 }

  return (
    <>
    <NavBar/>
   
    {"hola " + user.fullName}
          <div className="grid-container">
            <div className="grid-item item1"></div>
            <div className="grid-item item2"></div>
            <div className="grid-item item3"></div>
            <div className="grid-item item4"></div>
            <div className="grid-item item5">
              <div className="thick">Why join us</div>
            </div>
            <div className="grid-item item6"></div>
            <div className="grid-item details">  </div>
              <div className="grid-item item7"></div>
              <div className="grid-item item8"></div>
              <div className="grid-item item9"></div>
          
          </div>
          <Footer/>
          </>
  );
};

export default Welcome;

