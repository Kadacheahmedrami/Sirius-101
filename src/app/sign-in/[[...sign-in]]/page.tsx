import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className=" flex bg-black w-full   items-center justify-center h-screen">
      <SignIn   afterSignOutUrl="/"  />
    </div>
  );
}