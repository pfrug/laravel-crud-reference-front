<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Clientes</h1>
    <ClientList />
  </div>
</template>

<script>
import ClientList from '../components/ClientList.vue'
export default { components: { ClientList } }
</script>
