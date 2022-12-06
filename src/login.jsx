import Header from "./header";
import { useState,useEffect,useContext } from "react"
import { UserContext } from "./UserContext"
import {useNavigate} from 'react-router-dom'
import axios from "axios"
export default function Login(){

  const [name,Setname] = useState("")
  const [pass,Setpass] = useState("")
  const {SetUser,onLoad,setErrs} = useContext(UserContext)
  const navegate = useNavigate()
  


  useEffect( ()=>{

run()
async function run(){
  await onLoad()
let login = localStorage.getItem("login")
  login ==="true"?navegate('/'):""
}

  
  },[])


    function addData(x){
      localStorage.setItem("token",x.token)
      localStorage.setItem("id",x.newuser._id)
      localStorage.setItem("like",x.newuser.list)
      
    SetUser(x.newuser)
    navegate('/')
    }
    function sendData(e){
      e.preventDefault()
    axios.post('https://movies-0533.onrender.com/login',{name:name,password:pass}).then(response=>addData(response.data)).catch(err=>setErrs(['Nome ou senha invalidos']))
    
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
      <input type='submit' class="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg" value='login'/>

      <hr />
      <button onClick={()=>navegate('/subscribe')} className="w-full bg-green-400 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
    </form>
      </div>
</div>
    </>)
}