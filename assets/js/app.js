const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        showTheForms: 'in'
      }
    },

    methods:{
      changeSectionDiv(){
        showTheForms: "out";
      },

      changeSectionDiv2(){
        showTheForms: "in"
      }
    }
  }).mount('#app')
