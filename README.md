# desafio_tild
Este repositório contém a implementação do desafio Til
Diretórios:
   Arquivos: contém especificação e documentação da API
   scripts: contém os arquivos .js
   style: contém os arquivos .css

Utiliza Vue.js através da importação:
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.js"></script>

Utilizar Axios.js através da importação:
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>

Não é necessário montar ambiente, já que o Vue.js e o Axios.js são importados diretamente no html.

Páginas HTML:
1 - home.html: acessa a página inicial do blog com a lista de todos os post
2 - newUser.html: formulário para criação/cadastro de novo usuário
3 - newPost.html: formulário para criação de um novo post
4 - editPost.html: formuláro para edição de um post
5 - viewPost.html: página que mostra os detalhes (autor, data de criação e comentários) de um post
6 - conta.html: mostra os detalhes de perfil do usuário

Observaçoes:
É possível efetuar login e algumas funcionalidades o requerem (como criar novo post e criar um comentário), porém o login só utiliza o id do usuário, pois não há consumo de senha. Poderia ser utilizando o e-mail do usuário, porém a implementação seria mais complexa devido a necessidade de consumo por paginação da lista de usuários. Assim a única verificação feita é se o id passado retorna um usuário existente.