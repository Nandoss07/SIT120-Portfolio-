
Vue.component('child',{
    props: {
      text: {
        type: String,
        required: true
      }
    },
    template: `<div>{{ text }}</div>`
  });
  
  new Vue({
    el: '#app',
    data() {
      return {
        message: 'Welcome To Soul Divine Mr David Lin'
      }
    }
  })

  