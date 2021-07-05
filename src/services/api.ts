import axios from 'axios'

const api = axios.create({
    baseURL: "https://radiodev-61f07-default-rtdb.firebaseio.com/"
})

export default api;