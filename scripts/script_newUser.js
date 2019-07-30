//VERIFICAÇÃO DE USUÁRIO
var idUser = localStorage.idUser;

//login
var urlUser = "https://desafio.tild.com.br/api/users";

// GET para obter usuario
$.get(urlUser+"/"+idUser, function( data ) {
  if (!data){
    localStorage.removeItem('idUser');
    $('#erroLogin').modal();
  }
});

function reload(){
  window.location.reload();
}

//login
const loginForm = new Vue({
  el: '#loginForm',
  data: {
    id: null
  },

  methods:{
    checkForm: function (e) {
      e.preventDefault();
      localStorage.idUser = this.id;
      window.location.reload();
    }
  }
})

//logout
const logoutForm = new Vue({
  el: '#logoutForm',
  data: {
    email: null,
    password: null
  },

  methods:{
    checkForm: function (e) {
      e.preventDefault();
      idUser = undefined;
      localStorage.removeItem('idUser');
      window.location.reload();
    }
  }
})

//criar novo usuário
const newUser = new Vue({
    el: '#newUser',
    data: {
      name: null,
      email: null,
      password: null,
      age: null,
      user_id: idUser
    },

    methods:{
      checkForm: function (e) {
        e.preventDefault();

        axios.post(urlUser, {
          'name': this.name, 
          'email':this.email, 
          'password':this.password, 
          'age':this.age
        })
          .then(response => window.location.href="home.html")
          .catch(error => {console.log(error)});
      },
      cancelar: function(){
        window.location.href="home.html";
      },
      sair:function(){
        localStorage.removeItem('idUser');
        window.location.reload();
      }
    }
  })