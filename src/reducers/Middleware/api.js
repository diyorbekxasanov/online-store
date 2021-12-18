import axios from "axios"

const api = ({ dispatch }) => (next) => (action) => {
    if (action.type !== "apicall") {
        next(action)
        return
    }

    const { method, data, url, tip } = action.payload
    console.log(tip);
    axios({
        baseURL: "http://localhost:3040",
        url,
        method,
        data
    })
        .then(res => {
            dispatch({
                type: tip,
                payload: res.data
            })
        })
        .catch(res => {
            dispatch({
                type: tip,
                payload: res.data
            })
        })
}
export default api