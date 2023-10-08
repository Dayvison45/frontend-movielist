
import Header from './header';
import React,{ useState, useEffect, useContext } from 'react';
import  axios from 'axios'
import genres from './moviesGenres';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import Spinner from './spinner';

export default function Home(){
const [details,setDetails] = useState([])
const [data,setData] = useState([]) 
const {addList,ifLogin,setErrs} = useContext(UserContext)
const navigate = useNavigate()
const [oneLine,setOneLine] = useState(0)
const [twoLine,setTwoLine] = useState(0)
const [threeLine,setthreeline] = useState(0)
useEffect(() => { run()
async function run(){
   
await axios.get('https://movies-0533.onrender.com/').then(response=>setData([response.data[0].results, response.data[1].results,response.data[2].results]))}}, []);




async function addItem(x){

const loged = await ifLogin()
loged===true?addList(x):navigate('/login')

}

function move(x,y){
   console.log(x,y)
   let screenwidth = window.screen.width
   if(x==="one"){
   if(y==="right" && oneLine+200 <=3*screenwidth){setOneLine(oneLine-screenwidth)}else{return}
   if(y==="left" && oneLine-200 >=0){setOneLine(oneLine+screenwidth)}else{return}
   }
   if(x==="two"){

   }
   if(x==="three"){

   }


}

function genero(x){
   const result = genres.find( e => e.id === x );
  
   return result.name}

function roll(){
   setOne(one-400)
}

return(<div className=' w-screen h-screen overflow-x-hidden bg-slate-700 fixed'>
<div className=''>{data.length===0?<Spinner/>:""}</div>


{details[0]?
   <div style={details[0].length<=0?{visibility:'hidden'}:{visibility:'visible'}} onClick={()=>setDetails([])} className='w-screen h-screen flex items-center justify-center bg-slate-700 fixed' >
   <div className="text-black fixed w-full h-1/4 bg-white  flex mt-8 rounded-md shadow-2xl text-base  sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5 ">
   <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+details[0].poster_path} alt="" />
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{details[0].original_title}</p>
   <p>{details[0].overview.substring(0,250) + "..."}</p> 
   <div className="w-full flex justify-between"><span>{details[0].release_date?details[0].release_date.substring(0,4):details[0].first_air_date.substring(0,4)}</span> <span>{details[0].vote_average}</span> <span>{genero(details[0].genre_ids[0])}</span><img className='h-8 animate-bounce cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="like"  onClick={()=>addItem(details[0])} /> </div>
   </div></div>
   </div>:""}
<Header></Header>


<div className='w-screen flex '>
<div className='flex xl:h-[60%] h-1/3  w-screen items-center absolute justify-between pr-5'>
<img onClick={()=>move("one","left")}className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("one","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${oneLine}px`}} className='w-1/6  flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>

   
{data.length>1?data[0].map(e=><img  onClick={()=>setDetails([e])} className='cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}</div>
<div className='w-screen flex '>
<div className='flex xl:h-[60%] h-1/3  w-screen items-center absolute justify-between pr-5'>
<img onClick={()=>move("two","left")} className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("two","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${twoLine}px`}} className='w-1/6  flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>

   
   {data.length>1?data[1].map(e=><img onClick={()=>setDetails([e])} className='cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):""}</div>
   <div className='w-screen flex '>
<div className='flex xl:h-[60%] h-1/3  w-screen items-center absolute justify-between pr-5'>
<img onClick={()=>move("three","left")} className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("three","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${threeLine}px`}} className='w-1/6  flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>

   
   {data.length>1?data[2].map(e=><img onClick={()=>setDetails([e])} className='cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):""}</div>


</div>)

}