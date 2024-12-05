import React from 'react'
import { Link } from 'react-router-dom'

const Adminmenu = () => {
  return (
    <div>


      <div>  <Link to ="/dashboard/admin/create-category">Create Category</Link></div>
      <div>  <Link to ="/dashboard/admin/create-products">Create Product</Link></div>
      <div>  <Link to ="/dashboard/admin/users">Users</Link></div>
      <div>  <Link to ="/dashboard/admin/products">Products</Link></div>
    </div>
  )
}

export default Adminmenu