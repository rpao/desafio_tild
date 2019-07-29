
//criar novo post
const newPost = new Vue({
    el: '#newPost',
    data: {
        title: null,
        content: null,
        user_id: null
    },

    methods:{
        checkForm: function (e) {
            console.log(this.title);
            console.log(this.content);
            e.preventDefault();
        }
    }
})