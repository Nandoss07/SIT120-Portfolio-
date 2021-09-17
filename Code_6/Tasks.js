Vue.createApp({
    data() {
      return {
        checkedNames: []
      }
    }
  }).mount('#v-model-multiple-checkboxes')


  Vue.createApp({
    data() {
      return {
        selected: 'Nothing',
        options: [
          { text: '11', value: '11 AM' },
          { text: '12', value: '12 PM' },
          { text: '02', value: '2 PM' },
          { text: '03', value: '3 PM' },
          { text: '05', value: '5 PM' }
        ]
      }
    }
  }).mount('#v-model-select-dynamic')




  