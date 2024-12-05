import React, { useState, useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import Adminmenu from '../../components/adminmenu/Adminmenu'
import { useNavigate } from 'react-router-dom';

const CreateProducts = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const getAllCat = async () => {
    console.log(category)
    try {
      const res = await axios.get("http://localhost:8080/api/get-category");
      const data = res.data
      // console.log(data)
      // const cat = await res.data;
      // console.log(cat)
      if (data.sucess) {
        setCategories(data.cat)
      }

    } catch (error) {

    }
  }
  useEffect(() => {
    getAllCat()
  }, [])
  const handleSelect = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value)
  }
  const handleShipping = (e) => {
    console.log(e.target.value)
    setShipping(e.target.value)
  }
  // console.log(shipping)

  const handleProduct = async(e) =>{
    // console.log("clicked")
   try {
    const productData = new FormData();
    productData.append("name", name)
    productData.append("description", description)
    productData.append("price", price)
    productData.append("quantity", quantity)
    productData.append("photo", photo)
    productData.append("category", category)
   const {data} = await axios.post("http://localhost:8080/api/create-product", productData)
   if(data?.sucess){
    toast.success("product created sucessfully")
    navigate("/dashboard/admin/products")

   }
   else{
    toast.error("Product not created")
   }
    
   } catch (error) {
    console.log(error)
    toast.error("something went wrong")
    
   }
  }
  return (
    <div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9 ">
            <h1>Create Product</h1>
            <div className=" my-4">
              <select class="form-select" aria-label="Default select example" onChange={(e) => { handleSelect(e) }}>
                <option selected>JMEcodes Category</option>
                {
                  categories?.map((c) => {
                    return <>
                      <option value={c._id}>{c.name}</option>
                    </>
                  })
                }
              </select>

            </div>
            {/* 
                                    // ! photo field             
                                                 */}
            <div className="mb-4">
              <label className='col-md-12 btn btn-secondary' >
                {photo ? photo.name:"upload Photo"}
                <input type="file" name="photo" accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} id=""  hidden/></label>
            </div>
            <div className="mb-4">
              {
                photo &&(
                  <div className="text-center">
                    <img src={URL.createObjectURL(photo)} alt="product photo" height={50}  />
                  </div>
                )
              }
            </div>
            <div className="mb-4">
              <input type="text"  value={name}   onChange={(e)=>setName(e.target.value)} placeholder='Name of the product'/>
            </div>
            <div className="mb-4">
              <input type="text"  value={description}   onChange={(e)=>setDescription(e.target.value)} placeholder='Description of the product'/>
            </div>
           
            <div className="mb-4">
              <input type="number"  value={price}   onChange={(e)=>setPrice(e.target.value)} placeholder='Price  of the product'/>
            </div>
            <div className="mb-4">
              <input type="number"  value={quantity}   onChange={(e)=>setQuantity(e.target.value)} placeholder='Quantity of the product'/>
            </div>
            <div className="mb-4">
            <select name="" id="" onChange={(e)=>handleShipping(e)}>
              <option value="" disabled>Shipping</option>
              <option value="0">NO</option>
              <option value="1">Yes</option>
            </select>
            </div>
          <div className="mb-4">
            <button className='btn btn-warning' onClick={(e)=>handleProduct(e)}>Create Product</button>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateProducts