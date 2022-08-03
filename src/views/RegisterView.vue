<template>
   <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="registroUsuario({email: email, password: password})">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Ingrese su correo</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Ingrese su contraseña</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>

          <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
data() {
    return {
      email: "",
      password: ""
    }
  },
methods: {
    ...mapActions(['registroUsuario'])
  },
}
</script>

<style>

</style>