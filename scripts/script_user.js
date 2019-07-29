
//criar novo usuário
const newUser = new Vue({
    el: '#newUser',
    data: {
      name: null,
      email: null,
      password: null,
      age: null
    },

    methods:{
      checkForm: function (e) {
        console.log(this.name);
        console.log(this.email);
        console.log(this.password);
        console.log(this.age);
        e.preventDefault();
      }
    }
  })