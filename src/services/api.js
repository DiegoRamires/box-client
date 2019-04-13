import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dropboxcloneapi.herokuapp.com/'
})

export default api