import { useState } from "react"
import axios from "axios"
export default function Subscribe(){
  const [name,Setname] = useState("")
const [pass,Setpass] = useState("")
function sendData(e){
  e.preventDefault()
axios.post('http://localhost:3000/subscribe',{name:name,password:pass}).then(response=>console.log(response.data)).catch(err=>console.log(err))
}
    return(<>
    
    <div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
  <div class="content text-3xl text-center md:text-left">
    <h1 class="text-5xl text-blue-500 font-bold">Facebook</h1>
    <p>Connect with friends and the world around you on Facebook.</p>
  </div>
  <div class="container mx-auto flex flex-col items-center">
    <form onSubmit={(e)=>sendData(e)} class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
    <input required type="text" value={name} onChange={(e)=>Setname(e.target.value)} placeholder="Email or Phone Number" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
        <input required type="text" value={pass} onChange={(e)=>Setpass(e.target.value)} placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
        <input type='submit' class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg" value='login'/>
      <hr />
      <button class="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
    </form>
    <p class="text-center text-sm my-4">
      <span class="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
    </p>
  </div>
</div>
    </>)
}