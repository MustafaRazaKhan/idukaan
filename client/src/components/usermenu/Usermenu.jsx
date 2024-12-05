import React from 'react'
import { Link } from 'react-router-dom'

const Usermenu = () => {
    return (
        <div>
            <div>  <Link to="/dashboard/user/profile">Profile</Link></div>
            <div>  <Link to="/dashboard/user/order">Order</Link></div>
            {/* <div>  <Link to="/dashboard/admin/users">Users</Link></div> */}




        </div>
    )
}

export default Usermenu