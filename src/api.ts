import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: ' https://in-orbit-nine.vercel.app/',
})

export default api
