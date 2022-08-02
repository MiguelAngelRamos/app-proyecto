import router from '@/router';
import { authUser } from '@/utils/user-auth';
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
    },
    setUsuario(state, payload) {
      state.usuario = payload;
    }
  },
  actions: {
    async getProductsApi({commit}) {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log(data); // *El arreglo de los productos 8 elementos 
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
   },
   async loginUsuario({commit}, usuario) {
    let existe;
    // console.log(usuario);¡
    // *validaciones!!!
    const usuarioLogeado = {
      email: usuario.email,
      password: usuario.password
    };
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      console.log(data); // *El arreglo con el unico objeto que es el usuario
      //* [{}]
      existe = data.some(user => user.email === usuarioLogeado.email && user.password === usuarioLogeado.password);
      console.log(existe);

    } catch (error) {
      throw error;
    }
    commit('setUsuario', usuarioLogeado)
    authUser(existe);
    router.push('/products')
   }
  },
  getters: {
  },
  modules: {
  }
})
