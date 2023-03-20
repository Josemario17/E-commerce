const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        showTheForms: 'in'
      }
    }
  }).mount('#app')
