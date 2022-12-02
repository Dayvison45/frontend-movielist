import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

export default function Reflesh(){
    const navigate = useNavigate()
    
useEffect(()=>{
    navigate('/list')
},[])

    return(<>
    ola
    </>)
}