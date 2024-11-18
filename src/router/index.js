import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import ArticulosView from '@/views/ArticulosView.vue'
import ContactoView from '@/views/ContactoView.vue'
import Art_1View from '@/views/Art_1View.vue'
import Art_2View from '@/views/Art_2View.vue'
import Art_3View from '@/views/Art_3View.vue'
import Art_4View from '@/views/Art_4View.vue'
import Art_5View from '@/views/Art_5View.vue'
import Art_6View from '@/views/Art_6View.vue'

const routes = [
  {
  
    path: '/',
    name: 'Inicio',   
    component: InicioView
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: ArticulosView
  },
  {
    path: '/articulo_1',
    name: 'Articulo_1',   
    component: Art_1View
  },
  {
    path: '/articulo_2',
    name: 'Articulo_2',   
    component: Art_2View
  },
  {
    path: '/articulo_3',
    name: 'Articulo_3',   
    component: Art_3View
  },
  {
    path: '/articulo_4',
    name: 'Articulo_4',   
    component: Art_4View
  },
  {
    path: '/articulo_5',
    name: 'Articulo_5',   
    component: Art_5View
  },
  {
    path: '/articulo_6',
    name: 'Articulo_6',   
    component: Art_6View
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactoView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
