<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Crear Cliente</h1>
    <ClientForm @created="onCreated" />
  </div>
</template>

<script>
import ClientForm from '../components/ClientForm.vue'
export default {
  components: { ClientForm },
  methods: {
    onCreated() { this.$router.push('/') }
  }
}
</script>
