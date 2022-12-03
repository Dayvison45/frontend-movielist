import React,{ useState,useContext } from "react"
import axios from "axios"
import { UserContext } from "./UserContext"
import Header from "./header"
import { useNavigate } from 'react-router-dom';
export default function Subscribe(){
  const [name,Setname] = useState("")
const [pass,Setpass] = useState("")
const {setErrs} = useContext(UserContext)
const navigate = useNavigate(0)

function sendData(e){
  e.preventDefault()
axios.post('https://movie-list-dayvison.herokuapp.com/subscribe',{name:name,password:pass}).then(response=>console.log(response.data)).catch(err=>setErrs(["Nome já existente, tente outro"]))
}
    return(<>
    
    <Header></Header>
    <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
  <div className="content text-3xl text-center md:text-left">

  </div>
  <div className="container mx-auto flex flex-col items-center">
    <form onSubmit={(e)=>sendData(e)} className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
    <input required type="text" value={name} onChange={(e)=>Setname(e.target.value)} placeholder="Email or Phone Number" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
        <input required type="password" value={pass} onChange={(e)=>Setpass(e.target.value)} placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <input type='submit' class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg" value='Subscribe'/>

      <hr />
      <button onClick={()=>navigate('/login')} className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Have an Account?</button>
    </form>
    </div>
</div>
    </>)
}