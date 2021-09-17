

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Nandinee'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })


  
  new Vue({
    el: ".vue",
    data() {
      return {
        statementIsTrue: true
      };
    }
  });



  new Vue({
    el: ".vue_2",
    data() {
      return {
        namesThatRhyme: []
      };
    }
  });


  new Vue({
    el: ".vue_3",
    data() {
      return {
        howAreYouFeeling: "great"
      };
    }
  });

  new Vue({
    el: '.vue_4',
    data: {
      selected: ''
    }
  })