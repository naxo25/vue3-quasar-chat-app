<template>
  <div class="q-pa-md absolute-center" style="max-width: 400px; width: 100%">

    <q-form
      @submit="onLogin"
      @reset="onRegister"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.email"
        label="Email"
      />

      <q-input
        filled
        type="password"
        v-model="form.pass"
        label="Password"
      />

      <div>
        <q-btn label="Ingresar" type="submit" color="primary"/>
        <q-btn label="Registrarse" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, inject } from 'vue'

export default {
  setup () {
    const store = inject('store')
    const $q = useQuasar()
    const form = ref({})

    return {
      form,

      onLogin () {

        store.actions.Login(form.value)

      },

      onRegister() {

        store.actions.Register(form.value)

      }

    }
  }
}
</script>
