import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { GetAction, AddAction } from '../reducers/reducer/reducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register({ GetAction, AddAction }) {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [pas, setPas] = useState('')
    const [value, setValue] = useState('password')
    
    useEffect(() => {
        GetAction()
    }, [])

    const getUsers = (event) => {
        event.preventDefault()
        let a = {
            lastName: event.target.form[0].value,
            name: event.target.form[1].value,
            phone: event.target.form[2].value,
            email: event.target.form[3].value,
            password: event.target.form[4].value
        }
        setUsers(a)
    }

    const SubmitBtn = (e) => {
        e.preventDefault()

        if (users.email.substr(-8) !== "@mail.ru") {
            return setEmail("e-mail pochtani hato kiritdingiz, iltimos to'gri kiriting(misol uchun xxx@mail.ru)")
        } else if (users.password.length < 8) {
            return setPas("8 dan ko'p bo'lsin")
        } else {
            AddAction(users);
            toast.success('ma`lumotlar saqlandi')
            return e.target.form[0].value = '',
                e.target.form[1].value = '',
                e.target.form[2].value = '',
                e.target.form[3].value = '',
                e.target.form[4].value = '',
                setEmail(''),
                setPas('')
        }

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
            <div className="my-5 d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                    <div className="card">
                        <div className="card-header">
                            <h3>Ma'lumot kiritish</h3>
                        </div>
                        <div className="card-body text-center" >
                            <form onChange={getUsers} id="form">
                                <input type="text" placeholder="LatName" className="form-control mt-3" required />
                                <input type="text" placeholder="Name" className="form-control mt-3" required />
                                <input type="number" placeholder="Phone" className="form-control mt-3" required />
                                <input type="text" placeholder="Email" className="form-control mt-3" required />
                                <span className='text-danger m-0' style={{ fontSize: "12px" }}>{email} </span>
                                <div className="input-group mb-3 mt-3">
                                    <input type={value} className="form-control" placeholder={"password"} style={{position:"relative"}} />
                                    <img onClick={typeBtn} src={value === "password" ? "/assets/yopiq.png" : "/assets/ochiq.png"} alt="" className='mb-1' style={{position:"absolute",right:"10px",top:"10px", zIndex:"999"}} />
                                </div>
                                <span className='text-danger m-0' style={{ fontSize: "12px" }}>{pas} </span>
                            </form>
                        </div>
                        <div className="card-footer text-end">
                            <button className="btn btn-dark" form="form" type='submit.form' onClick={SubmitBtn}>Saqlash</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { GetAction, AddAction })(Register)
