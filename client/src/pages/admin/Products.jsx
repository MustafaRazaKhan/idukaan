import React, { useState, useEffect } from 'react'
import Adminmenu from '../../components/adminmenu/Adminmenu'
import axios from "axios"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const setAllProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/get-product")
            if (data?.sucess) {
                setProducts(data.products)
                toast.success("product ")
            }
        } catch (error) {
            console.log(error)

        }

    }


    useEffect(() => {
        setAllProducts()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Adminmenu />
                    </div>
                    <div className="col-md-9 p-4">
                      <div className="" style={{
                        display:"flex",
                        gap:"4px",
                        flexWrap:"wrap"
                      }}>
                      {
                            products.map((p) => {
                                return (
                                    <>
                                     <Link to={`/dashboard/admin/update-product/${p.slug}`}>
                                     
                                     <div className="card p-2" style={{ width: '15rem', height:"20rem",boxShadow:"0 0 3px black"}} >
                                            <img src={`http://localhost:8080/api/product-photo/${p._id}`} className="" alt="Product image" height="100px" style={{
                                                border :'2px solid black',
                                                padding:"2px"
                                            }}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{p.name}</h5>
                                                <p className="card-text">
                                                    {p.description}
                                                </p>
                                                <p className="card-text">
                                                    {p.price}
                                                </p>
                                                <a href="#" className="btn btn-primary">Update Product</a>
                                            </div>
                                        </div>
                                     
                                     </Link>

                                       
                                    </>
                                )
                            })
                        }
                      </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Products