
new Vue({
    el: "#app",
    data: {
      todos: [
        { text: "Watch SIT120 Lecture 3 ", done: false },
        { text: "Attend SIT120 Practical Class ", done: false },
        { text: "Finish Reflection For Task 2 ", done: true },
        { text: "Buy Groceries", done: true }
      ]
    },
    methods: {
        toggle: function(todo){
          todo.done = !todo.done
      }
    }
  })