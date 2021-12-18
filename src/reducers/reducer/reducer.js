import { createSlice } from "@reduxjs/toolkit"
import { apiCall } from "../Actions/Action"
const cart = []

export const PushCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADDCART":
            console.log(action);
            const ex = state.find(e => e.id === product.id)
            if (ex) {
                if (action.text === "plus") {
                    return state.map(x => x.id === product.id ? { ...x, val: x.val + 1 } : x)
                }
                else {

                    return state.map(x => x.id === product.id ? { ...x, val: (x.val - 1) === 0 ? x.val = 1 : x.val - 1 } : x)
                }
            }
            else {
                const product = action.payload
                return [
                    ...state, {
                        ...product,
                        val: 1
                    }
                ]
            }
        case "DELITEM":
            const ex2 = state.find(e => e.id === product.id)
            return state.filter(x => x.id !== ex2.id)
        default:
            return state
    }
}


const PushUser = createSlice({
    name: "users",
    initialState: {
        usersData: []
    },
    reducers: {
        GetUser: (state, action) => {
            state.usersData=action.payload
        },
    }
})

export default PushUser.reducer
export const GetAction = () => apiCall({
    method: 'get',
    url: '/data',
    tip: PushUser.actions.GetUser.type,
})
export const AddAction = (data) => apiCall({
    method: 'post',
    url: '/data',
    data,
    tip: PushUser.actions.GetUser.type
})







