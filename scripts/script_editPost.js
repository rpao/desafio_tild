// obtem id do post pela url
var idPost = window.location.search.substring(1).split('=')[1];

// url para consumir api
var urlPost = "https://desafio.tild.com.br/api/posts/";

// método GET para obter dados do post que será editado
$.get(urlPost+idPost, function( data ) {
  //usuário só pode editar um post se ele for o autor
  if (idUser == data.user_id){
    postDetails.post = data;
  }
});

//VERIFICAÇÃO DE USUÁRIO, LOGIN E LOGOUT
//obtem id de usuário logado
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

//componete de edição
var postDetails = new Vue({
    el: '#editPost',
    data: {
        post: null,
        user_id: idUser
    },
    methods:{
        checkForm: function (e) {
          e.preventDefault();
          
          // enviar os dados para atualização
          // redireciona para a tela de view do post
          axios.put(urlPost+this.post.id, {
                'title': this.post.title, 
                'content': this.post.content, 
                'image': this.post.image
              })
                .then(response => window.location.href="viewPost.html?p="+response.data.id)
                .catch(error => {console.log(error)});
        },
        cancelarEdicao: function(idPost){
            //redireciona para a tela de visualização de post
            window.location.href = "viewPost.html?p="+idPost;
        },
        voltar: function(){
          //redireciona para a tela de visualização de post
          window.location.href = "viewPost.html?p="+idPost;
      }
    }
})