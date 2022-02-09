import React, { useEffect, useState } from 'react'
import { GetAction } from '../reducers/reducer/reducer'
import { connect, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
function Login({ GetAction }) {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [value, setValue] = useState('password')
    const select = useSelector(state => state.PushUser.usersData)
    useEffect(() => {
        GetAction()
    }, [])
    function getUser(event) {
        event.preventDefault()
        setUser({
            name: event.target.form[0].value,
            password: event.target.form[1].value
        })
    }
    function submitBtn(e) {
        console.log(user);
        e.preventDefault()
        let bool = false
        select.filter(item => {
            if ((item.name === user.name && item.password === user.password)) {
                return bool = true
            } else {
                return bool
            }
        })
        if (bool) {
            return navigate("/"),
                toast.success("muvaffaqiyatli")
        } else {
            toast.error("ism yoki parol xato")
        }

        return e.target[0].value = '',
            e.target[1].value = ''
    }
    const typeBtn = () => {
        if (value === "password") {
            setValue("text")
        } else {
            setValue("password")
        }
    }
    return (
        <div>
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8 col-10 ">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login va parolingizni kiriting</h3>
                        </div>
                        <div className="card-body">
                            <form onChange={getUser} onSubmit={submitBtn} id='form'>
                                {/* <label htmlFor="fname">Name</label> */}
                                <input type="text" placeholder="Name" className="form-control mb-2" />
                                {/* <label htmlFor="password">Password</label> */}
                                <div className="input-group mb-3">
                                    <input type={value} className="form-control" placeholder={"password"} style={{ position: "relative" }} />
                                    <img onClick={typeBtn} src={value === "password" ? "/assets/yopiq.png" : "/assets/ochiq.png"} alt="" className='mb-1' style={{ position: "absolute", right: "10px", top: "10px", zIndex: "999" }} />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-end">
                            <button className="btn btn-dark" form='form'  >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { GetAction })(Login) 
