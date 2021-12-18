import React from 'react'
import Product from './Product'

function Body() {
    return (
        <div>
            <div className="card text-white border-0">
                <img src="/assets/home2.jpg" className="card-img"  alt="background" />
            </div>
            <Product/>
        </div>
    )
}

export default Body
