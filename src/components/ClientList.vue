<template>
  <div>
    <button class="mb-4 px-4 py-2 bg-blue-600 text-white" @click="$router.push('clients/create')">
      Crear Cliente
    </button>

    <table class="table-auto w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="border px-2 py-1">#</th>
          <th class="border px-2 py-1">Nombre</th>
          <th class="border px-2 py-1">NIF</th>
          <th class="border px-2 py-1">Comercial</th>
          <th class="border px-2 py-1">Grupo</th>
          <th class="border px-2 py-1">Término Pago</th>
          <th class="border px-2 py-1">País</th>
          <th class="border px-2 py-1">Email</th>
          <th class="border px-2 py-1 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in clients" :key="c.id">
          <td class="border px-2 py-1">{{ c.id }}</td>
          <td class="border px-2 py-1">{{ c.name }}</td>
          <td class="border px-2 py-1">{{ c.tax_id || '—' }}</td>
          <td class="border px-2 py-1">{{ c.sales_rep?.name || '—' }}</td>
          <td class="border px-2 py-1">{{ c.client_group?.name || '—' }}</td>
          <td class="border px-2 py-1">{{ c.payment_term?.name || '—' }}</td>
          <td class="border px-2 py-1">{{ c.country?.name || '—' }}</td>
          <td class="border px-2 py-1">{{ c.email || '—' }}</td>
          <td class="border px-2 py-1 text-center space-x-2">
            <button title="Ver" @click="viewClient(c.id)">👁</button>
            <button title="Editar" @click="editClient(c.id)">✏️</button>
            <button title="Eliminar" @click="onDelete(c.id)">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { fetchClients, deleteClient } from '../api/clients'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const clients = ref([])

    const loadClients = async () => {
      const res = await fetchClients()
      clients.value = res.data.data || res.data
    }

    const onDelete = async (id) => {
      if (!confirm('¿Eliminar este cliente?')) return
      await deleteClient(id)
      loadClients()
    }

    const viewClient = (id) => alert(`Simulación de vista: cliente ${id}`)

    const router = useRouter()
    
    const editClient = (id) => {
      router.push(`/clients/${id}/edit`)
    }

    onMounted(loadClients)
    return { clients, onDelete, viewClient, editClient }
  }
}
</script>
