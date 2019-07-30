// o que falta:
// 1 - pegar o nome dos autores pelo id pra colocar na página
// 2 - efetuar login

// url para consumir api e obter lista de todos os posts com paginação
var urlListPost = "https://desafio.tild.com.br/api/posts";
var urlUser = "https://desafio.tild.com.br/api/users/";

// GET para obter a primeira pagina de posts
$.get(urlListPost+"?page=1", function( data ) {
  dados.dados = data;
  dados.user_id = idUser;
});

function reload(){
  window.location.reload();
}

//VERIFICAÇÃO DE USUÁRIO, LOGIN E LOGOUT
//obtem id do usuário logado
var idUser = localStorage.idUser;

// GET para obter a primeira pagina de posts
$.get(urlUser+idUser, function( data ) {
  if (!data){
    localStorage.removeItem('idUser');
    $('#erroLogin').modal();
  }
});

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

//componente de lista de posts
var dados = new Vue({
  el: '#postList',
  data:{
    dados:{
      "current_page": 1,
      "data": null,
      "first_page_url": "http://desafio.tild.com.br/api/posts?page=1",
      "from": 1,
      "last_page": 6,
      "last_page_url": "http://desafio.tild.com.br/api/posts?page=6",
      "next_page_url": "http://desafio.tild.com.br/api/posts?page=2",
      "path": "http://desafio.tild.com.br/api/posts",
      "per_page": 10,
      "prev_page_url": null,
      "to": 10,
      "total": 53
    },
    user_id:idUser
  },
  methods:{
    verMais: function (idPost) {
      //redireciona para a tela de visualização de post
      window.location.href = "viewPost.html?p="+idPost;
    },
    changePage: function(page){
      // implementa a paginação através do axios.get
      // utiliza o get para atualizar os dados da página
      axios.get(urlListPost +"?page="+page)
                .then(response => this.dados = response.data)
                .catch(error => {console.log(error)});
    }
  }
})
