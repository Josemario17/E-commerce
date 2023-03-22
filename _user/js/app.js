

const { createApp } = Vue

  createApp({
    data() {
      return {
        DataSect : "personal",
        name: "Name",
        username:"UserName",
        address: "address",
        email: "Email"
        
      }
    }
  }).mount('#app')
