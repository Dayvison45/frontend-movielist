import Header from './header';
import React,{ useState,useEffect } from 'react';
import axios from 'axios';
export default function Search(){
const [data,setData] = useState([])
const [genre,setGenre] = useState('')
const [selected,setSelected] = useState([false,false])

useEffect(()=>{
const search = localStorage.getItem("search")
if(!search ){axios.get('http://localhost:3000/').then(response=> 
{if(selected[0]){setData(response.data[0].results)}
if(selected[1]){setData(response.data[1].results)}})}
},[selected])

useEffect(()=>{
  if(genre!==""){
  axios.post('http://localhost:3000/search',{genre:genre}).then(response=> 
setData(response.data[0]))
}
},[genre])


useEffect(()=>{
  const word  = localStorage.getItem('search')
  if(word){
    searchData(word)}
  
},[])





async function searchData(x){
await axios.post('http://localhost:3000/search',{data:x}).then(response=>setData(response.data[0]));

}

  
    return(<div className='bg-slate-800 w-screen h-screen overflow-y-scroll flex-col overflow-x-hidden'>
  <Header></Header> 

<div className='w-screen h-1/3 '>
<div className="w-15 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 ">
    <select onChange={(e)=>setGenre(e.target.value)} className="text-center z-10 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " id="cboCidades">
    <option value=''>Genre</option>
    <option value="28">Action</option>
    <option value="12">Adventure</option>
    <option value="16">Animation</option>
    <option value="35">Comedy</option>
    <option value="80">Crime</option>
    <option value="99">Documentary</option>
    <option value="18">Drama</option>
    <option value="10751">Family</option>
    <option value="14">Fantasy</option>
    <option value="36">History</option>
    <option value="27">Horror</option>
    <option value="10402">Music</option>
    <option value="9648">Mystery</option>
    <option value="10749">Romance</option>
    <option value="878">Science Fiction</option>
    <option value="10752">War</option>
    <option value="37">Western</option>
</select>
    </div >
<div className='text-white text-center items-center flex justify-around 2xl:justify-between w-screen p-4 overflow-x-hidden'>
<div className='w-1/3 sm:w-1/4 h-3/5 md:1/4 '>
  filmes
  <img className={selected[0]?"p-2 bg-green-500":""} onClick={()=>setSelected([!selected[0],selected[1]])} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg" alt="" />
  
  </div>

<div className='w-1/3 sm:w-1/4 h-3/5 ' id='card'>Series
  <img className={selected[1]?"p-2 bg-green-500":""} onClick={()=>setSelected([selected[0],!selected[1]])} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg" alt="" />
  
</div></div></div>
   <div>{data.length>0?<div className='md:mt-32 bg-slate-800  lg:mt-48 w-screen 2xl:static h-screen flex flex-col items-center overflow-y-scroll'>
{data.map(e=>
  <div className="flex p-2 mt-8 rounded-md shadow-2xl text-base w-screen sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5  h-1/4 bg-white">
  <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+e.poster_path} alt="" />
<div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{e.original_title}</p>
 <p>{e.overview.substring(0,200)}</p> 
 <div className="w-full flex justify-between"><span>{e.release_date?e.release_date:e.first_air_date}</span> <span>{e.vote_average}</span> <span>{""}</span><img className='h-8 animate-bounce cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="like"  onClick={()=>addList(e.name?e.name:e.title)} /> </div>
 </div>
 </div>)}
</div>:""}
</div>



    </div>)
}