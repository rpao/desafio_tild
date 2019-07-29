//lista de post para exibição
var postDetails = new Vue({
    el: '#postDetails',
    data:{ 
      post: {
        "id": 80,
        "title": "ELIGENDI",
        "content": "And how odd the directions will look! ALICE'S RIGHT FOOT, ESQ. HEARTHRUG, NEAR THE FENDER, (WITH ALICE'S LOVE). Oh dear, what nonsense I'm talking!' Just then she noticed a curious appearance in the.",
        "image": "https://lorempixel.com/640/480/?20271",
        "user_id": 53,
        "created_at": "2019-07-29 00:07:07",
        "updated_at": "2019-07-29 00:07:07",
        "comments": [],
        "user": {
            "id": 53,
            "name": "Brenda",
            "age": 21,
            "email": "brenda@gmail.com",
            "email_verified_at": null,
            "created_at": "2019-07-27 18:17:48",
            "updated_at": "2019-07-28 23:12:19"
        }
      }
    }
  })