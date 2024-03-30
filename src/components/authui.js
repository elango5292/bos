
import { Input } from "./ui/input.tsx"
import { Button } from "./ui/button.tsx"
import Nav from "./nav.js"

export function Authui() {
  return (
    <div className="flex flex-col gap-y-3 bg-[#9B9B9A] h-screen">
        <Nav/>
        <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center w-[90vw] h-[457px] bg-white bg-opacity-10 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-20 backdrop-blur-[143.12px]">
    <div  className="max-w-md mx-auto p-6 text-white">
      <h1 className="text-5xl font-bold mb-6  text-center">Create an account or sign in</h1>
      <div className="space-y-4">
        <Input placeholder="name@gmail.com" className="bg-opacity-20 placeholder-white placeholder-opacity-50"/>
        <Button className="w-full py-7 bg-white bg-opacity-15 rounded-md text-white">Continue with Email</Button>
        <div className="flex items-center justify-between  text-white">
          <hr className="w-full" />
          <p className="px-3 text-sm">or</p>
          <hr className="w-full" />
        </div>
        <Button className="w-full py-7  border">
          <ChromeIcon className=" mr-2" />
          Continue with Google{"\n          "}
        </Button>
        <div></div>
      </div></div>
    </div></div></div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


// style={{width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.10)', boxShadow: '0px 17.52544403076172px 21.90680694580078px rgba(0, 0, 0, 0.05)', borderRadius: 32, border: '3px rgba(255, 255, 255, 0.15) solid', backdropFilter: 'blur(143.12px)'}}