import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center bg-black w-full justify-center h-screen  '><SignUp afterSignOutUrl="/" /></div>
  )
}