import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'
function Navbar() {
    const selector = useSelector(state => state.PushCart)
    const [icon, seticon] = useState(false)
    function menuClick() {
        seticon(p => !p)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/" onClick={menuClick} >LA COLLECTION</NavLink>
                    <button onClick={menuClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className={icon ? "fa fa-times" : "fa fa-bars"}></i>
                    </button>
                    {
                        icon && <button onClick={menuClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class={icon ? "fa fa-times" : "fa fa-bars"}></i>
                        </button> ?
                            <div className="d-flex flex-column w-100 h-100" id="navbarSupportedContent">
                                <div className="buttons text-end mt-4">
                                    <NavLink to="/login" className="btn btn-outline-dark" onClick={menuClick}>
                                        <i className="fa fa-sign-in me-1"></i>Login
                                    </NavLink>
                                    <NavLink to="/register" className="btn btn-outline-dark ms-2" onClick={menuClick}>
                                        <i className="fa fa-user-plus me-1"></i>Register
                                    </NavLink>
                                    <NavLink to="/cart" className="btn btn-outline-dark ms-2" onClick={menuClick}>
                                        <i className="fa fa-shopping-cart me-1"></i>Cart({selector.length})
                                    </NavLink>`
                                </div>
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-5">
                                    <li className="nav-item" onClick={menuClick}>
                                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={menuClick}>
                                        <NavLink className="nav-link " aria-current="page" to="/products">Product</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={menuClick}>
                                        <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={menuClick}>
                                        <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                                    </li>

                                </ul>

                            </div> : ''
                    }
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons ">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login
                            </NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register
                            </NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart({selector.length})
                            </NavLink>`
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
