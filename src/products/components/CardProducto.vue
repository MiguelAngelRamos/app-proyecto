<template>
  <div class="mt-2 card" style="width: 19rem">
    <img class="mt-2 card-img-top" :src="productoCard.image" alt="imagen del producto">
    <div class="card-body">
      <h5 class="mt-1 card-title text-center">{{ productoCard.title }}</h5>
    </div>
    <span class="d-block text-center">${{ Intl.NumberFormat().format(productoCard.precio)}}</span>
     <button class="btn btn-success mb-2 mt-2">Ir a producto</button>
  </div>
  <!-- <p>Este es la tarjeta del producto</p>
  <pre>{{ productoCard }}</pre> -->
</template>

<script> 
export default {
  props: {
    productoCard: Object
  }
}
</script>

<style>
 span {
  font-weight: bold;
 }
</style>