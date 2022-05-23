import axios from 'axios'

export const axiosPublic = axios.create({
  baseURL: 'https://nameless-falls-29152.herokuapp.com/',
})
