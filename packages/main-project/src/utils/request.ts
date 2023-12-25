import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 100000
})

export default service