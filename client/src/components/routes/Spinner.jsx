import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinner = ({path='login'}) => {
    const[count,setCount]=useState(2)
   const navigate= useNavigate();
   const location= useLocation();
//    console.log(location.pathname)
   useEffect(()=>{
    const interval = setInterval(()=>{setCount((prevalue)=> prevalue= prevalue-1 )
        },1000)
        count ===0&&navigate(`/${path}`,{
          state:location.pathname
        } )

    
    return ()=>clearInterval(interval)

   },[count,navigate,location,path])
 
  return (
    <div>

<div style={{height:"100vh", display:"flex",
alignItems:"center",
justifyContent:"center"
}}>
<div className="d-flex justify-content-center">
    <span>redirect to login in{count}</span>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
</div>


        
    </div>
  )
}

export default Spinner