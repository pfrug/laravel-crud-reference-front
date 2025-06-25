<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Countries</h2>
    <table class="table-auto w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="border px-2 py-1">#</th>
          <th class="border px-2 py-1">Nombre</th>
          <th class="border px-2 py-1">Código</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in countries" :key="c.id">
          <td class="border px-2 py-1">{{ c.id }}</td>
          <td class="border px-2 py-1">{{ c.name }}</td>
          <td class="border px-2 py-1">{{ c.code }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

const API = import.meta.env.VITE_API_URL
const token = localStorage.getItem('access_token')

export default {
  data() {
    return { countries: [] }
  },
  async mounted() {
    const res = await axios.get(`${API}/countries`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    this.countries = res.data.data || res.data
  }
}
</script>
