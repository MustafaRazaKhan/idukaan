import React from 'react'
import Usermenu from '../../components/usermenu/Usermenu'
import { useAuth } from '../../context/Authcontext'

const Dashboard = () => {
  const [auth] =useAuth()
  return (
    <div>

      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-md-3">
            <Usermenu/>
          </div>
          <div className="col-md-9">
          <div className="card w-50 p-4">
                        <h3>Name:{auth?.user?.name}</h3>
                        <h3>email:{auth?.user?.email}</h3>
                        <h3>Name:{auth?.user?.address}</h3>
                    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard