import { createAction } from "@reduxjs/toolkit"

export const addCart = (product,text) => {
    return {
        type: "ADDCART",
        payload: product,
        text:text
    }
}
export const delCart = (item) => {
    return {
        type: "DELITEM",
        payload: item
    }
}

export const apiCall = createAction("apicall")