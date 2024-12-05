import React, { useEffect, useState } from 'react'
import Usermenu from '../../components/usermenu/Usermenu'
import { useAuth } from '../../context/Authcontext'
import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Profile = () => {

  const [auth,setAuth] = useAuth()
  const [registerData,setRegisterData] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    address:"",
    question:""
});
const handleChange= (e)=>{
    setRegisterData({
        ...registerData,
    [e.target.name]:e.target.value
    })

}
const  handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(registerData)
    try {
        const res =await axios.post("http://localhost:8080/api/register",registerData)
        if(res.data.sucess){
            toast.success(res.data.message)
            // setRegisterData("")
            navigate("/login")
        }
        else{
            toast.error(res.data.message)
        }
    } catch (error) {
        console.log(error)

          toast.error(res.data.message)
    }    }
    useEffect(()=>{
      const{ name, email,phone, address }= auth?.user
      setRegisterData({
        name,email,phone,address
      })
      
      
        },[auth?.user])

  return (
    <div>

        <div className="container-fluid">
            <div className="row p-5">
                <div className="col-md-3">
                    <Usermenu/>
                </div>
                <div className="col-md-9">
                <div className="register">
                    <h1>Register for a new account</h1>
                    <form  onSubmit={handleSubmit}>
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name='name' value={registerData.name}  onChange={(e)=>handleChange(e)}  placeholder='Enter Your Name' />
                          
                        </div>
                        <div className="mb-3">
                           
                            <input type="email" className="form-control" name='email' value={registerData.email} onChange={(e)=>handleChange(e)} placeholder='Enter Your email'  disabled/>
                          
                        </div>
                        <div className="mb-3">
                           
                           <input type="text" className="form-control" name='phone' value={registerData.phone}  onChange={(e)=>handleChange(e)}  placeholder='Enter Your phone' />
                         
                       </div>
                       <div className="mb-3">
                           
                           <input type="password" className="form-control" name='password' value={registerData.password}  onChange={(e)=>handleChange(e)}   placeholder='Enter Your Password' />
                         
                       </div>
                       <div className="mb-3">
                           
                           <input type="text" className="form-control" name='address' value={registerData.address}  onChange={(e)=>handleChange(e)}   placeholder='Enter Your Address' />
                         
                       </div>
                     
                    
                      
                       
                        <button type="submit" className="btn btn-danger" >Update Profile</button>
                    </form>

                </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile