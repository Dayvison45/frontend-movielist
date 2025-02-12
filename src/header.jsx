import React,{ useState,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from './UserContext';
export default function Header(){
const [visible,setVisible] = useState(false)
const [key,setKey] = useState()
const navigate= useNavigate()
const place = localStorage.getItem('search')
const {errs} = useContext(UserContext)


function ifLogin(){


const user = localStorage.getItem('id')
const token  =localStorage.getItem('token')
console.log(user, token)
if(user && token){
  navigate('/profile')
}else{
  navigate('/login')
}
}


function addSearch(){
localStorage.setItem("search",key)
navigate('/search')
}

  return(<div className="w-screen overflow-hidden ">  <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="w-screen container flex flex-wrap justify-between items-center mx-auto">
     <a href="/movies" className="flex items-center">
        <img src="https://1drv.ms/i/c/ccdb940572a31808/IQRWSxijYOssS7DzjmoqBhYgAcG45LCveoKM7mdoRazJeco?width=1024" className="mr-3 h-6 sm:h-9" alt="Movielist Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MovieList</span>
    </a>
    
{errs.length>0?<div class=" absolute bg-red-100 border border-red-400 text-red-700 px-4 py-3 container rounded mt-24" role="alert">
  <strong class="font-bold">Alerta!</strong>
  <span class="block sm:inline">{errs[0]}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>:""}
   <form onSubmit={()=>addSearch()} className="flex md:w-1/3  w-2/4 ">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input onChange={(e)=>{setKey(e.target.value)}} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={place?place:"search"} required />
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
    </button>
 
</form>
    <button onClick={()=>setVisible(!visible)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-5 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> 
   
    <div className="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button onClick={()=>navigate('/')} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</button>
        </li>
        <li>
          <button onClick={()=>navigate('/movies')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</button>
        </li>
        <li>
          <button onClick={()=>navigate('/series')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Series</button>
        </li>
        <li>
          <button onClick={()=>navigate('/list')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">List</button>
        </li>
        <li>
          <button onClick={()=>ifLogin()}  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><img className="w-10" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /></button>
        </li>
      </ul>
    </div>
  </div>
 
      
  
</nav>
<div className={visible?"visible":"invisible"} ><ul className="z-0 absolute w-2/6 right-0 left-auto  bg-gray-50 rounded-lg border border-gray-100 md:flex-row p-3 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
<li>
          <button onClick={()=>navigate('/')} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</button>
        </li>
        <li>
          <button onClick={()=>navigate('/movies')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Movies</button>
        </li>
        <li>
          <button onClick={()=>navigate('/series')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Series</button>
        </li>
        <li>
          <button onClick={()=>navigate('/list')} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">List</button>
        </li>
        <li>
          <button onClick={()=>ifLogin()}  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><img className="w-10" src="https://cdn-icons-png.flaticon.com/512/149/149071.png"  alt="" /></button>
        </li>
      </ul></div>
</div>)
  
}