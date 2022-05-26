import axios from 'axios'

export const axiosPublic = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://nameless-falls-29152.herokuapp.com',
})
