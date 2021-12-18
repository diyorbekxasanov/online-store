import React, { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addCart } from '../reducers/Actions/Action'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductsInfo() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const AddCart = (product) =>{
        dispatch(addCart(product))
    }
    useEffect(() => {
        const getInfo = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getInfo()
    }, [])



    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={300} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} className="ms-2" />
                </div>
            </>
        )
    }
    const ShowLoading = () => {
        return (
            <>
                <div className="col-lg-6 col-md-6  col-12">
                    <img src={product.image} alt={product.title} width="100%" height="60%"/>
                </div>
                <div className="col-lg-6 col-md-6  col-12">
                    <h4 className={"text-uppercase text-black-50"}>{product.category} </h4>
                    <h1 className="display-5 fw-bolder">{product.title} </h1>
                    <p className="lead">Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i> </p>
                    <h3 className="display-5 fw-bold my-4"> $ {product.price} </h3>
                    <p className="lead">{product.description} </p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>AddCart(product)}>Add to Card</button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container" >
                <div className="row py-4">
                    {
                        loading ? <Loading /> : <ShowLoading />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsInfo
