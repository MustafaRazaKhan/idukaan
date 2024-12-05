import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate} from "react-router-dom"
import axios from "axios"


const Forgotpassword = () => {

    const navigate = useNavigate()
    
    
    const [registerData, setRegisterData] = useState({
        email: "", newPassword: "",question:"" });
    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/forgot-password", registerData)
            if (res.data.sucess) {
                toast.success(res.data.message)
                
             
            
                navigate(  "/login")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)

            toast.error(res.data.message)
        }
    }
    return (
        <div>
            {/* <Layout> */}
            <div className="register">
                <h1>Reset password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" name='email' value={registerData.email} onChange={(e) => handleChange(e)} placeholder='Enter Your email' />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name='question' value={registerData.question} onChange={(e) => handleChange(e)} placeholder='Enter Your Question' />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name='newPassword' value={registerData.newPassword} onChange={(e) => handleChange(e)} placeholder='Enter Your New Password' />
                    </div>
                 
                    <div className="mb-3">
                    <button type="submit" className="btn btn-warning" >RESET</button>
                    </div>
                  
             
                </form>

            </div>

            {/* </Layout> */}

        </div>
    )
}

export default Forgotpassword