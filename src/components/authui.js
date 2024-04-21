
import { Input } from "./ui/input.tsx"
import { Button } from "./ui/button.tsx"
import {Tabs,  TabsContent, TabsList, TabsTrigger} from "./ui/tabs.tsx"
import Nav from "./nav.js"
import { useState } from "react"
import api from '../api.js';

export function Authui() {
const [email , setEmail] = useState("")
const [password, setPassword] = useState("")

function handleSignup(e) {
  e.preventDefault();

  api.post('/signup', { email, password })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function handleLogin(e) {
  e.preventDefault();

  api.post('/login', { email, password })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}



  //console.log(process.env.REACT_APP_SERVER_URL)
  return (
    <div className="flex flex-col gap-y-3 bg-gradient-to-br from-[#1f1f1f] via-[#404040] to-[#000] h-screen">
        <Nav/>
        <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center w-[90vw] h-[457px] bg-white bg-opacity-10 rounded-[32px] shadow shadow-inner border-2 border-white border-opacity-20 backdrop-blur-[143.12px]">
    <div  className="max-w-md mx-auto p-6 text-white">
      <h1 className="text-5xl font-bold mb-6  text-center">Create an account or sign in</h1>
      <Tabs defaultValue="Register" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="Register">Register</TabsTrigger>
    <TabsTrigger value="Log in">Log in</TabsTrigger>
  </TabsList>
  <TabsContent value="Register"><div className="space-y-4">
        <form onSubmit={handleSignup} className="space-y-4 mt-4" >
        <Input placeholder="name@gmail.com" onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="!bg-opacity-90 bg-white border-2 border-[#3b3b3b] text-[#000] placeholder-white placeholder-opacity-50"/>
        <Input placeholder="****" onChange={(e) => setPassword(e.target.value)} type="password" value={password} className="bg-opacity-90 bg-white border-2 border-[#3b3b3b] text-[#000] placeholder-white placeholder-opacity-50"/>
        <Button type="submit" className="w-full py-7 bg-white bg-opacity-15 rounded-md text-white hover:bg-black-800">Register with Email</Button>
        </form>
        
      </div></TabsContent>
  <TabsContent value="Log in"><div className="space-y-4">
        <form onSubmit={handleLogin} className="space-y-4 mt-4" >
        <Input placeholder="name@gmail.com" onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="!bg-opacity-90 bg-white border-2 border-[#3b3b3b] text-[#000] placeholder-white placeholder-opacity-50"/>
        <Input placeholder="****" onChange={(e) => setPassword(e.target.value)} type="password" value={password} className="bg-opacity-90 bg-white border-2 border-[#3b3b3b] text-[#000] placeholder-white placeholder-opacity-50"/>
        <Button type="submit" className="w-full py-7 bg-white bg-opacity-15 rounded-md text-white hover:bg-black-800">Log in with Email</Button>
        </form>
        
      </div></TabsContent>
</Tabs>

      </div>
    </div></div></div>
  )
}

