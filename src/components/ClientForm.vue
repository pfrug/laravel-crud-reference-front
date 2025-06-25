<template>
  <form @submit.prevent="onSubmit" class="max-w-6xl space-y-6">

    <section>
      <h2 class="text-lg font-semibold">General</h2>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <label class="block mb-1">Nombre Cliente *</label>
          <input v-model="form.name" class="border w-full px-2 py-1" required />
          <p v-if="errors.name" class="text-red-600 text-sm">{{ errors.name[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Descripción</label>
          <input v-model="form.description" class="border w-full px-2 py-1" />
          <p v-if="errors.description" class="text-red-600 text-sm">{{ errors.description[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">ID Fiscal (NIF) *</label>
          <input v-model="form.tax_id" class="border w-full px-2 py-1" required />
          <p v-if="errors.tax_id" class="text-red-600 text-sm">{{ errors.tax_id[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">NIF no residentes</label>
          <input v-model="form.foreign_tax_id" class="border w-full px-2 py-1" />
          <p v-if="errors.foreign_tax_id" class="text-red-600 text-sm">{{ errors.foreign_tax_id[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Comercial gestión</label>
          <select v-model="form.sales_rep_id" class="border w-full px-2 py-1">
            <option value="" disabled>Haz clic para elegir</option>
            <option v-for="s in salesReps" :key="s.id" :value="s.id">{{ s.name }}</option>
          </select>
          <p v-if="errors.sales_rep_id" class="text-red-600 text-sm">{{ errors.sales_rep_id[0] }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-semibold">Legal</h2>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <label class="block mb-1">Cuenta Contable</label>
          <input v-model="form.accounting_code" class="border w-full px-2 py-1" />
          <p v-if="errors.accounting_code" class="text-red-600 text-sm">{{ errors.accounting_code[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Grupos de clientes *</label>
          <select v-model="form.client_group_id" class="border w-full px-2 py-1" required>
            <option value="" disabled>Haz clic para elegir</option>
            <option v-for="g in clientGroups" :key="g.id" :value="g.id">{{ g.name }}</option>
          </select>
          <p v-if="errors.client_group_id" class="text-red-600 text-sm">{{ errors.client_group_id[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Términos de pago *</label>
          <select v-model="form.payment_term_id" class="border w-full px-2 py-1" required>
            <option value="" disabled>Haz clic para elegir</option>
            <option v-for="p in paymentTerms" :key="p.id" :value="p.id">{{ p.name }}</option>
          </select>
          <p v-if="errors.payment_term_id" class="text-red-600 text-sm">{{ errors.payment_term_id[0] }}</p>
        </div>
        <div class="flex items-center mt-6">
          <input type="checkbox" v-model="form.billing_by_ref" id="billing_by_ref" class="mr-2" />
          <label for="billing_by_ref">Facturar por referencia</label>
          <p v-if="errors.billing_by_ref" class="text-red-600 text-sm">{{ errors.billing_by_ref[0] }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg font-semibold">Dirección y contacto</h2>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <label class="block mb-1">Dirección</label>
          <input v-model="form.address" class="border w-full px-2 py-1" />
          <p v-if="errors.address" class="text-red-600 text-sm">{{ errors.address[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Código Postal</label>
          <input v-model="form.postal_code" class="border w-full px-2 py-1" />
          <p v-if="errors.postal_code" class="text-red-600 text-sm">{{ errors.postal_code[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Población</label>
          <input v-model="form.city" class="border w-full px-2 py-1" />
          <p v-if="errors.city" class="text-red-600 text-sm">{{ errors.city[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Provincia</label>
          <input v-model="form.province" class="border w-full px-2 py-1" />
          <p v-if="errors.province" class="text-red-600 text-sm">{{ errors.province[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">País *</label>
          <select v-model="form.country_id" class="border w-full px-2 py-1" required>
            <option value="" disabled>Haz clic para elegir</option>
            <option v-for="c in countries" :key="c.id" :value="Number(c.id)">{{ c.name }}</option>
          </select>
          <p v-if="errors.country_id" class="text-red-600 text-sm">{{ errors.country_id[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Telefono</label>
          <input v-model="form.phone_1" class="border w-full px-2 py-1" />
          <p v-if="errors.phone_1" class="text-red-600 text-sm">{{ errors.phone_1[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Telefono 2</label>
          <input v-model="form.phone_2" class="border w-full px-2 py-1" />
          <p v-if="errors.phone_2" class="text-red-600 text-sm">{{ errors.phone_2[0] }}</p>
        </div>
        <div>
          <label class="block mb-1">Email *</label>
          <input v-model="form.email" class="border w-full px-2 py-1" required />
          <p v-if="errors.email" class="text-red-600 text-sm">{{ errors.email[0] }}</p>
        </div>
      </div>
    </section>

    <div class="flex gap-4">
      <button type="submit" class="px-4 py-2 bg-blue-600 text-white">Guardar</button>
      <button type="button" class="px-4 py-2 bg-gray-300 text-black" @click="goBack">Cancelar</button>
    </div>

  </form>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue'
import { createClient } from '../api/clients'
import { useRouter } from 'vue-router'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL

export default {
  props: {
    clientId: Number,
    editMode: Boolean
  },
  emits: ['created', 'updated'],
  setup(props, { emit }) {

    const form = reactive({
      name: '', description: '', tax_id: '', foreign_tax_id: '', email: '', address: '',
      postal_code: '', city: '', province: '', phone_1: '', phone_2: '', accounting_code: '',
      billing_by_ref: false, country_id: null, payment_term_id: null,
      client_group_id: null, sales_rep_id: null
    })

    const router = useRouter()
    const countries = ref([])
    const paymentTerms = ref([])
    const clientGroups = ref([])
    const salesReps = ref([])
    const errors = ref({})

    const clientData = ref(null)

    const loadAuxData = async () => {
      const token = localStorage.getItem('access_token')
      const headers = { headers: { Authorization: `Bearer ${token}` } }

      const [c, p, g, s] = await Promise.all([
        axios.get(`${API}/countries`, headers),
        axios.get(`${API}/payment-terms`, headers),
        axios.get(`${API}/client-groups`, headers),
        axios.get(`${API}/sales-reps`, headers)
      ])

      countries.value = c.data
      paymentTerms.value = p.data
      clientGroups.value = g.data
      salesReps.value = s.data
    }

    const loadClient = async () => {
      if (!props.editMode || !props.clientId) return
      const token = localStorage.getItem('access_token')
      const res = await axios.get(`${API}/clients/${props.clientId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const client = res.data

      Object.assign(form, {
        ...client,
        billing_by_ref: !!client.billing_by_ref,
        country_id: client.country?.id || null,
        payment_term_id: client.payment_term?.id || null,
        client_group_id: client.client_group?.id || null,
        sales_rep_id: client.sales_rep?.id || null
      })
    }
   
    const onSubmit = async () => {
        const token = localStorage.getItem('access_token')
        try {
          // construir el payload limpio, solo con campos primitivos válidos
          const {
            name, description, tax_id, foreign_tax_id, email, address,
            postal_code, city, province, phone_1, phone_2, accounting_code,
            billing_by_ref, country_id, payment_term_id, client_group_id, sales_rep_id
          } = form

          const payload = {
            name, description, tax_id, foreign_tax_id, email, address,
            postal_code, city, province, phone_1, phone_2, accounting_code,
            billing_by_ref, country_id, payment_term_id, client_group_id, sales_rep_id
          }

          if (props.editMode) {
            await axios.put(`${API}/clients/${props.clientId}`, payload, {
              headers: { Authorization: `Bearer ${token}` }
            })
            emit('updated')
          } else {
            await createClient(payload, token)
            emit('created')
          }
        } catch (err) {
          if (err.response && err.response.status === 422) {
            errors.value = err.response.data.errors || {}
          } else {
            console.error(err)
          }
        }
      }


    onMounted(async () => {      
      await loadAuxData()
      await loadClient()    
    })
    
    const goBack = () => {
      router.push('/clients')
    }

    return {
      form,
      countries,
      paymentTerms,
      clientGroups,
      salesReps,
      onSubmit,
      errors,
      goBack
    }
  }
}
</script>

