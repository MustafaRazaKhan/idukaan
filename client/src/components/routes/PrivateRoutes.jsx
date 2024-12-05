import { useState, useEffect } from "react";
import { useAuth } from "../../context/Authcontext";
import { Outlet } from "react-router-dom";
import axios from "axios"
import Spinner from "./Spinner";



const PrivateRoutes = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("http://localhost:8080/api/user-auth")
            console.log(res)

            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
           
        }
        if(auth?.token) authCheck()
    }, [auth?.token])
    return (
        <>
            {ok ? <Outlet /> : <Spinner />}
        </>
    )

}

export default PrivateRoutes