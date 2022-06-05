import axios from "axios"

const URL = "https://e-commerce97.herokuapp.com/api"
var Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token : ""

export const publicReq = axios.create({
    baseURL: URL
})

export const userReq = axios.create({
    baseURL: URL,
    headers: {token:`${Token}`}
})