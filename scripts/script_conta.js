// url para consumir api e obter dados do usuário
var urlUser = "https://desafio.tild.com.br/api/users/";
var urlPost = "https://desafio.tild.com.br/api/post/";

//VERIFICAÇÃO DE USUÁRIO, LOGIN E LOGOUT
//obtem id do usuário logado
var idUser = localStorage.idUser;

//login
function reload(){
  window.location.reload();
}

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

// GET para obter dados do usuário
$.get(urlUser+idUser, function( data ) {
  if (!data){
    localStorage.removeItem('idUser');
    $('#erroLogin').modal();
  }else{
    user.dadosUser = data;
  }
});

//componente de lista de posts
var user = new Vue({
  el: '#user',
  data:{
    dadosUser: {
      id:null,
      name: "",
      age: null,
      email: "",
      email_verified_at: null,
      created_at: "",
      updated_at: "",
      posts:null
    },
    user_id: idUser,
    item:null
  },
  methods:{
    verMais: function (idPost) {
      //redireciona para a tela de visualização de post
      window.location.href = "viewPost.html?p="+idPost;
    },
    editar: function (idPost) {
      //redireciona para a tela de ediçao de post
      window.location.href = "editPost.html?p="+idPost;
    }
  }
})
