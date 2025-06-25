import axios from 'axios'

const API = import.meta.env.VITE_API_URL
const token = localStorage.getItem('access_token')

export const fetchClients = () => {
  return axios.get(`${API}/clients`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const createClient = (data) => {
  return axios.post(`${API}/clients`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const deleteClient = (id) => {
  return axios.delete(`${API}/clients/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}
