//login
const loginForm = new Vue({
    el: '#loginForm',
    data: {
      email: null,
      password: null
    },

    methods:{
      checkForm: function (e) {
        console.log(this.email);
        console.log(this.password);
        e.preventDefault();
      }
    }
  })

//lista de post para exibição
var postList = new Vue({
    el: '#postList',
    data: {
      dados: {
        "current_page": 1,
        "data": [
            {
                "id": 75,
                "title": "TESTE",
                "content": "And how odd the directions will look! ALICE'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE'S LOVE). Oh dear, what nonsense I'm talking!' Just then she noticed a curious appearance in the.",
                "image": "https://lorempixel.com/640/480/?20271",
                "user_id": 53,
                "created_at": "2019-07-28 23:55:17",
                "updated_at": "2019-07-28 23:55:17"
            },
            {
                "id": 72,
                "title": "eligendi",
                "content": "And how odd the directions will look! ALICE'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE'S LOVE). Oh dear, what nonsense I'm talking!' Just then she noticed a curious appearance in the",
                "image": "https://lorempixel.com/640/480/?20271",
                "user_id": 53,
                "created_at": "2019-07-28 23:53:18",
                "updated_at": "2019-07-28 23:53:18"
            },
            {
                "id": 71,
                "title": "eligendi",
                "content": "And how odd the directions will look! ALICE'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE'S LOVE). Oh dear, what nonsense I'm talking!' Just then she noticed a curious appearance in the",
                "image": "https://lorempixel.com/640/480/?20271",
                "user_id": 53,
                "created_at": "2019-07-28 23:53:17",
                "updated_at": "2019-07-28 23:53:17"
            },
            {
                "id": 70,
                "title": "eligendi",
                "content": "And how odd the directions will look! ALICE'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE'S LOVE). Oh dear, what nonsense I'm talking!' Just then she noticed a curious appearance in the",
                "image": "https://lorempixel.com/640/480/?20271",
                "user_id": 53,
                "created_at": "2019-07-28 23:53:12",
                "updated_at": "2019-07-28 23:53:12"
            },
            {
                "id": 67,
                "title": "ELIGENDI",
                "content": "And how odd the directions will look! ALICE'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE'S LOVE). Oh dear, what nonsense I'm talking!' Just then she noticed a curious appearance in the.",
                "image": "https://lorempixel.com/640/480/?20271",
                "user_id": 50,
                "created_at": "2019-07-28 23:47:11",
                "updated_at": "2019-07-28 23:47:11"
            },
            {
                "id": 49,
                "title": "repellendus",
                "content": "You MUST have meant some mischief, or else you'd have signed your name like an arrow. The Cat's head began fading away the moment he was going off into a conversation. Alice felt so desperate that.",
                "image": "https://lorempixel.com/640/480/?90844",
                "user_id": 49,
                "created_at": "2019-07-26 20:11:14",
                "updated_at": "2019-07-26 20:11:14"
            },
            {
                "id": 48,
                "title": "rerum",
                "content": "Rabbit say, 'A barrowful of WHAT?' thought Alice 'without pictures or conversations in it, and found that her shoulders were nowhere to be two people! Why, there's hardly room for this, and Alice.",
                "image": "https://lorempixel.com/640/480/?73050",
                "user_id": 48,
                "created_at": "2019-07-26 20:11:14",
                "updated_at": "2019-07-26 20:11:14"
            },
            {
                "id": 47,
                "title": "voluptatibus",
                "content": "Do you think, at your age, it is you hate--C and D,' she added in an offended tone. And the moral of that dark hall, and wander about among those beds of bright flowers and the constant heavy.",
                "image": "https://lorempixel.com/640/480/?85979",
                "user_id": 47,
                "created_at": "2019-07-26 20:11:14",
                "updated_at": "2019-07-26 20:11:14"
            },
            {
                "id": 46,
                "title": "molestias",
                "content": "Alice alone with the Mouse in the middle of her or of anything to put down the chimney?--Nay, I shan't! YOU do it!--That I won't, then!--Bill's to go from here?' 'That depends a good opportunity for.",
                "image": "https://lorempixel.com/640/480/?26039",
                "user_id": 46,
                "created_at": "2019-07-26 20:11:14",
                "updated_at": "2019-07-26 20:11:14"
            },
            {
                "id": 45,
                "title": "accusamus",
                "content": "And then, turning to Alice, and she felt unhappy. 'It was much pleasanter at home,' thought poor Alice, 'when one wasn't always growing larger and smaller, and being so many tea-things are put out.",
                "image": "https://lorempixel.com/640/480/?86300",
                "user_id": 45,
                "created_at": "2019-07-26 20:11:14",
                "updated_at": "2019-07-26 20:11:14"
            }
        ],
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
      }
    }
  })