import Header from './header';
import React,{ useState, useEffect, useContext } from 'react';
import  axios from 'axios'

import genres from './moviesGenres';
import { UserContext } from './UserContext';
import Spinner from './spinner';
export default function Series(){
   const [details,setDetails] = useState([])
   const [data,setData] = useState([]) 
   const {addList,ifLogin} = useContext(UserContext)
   const [oneLine,setOneLine] = useState(0)
   const [twoLine,setTwoLine] = useState(0)
   const [threeLine,setthreeline] = useState(0)
   const [fourLine,setFourline] = useState(0)
   useEffect(() => { run()
   async function run(){
   await axios.get('https://backend-movielist.onrender.com/series').then(response=>setData([response.data[0].results, response.data[1].results,response.data[2].results,response.data[3].results]))}}, []);  
   function genero(x){
      const result = genres.find( e => e.id === x ); 
      return result.name}

      async function addItem(x){

         const loged = await ifLogin()
         loged===true?addList(x):navigate('/login')
         
         }
         function move(x,y){
            let screenwidth = window.screen.width
            if(x==="one"){
            if(y==="right" && oneLine >=3*-screenwidth){setOneLine(oneLine-screenwidth)}else
            if(y==="left" && oneLine+200 <=0){setOneLine(oneLine+screenwidth)}else{return}
            }
            if(x==="two"){
               if(y==="right" && twoLine >=3*-screenwidth){setTwoLine(twoLine-screenwidth)}else
               if(y==="left" && twoLine+200 <=0){setTwoLine(twoLine+screenwidth)}else{return}
            }
            if(x==="three"){
               if(y==="right" && threeLine >=3*-screenwidth){setthreeline(threeLine-screenwidth)}else
               if(y==="left" && threeLine+200 <=0){setthreeline(threeLine+screenwidth)}else{return}
            }
            if(x==="four"){
               if(y==="right" && fourLine >=3*-screenwidth){setFourline(fourLine-screenwidth)}else
               if(y==="left" && fourLine+200 <=0){setFourline(fourLine+screenwidth)}else{return}
            }
         }
         
return(<div className='w-screen overflow-hidden bg-slate-700 text-white' >
   <div className=''>{data.length===0?<Spinner/>:""}</div>
{details[0]?
   <div style={details[0].length<=0?{visibility:'hidden'}:{visibility:'visible'}} onClick={()=>setDetails([])} className='w-screen h-screen flex items-center justify-center bg-slate-700 fixed text-black' >
   <div className="fixed w-full h-1/4 bg-white  flex mt-8 rounded-md shadow-2xl text-base  sm:h-1/3 sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5 ">
   <img className="h-full rounded-md" src={"https://image.tmdb.org/t/p/w500/"+details[0].poster_path} alt="" />
  <div className="justify-around p-8 items-center text-xs sm:text-sm md:text-base lg:text-base xl:text-lg flex flex-col"><p>{details[0].original_title?details[0].original_title:details[0].name}</p>
   <p>{details[0].overview.substring(0,250) + "..."}</p> 
   <div className="w-full flex justify-between"><span>{details[0].release_date?details[0].release_date.substring(0,4):details[0].first_air_date.substring(0,4)}</span> <span>{details[0].vote_average}</span> <span>{genero(details[0].genre_ids[0])}</span><img className='h-8 animate-bounce cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3128/3128313.png" alt="like"  onClick={()=>addItem(details[0])} /> </div>
   </div></div>
   </div>:""}
<Header></Header>
<h1 className=' w-screen text-center '>Series mais populares</h1>
<div className='w-screen flex items-center max-sm:overflow-y-scroll'>
<div className='max-sm:hidden  z-0 h-[5%] w-screen absolute flex justify-between items-center'>
<img onClick={()=>move("one","left")}className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("one","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${oneLine}px`}} className='hover:transition-all flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>
{data.length>1?data[0].map(e=><img  onClick={()=>setDetails([e])} className='hover:bg-blue-500 cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}
</div>
<h1 className='w-screen text-center'>Series de ações</h1>
<div className='w-screen flex items-center max-sm:overflow-y-scroll'>
<div className='max-sm:hidden  z-0 h-[5%] w-screen absolute flex justify-between items-center'>
<img onClick={()=>move("two","left")}className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("two","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${twoLine}px`}} className='hover:transition-all flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>
{data.length>1?data[1].map(e=><img  onClick={()=>setDetails([e])} className='hover:bg-blue-500 cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}
</div>

<h1 className='w-screen text-center'>Series de aventuras</h1>
<div className='w-screen flex items-center max-sm:overflow-y-scroll'>
<div className='max-sm:hidden  z-0 h-[5%] w-screen absolute flex justify-between items-center'>
<img onClick={()=>move("three","left")}className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("three","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${threeLine}px`}} className='hover:transition-all flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>
{data.length>1?data[2].map(e=><img  onClick={()=>setDetails([e])} className='hover:bg-blue-500 cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}
</div>
<h1 className='w-screen text-center'>Series de animações</h1>
<div className='w-screen flex items-center max-sm:overflow-y-scroll'>
<div className='max-sm:hidden  z-0 h-[5%] w-screen absolute flex justify-between items-center'>
<img onClick={()=>move("four","left")}className='xl:w-14 xl:h-14 sm:w-8 sm:h-8 rotate-180' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
<img onClick={()=>move("four","right")} className='xl:w-14 xl:h-14  w-14 h-14 sm:w-8 sm:h-8' src="https://cdn-icons-png.flaticon.com/512/6775/6775949.png" alt="" />
</div>
<div   style={{"margin-left":`${fourLine}px`}} className='hover:transition-all flex scroll overflow-x-hidden max-[640px]:overflow-x-scroll'>

</div>
{data.length>1?data[3].map(e=><img  onClick={()=>setDetails([e])} className='hover:bg-blue-500 cursor-pointer p-4 w-1/4 shadow-2xl  scrollbar-hide' src={"https://image.tmdb.org/t/p/original/"+e.poster_path} alt="" />):''}
</div>

</div>)

}