import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    productoObject: {},
    usuario: null,
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload;
    },
    setProductById(state, payload) {
      state.productoObject = payload;
    }
  },
  actions: {
    async getProductsApi({commit}) {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log(data); //* El arreglo de los productos 8 elementos
        commit('setProductos', data);
      } catch (error) {
        throw error;
      }
    },
   async getProductByIdApi({commit}, id) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
      commit('setProductById', data);
    } catch (error) {
      throw error;
    }
   }
  },
  getters: {
  },
  modules: {
  }
})
