
import { Input } from "./ui/input.tsx"
import { Button } from "./ui/button.tsx"

export function Authui() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create an account or sign in</h1>
      <div className="space-y-4">
        <Input placeholder="name@gmail.com" />
        <Button className="w-full py-7">Continue with Email</Button>
        <div className="flex items-center justify-between">
          <hr className="w-full" />
          <p className="px-3 text-sm">or</p>
          <hr className="w-full" />
        </div>
        <Button className="w-full py-7  border">
          <ChromeIcon className=" mr-2" />
          Continue with Google{"\n          "}
        </Button>
      </div>
    </div>
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
