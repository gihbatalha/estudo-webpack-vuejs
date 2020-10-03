
import Vue from 'vue'
import router from './plugins/router'
import FirstComponent from './components/first-component.vue'
import SecondComponent from './components/second-component.vue'

Vue.component('first-component', FirstComponent);
Vue.component('second-component', SecondComponent)
  
const vm = new Vue({
    el:"#app",
    router,
    render: h => h(FirstComponent)
});

export default vm;