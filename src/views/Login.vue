// src/views/Login.vue
<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-xl font-bold mb-6 text-center">Login</h2>
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API = import.meta.env.VITE_API_URL

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const res = await axios.post(`${API}/login`, {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('access_token', res.data.access_token)
        this.$router.push('/clients')
      } catch (e) {
        alert('Login failed')
      }
    }
  },
  mounted() {
    if (localStorage.getItem('access_token')) {
      this.$router.push('/clients')
    }
  }
}
</script>
