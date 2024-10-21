import localFont from "next/font/local";
import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, UserProfile } from '@clerk/nextjs'
import Loader from "../components/Loader"
import NavBar from "../components/NavBar"
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "siruis-game",
  description: "IOT",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className=" ">
      <NavBar/>
      <ClerkLoading className=" ">
          <div className="flex h-screen items-center justify-center  ">
          <Loader/>
          </div>
        </ClerkLoading> 
        <ClerkLoaded >
 
       </ClerkLoaded>
  
    {children}
      
      </body>
    </html>
  </ClerkProvider>
  );
}
