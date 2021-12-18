import React, { useEffect } from 'react'
import { addCart, delCart } from '../reducers/Actions/Action'
import { useSelector, useDispatch } from 'react-redux'

function Cart() {
    const product = useSelector(state => state.PushCart)
    const dispatch = useDispatch()



    const handleButton = (product, text) => {
        dispatch(addCart(product,text))
    }
    const deleteCart = (item) =>{
        dispatch(delCart(item))
    }
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    {
                        product?.map(item =>
                            <div className="col-lg-3 col-md-4  col-12" key={item.id}>
                                <img src={item.image} alt={item.title} width="200" height="230" />
                                <h3>{item.title}</h3>
                                <p>{item.val} X ${item.price} = ${item.val * item.price} </p>
                                <div className="btns">
                                    <button className="btn btn-outline-dark" onClick={() => handleButton(item, 'minus')}><i className="fa fa-minus" ></i> </button>
                                    <button className="btn btn-outline-dark ms-2" onClick={() => handleButton(item, 'plus')}><i className="fa fa-plus"></i> </button>
                                    <button className="btn btn-dark ms-5" onClick={()=>deleteCart(item)}>Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
