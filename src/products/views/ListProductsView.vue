<template>
  <p>Esta es la Lista de los productos</p>
  <pre>{{ productos }}</pre>
</template>

<script>
// *http://localhost:8080/products/list-products
import { mapActions, mapState } from 'vuex';
import CardProducto from '../components/CardProducto.vue';
export default {
  name: 'HomeView',
  components: {
    CardProducto
  },
  methods: {
    ...mapActions({
      products: 'getProductsApi'
    })
  },
  computed: {
    ...mapState(['productos'])
  },
  created() {
    this.products();
  }
}
</script>

<style>

</style>