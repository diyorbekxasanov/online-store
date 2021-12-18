import React, { useState, useEffect } from 'react'
import Skeleton from '@wadehrarshpreet/react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom"
function Product() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                return () => {
                    componentMounted = false
                }
            }
        }
        getProducts()
    }, [])
    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
                <div className="col-md-3">
                    <Skeleton height="350px" />
                </div>
            </>
        )
    }
    const filterProduct = (type) => {
        const f = data.filter(item => item.category === type)
        setFilter(f)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <div className="d-flex justify-content-center col-lg-12 col-md-12 col-sm-12  col-12  ">
                        <button className="btn btn-outline-dark me-1" onClick={() => setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark me-1" onClick={() => filterProduct("men's clothing")}>Men's </button>
                        <button className="btn btn-outline-dark me-1" onClick={() => filterProduct("women's clothing")}>Women's </button>
                        <button className="btn btn-outline-dark me-1" onClick={() => filterProduct("jewelery")}>Jevelery</button>
                        <button className="btn btn-outline-dark me-1" onClick={() => filterProduct("electronics")}>Electronic</button>
                    </div>
                </div>
                {
                    filter.map(item =>
                        <div className="col-md-3 mb-4" key={item.id}>
                            <div className="card h-100 text-center p-4">
                                <div style={{ height: "270px" }}>
                                    <img src={item.image} className="card-img-top h-100" alt={item.title} />

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{item.title.substring(0, 12)}</h5>
                                    <p className="card-text lead fw-bold">$ {item.price}</p>
                                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 ">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Product
