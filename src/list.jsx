import Header from "./header";

import React,{ useContext,useEffect,UserContext, useState } from 'react';
import axios  from 'axios';
import movies from './data';
import genres from './moviesGenres';



export default function List(){ 

  function genero(x){
    const result = genres.find( e => e.id === x );
   
    return result.name}
const [list,setList]= useState([])
useEffect(()=>{
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  if(token && id){load()}
    async function load(){axios.post(`http://localhost:3000/list`,{id:id},{headers: {'Authorization': `Basic `+ token}
    }).then(response=>setList(response.data)).catch(err=>console.log(err))}
},[])

    return(<div> 

   <Header ></Header> 


{list.length>0?<div className=" w-screen h-screen flex flex-col items-center overflow-scroll">{list.map(e=>
 <div className="flex p-2 mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
  <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+e.poster_path} alt="" />
<div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{e.original_title}</p>
 <p>{e.overview.substring(0,200)+'...'}</p> 
 <div className="w-full flex justify-between"><span>{e.release_date?e.release_date:e.first_air_date}</span> <span>{e.vote_average}</span> <span>{""}</span><img className='h-8 animate-bounce cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="like"  onClick={()=>addList(e.name?e.name:e.title)} /> </div>
 </div>
 </div>)}</div>:"vazio"}



      </div>)}