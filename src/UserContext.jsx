import axios from "axios";
import { createContext, useState } from "react";
export const UserContext=createContext()


export default function UserContextProvider({children}){

const [user,SetUser] = useState()

const token = localStorage.getItem("token")
function onLoad(){
    const id = localStorage.getItem("id")
  if(token && id){load()}
    async function load(){axios.post(`http://localhost:3000/log`,{id:id},{headers: {'Authorization': `Basic `+ token}
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



async function addList(x){
  const id = localStorage.getItem("id")
  await axios.post("http://localhost:3000/addlist",{id:id,list:x},{headers: {'Authorization': `Basic `+ token}}).then(response=>console.log(response.data)).catch(err=>console.log(err))
}
    



return(<UserContext.Provider value={{user,SetUser,onLoad,addList}}>{children}</UserContext.Provider>)}
