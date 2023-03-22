const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        showTheForms: true
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
