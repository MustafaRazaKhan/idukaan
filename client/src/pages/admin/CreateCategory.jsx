import React, { useState, useEffect } from 'react'
import Adminmenu from "../../components/adminmenu/Adminmenu"
import axios from "axios"
import { toast } from 'react-toastify';
// import Form from '../../components/form/Form'


const CreateCategory = () => {
  const [categories, setCategories] = useState([ ])
  const [catData,setCatData]  =useState({
    catName:""
  })
  const handleChange =(e)=>{
    setCatData({
    
      [e.target.name]:e.target.value
    })

  }
  const handleSubmit =  async(e)=>{
    e.preventDefault();
    // console.log(catData)
   try {
    const  res  = await axios.post("http://localhost:8080/api/create-category",{name:catData.catName});
    console.log(res)
    const data = await res.data
    console.log(data)
    if(data?.sucess){
      toast.success(`${data.savedCategory.name} is created`);
      getAllCat()
      catData.catName=""

    }
    else{
      toast.error(`${data.message}`)

    }

   } catch (error) {
    console.log(error)
   }
  }
  const getAllCat = async () => {
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
  const  handleDelete=async(id)=>{
    // console.log(id)
    try {
      const res =await axios.delete(`http://localhost:8080/api/delete-category/${id}`);
      const data = res.data;
      if(data.sucess){
        toast.success('category vdeleted sucessfull');
        getAllCat()
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            
            <h1>              Manage Category
            </h1>
            <div className="p-3">
            <div>
            <form onSubmit={handleSubmit} className=''>
                <div className="mb-3">
                  
                    <input type="text" placeholder='Add New Category' className="form-control"  value={catData.catName}  name='catName'    onChange={(e)=>handleChange(e)} />
                  
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>



        </div>
              {/* <Form handleSubmit={handleSubmit} value={catData.catName} setValue={setCatName}/> */}
            </div>
            <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                   
                    </tr>
                  </thead>
            {categories?.map((c,i) => {
              return (<>
               
                  <tbody>
                    <tr>
                      <th scope="row">{i+1}</th>
                      <td>{c.name}</td>
                      <td>
                        <button type='button'  className='btn btn-primary mx-2'>Edit</button>
                        <button type='button'  className='btn btn-danger mx-2'  onClick={()=>handleDelete(c._id)} >Delete</button>
                      </td>
              
                    </tr>
                  
                 
                  </tbody>
             



              </>)
            })}
               </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default CreateCategory