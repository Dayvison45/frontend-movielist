import axios from "axios";
import React,{ createContext, useState,useEffect } from "react";
export const UserContext=createContext()


export default function UserContextProvider({children}){
const [errs,setErrs] = useState([])
const [user,SetUser] = useState()

const token = localStorage.getItem("token")
function onLoad(){
    const id = localStorage.getItem("id")
  if(token && id){load()}
    async function load(){axios.post(`https://backend-movielist.onrender.com/log`,{id:id},{headers: {'Authorization': `Basic `+ token}
    }).then(response=>addData(response.data)).catch(err=>console.log(err))
    
  }  
  function addData(x){
   
    localStorage.setItem("token",x.token)
    localStorage.setItem("id",x.newuser._id)
    localStorage.setItem("list",x.newuser.list)
  SetUser(x.newuser)
    localStorage.setItem("login",true)
  }
}
function ifLogin(){
  const user = localStorage.getItem('id')
  const token  =localStorage.getItem('token')
  
  if(user && token){
    return true
  }else{
    return false
  }
  }
  
  useEffect(()=>{
    if(errs.length!==0){
      console.log(errs[0])
      setTimeout(()=>{setErrs([])},3000)
     }

  },[errs])


  function addSearch(){
  localStorage.setItem("search",key)
  navigate('/search')
  }


async function addList(x){
 
  const id = localStorage.getItem("id")
  await axios.post("https://backend-movielist.onrender.com/addlist",{id:id,list:x},{headers: {'Authorization': `Basic `+ token}}).then(response=>console.log(response.data)).catch(err=>console.log(err))
}
    



return(<UserContext.Provider value={{user,SetUser,onLoad,addList,ifLogin,errs,setErrs}}>{children}</UserContext.Provider>)}
