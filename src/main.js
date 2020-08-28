import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//importamos vue-router
import VueRouter from 'vue-router';

//importamos nuestros componentes
import inicio from './components/Inicio';
import listarArticulos from './components/ListarArticulos';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';
import contacto from './components/Contacto';


//creamos nuestros componentes
Vue.component('inicio', inicio);
Vue.component('listarArticulos', listarArticulos);
Vue.component('crearArticulo', crearArticulo);
Vue.component('editarArticulo', editarArticulo);
Vue.component('contacto', contacto);


//uso de vue-router
Vue.use(VueRouter);

//definimos las rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio',component:inicio},
  {path:'/articulos', component:listarArticulos},
  {path:'/crear', component:crearArticulo, name:'crearArticulo'},
  {path:'/editar/:id', component:editarArticulo, name:'editarArticulo'},
  {path:'/contacto',component:contacto},
  {path:'/redes',component:contacto}
]

//crearmos el objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
