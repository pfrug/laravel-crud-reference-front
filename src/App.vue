<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-60 bg-gray-800 text-white p-4 space-y-4">
      <div class="text-lg font-bold">Demo App</div>
      <nav class="space-y-2">
        <router-link to="/clients" class="block hover:bg-gray-700 px-2 py-1 rounded">
          Clients
        </router-link>
        <router-link to="/countries" class="block hover:bg-gray-700 px-2 py-1 rounded">
          Countries
        </router-link>
        <div class="text-sm text-gray-400 mt-4">Otros</div>
        <div class="px-2 py-1 text-gray-500">Usuarios</div>
        <div class="px-2 py-1 text-gray-500">Reportes</div>
      </nav>
      <button @click="logout" class="mt-6 text-sm text-red-300 hover:text-red-500">
        Cerrar sesión
      </button>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6 overflow-y-auto bg-gray-50">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>
