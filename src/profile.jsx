 import { useNavigate } from 'react-router-dom';
 import Header from './header';
 export default function Profile(){
const navigate = useNavigate()
function goOut(){
   localStorage.clear()
 navigate('/login')
}

    return(<div className='bg-slate-700 h-screen w-screen overflow-hidden'>
    <Header></Header>

<div className='w-screen h-screen flex items-center justify-center'>
<input className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' type="button" onClick={()=>goOut()} value="logout" />
</div>
    </div>)
 }