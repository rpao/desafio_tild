// url para consumir API
var urlPost = "https://desafio.tild.com.br/api/posts";

//obter id do post a partir da url
var idPost = window.location.search.substring(1).split('=')[1];

//obter dados do post para exibição
$.get(urlPost+"/"+idPost, function( data ) {
  postDetails.post = data;
});

//VERIFICAÇÃO DE USUÁRIO, LOGIN E LOGOUT
// id de usuario logado
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

//lista de post para exibição
var postDetails = new Vue({
    el: '#postDetails',
    data:{ 
      post: null,
      user_id: idUser,
      novoComentario: {
        title: null,
        content: null
      }
    },
    methods:{
      editarPost: function (idPost) {
        //redireciona para a tela de editar post
        window.location.href = "editPost.html?p="+idPost;
      },
      voltar: function () {
        //redireciona para a tela de visualização de post
        window.location.href = "home.html";
      },
      checkForm: function (e) {
        //enviar o comentário.
        e.preventDefault();
        axios.post(urlPost+'/'+idPost+"/comments", {'title': this.novoComentario.title, 'content':this.novoComentario.content, 'user_id':this.user_id})
                .then(response => window.location.reload())
                .catch(error => {console.log(error)});
      }
    }
  })