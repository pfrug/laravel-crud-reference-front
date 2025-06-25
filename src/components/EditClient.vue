<template>
  <ClientForm :client-id="Number(route.params.id)" :edit-mode="true" @updated="goBack" />
</template>

<script>
import ClientForm from '../components/ClientForm.vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  components: { ClientForm },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const goBack = () => {
      router.push('/clients')
    }

    return {
      route,
      goBack
    }
  }
}
</script>
