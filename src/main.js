import Vue from 'vue'


import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// import Vueditor from 'vueditor'
// import 'vueditor/dist/style/vueditor.min.css'

// let config = {
//   toolbar: [
//     'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
//     'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
//     'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
//     'insertOrderedList', 'insertUnorderedList', '|', 'tables', '|', 'switchView'
//   ],
//   fontName: [
//     {val: 'arial black'}, 
//     {val: 'times new roman'}, 
//     {val: 'Courier New'}
//   ],
//   fontSize: [
//     '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'
//   ],
//   uploadUrl: '',
//   id: '',
//   classList: []
// };
// Vue.use(Vueditor, config)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')