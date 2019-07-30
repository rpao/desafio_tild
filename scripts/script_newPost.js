
// url para consumir api e enviar por post o novo post do usuário
urlNewPost = 'https://desafio.tild.com.br/api/posts';

//VERIFICAÇAO DE USUÁRIO, LOGIN E LOGOUT
//Verifica se há usuario logado
var idUser = localStorage.idUser;

//login
var urlUser = "https://desafio.tild.com.br/api/users/";

// GET para obter usuario
$.get(urlUser+idUser, function( data ) {
  if (!data){
    localStorage.removeItem('idUser');
    $('#erroLogin').modal();
  }
});

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

//componente de novo post
const newPost = new Vue({
    el: '#newPost',
    data: {
        title: null,
        content: null,
        image:null,
        user_id: idUser
    },
    methods:{
        checkForm: function (e) {
          e.preventDefault();
          
          //obtem id do usuário logado
          this.user_id = localStorage.idUser;
          
          //envia através do POST o novo post criado pelo usuário
          axios.post(urlNewPost, {'title': this.title, 'content':this.content, 'image':this.image, 'user_id':this.user_id})
                .then(response => window.location.href="viewPost.html?p="+response.data.id)
                .catch(error => {console.log(error)});
        },
        cancelar: function(){
          //cancelar criação de novo post -> redireciona para tela inicial
          window.location.href = "home.html";
        }
    }
})