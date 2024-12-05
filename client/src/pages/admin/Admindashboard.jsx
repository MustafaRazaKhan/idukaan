import React from 'react'
import Adminmenu from '../../components/adminmenu/Adminmenu'
import { useAuth } from '../../context/Authcontext'
const Admindashboard = () => {
  const [auth] =useAuth()

  return (
    <div>
      <div className="container row">
        <div className="col-md-3">
          <Adminmenu/>
        </div>
        <div className="col-md-9 p-5">
          <div className="card w-50 p-3">

          <h4>aDMIN nAME:  {auth?.user?.name}</h4>
          <h4>Admin Email:  {auth?.user?.email}</h4>
          <h4> Admin MObile {auth?.user?.phone}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admindashboard