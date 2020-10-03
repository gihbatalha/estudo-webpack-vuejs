import Vue from 'vue'
import VueRouter from "vue-router"
import SecondComponent from '../components/second-component.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/teste', component:SecondComponent }
]

const router = new VueRouter({
    routes
})

export default router