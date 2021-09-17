
const PromptComponent = {
    template:'<div><p>${message}</p><button @click="sayHi">Submit Form </button></div>',
    delimiters: ['${','}'],
    data: function() {
      return {
        message: 'Contact Form '
      }
    },
    methods: {
      sayHi: function(){
        alert('Thank You For Contacting Soul Divine ');
      }
    }
  };
  let vm = new Vue({
    el:'#app',
    components: {
      'prompt-component':PromptComponent
    },
    data: {
      num: 1
    },
    template: `<prompt-component/>`
  });


  