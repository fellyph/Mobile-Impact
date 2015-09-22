Parse.initialize("2fCYJxTlUgudJlmCFKjYLkvaZCE2xukZoPef87GY", "xR6psxbG0H2KtwKAsCtvDsY6QHljJZCXlgJLxoMN");

var app = {
    Post: null,
    Comment: null,
    post: null,
    commentForm: null,
    posts: null,
    postsResult: null,

    init: function() {
        //selecionando os elementos
        app.commentForm  = document.querySelector("#comment-form");
        app.commentForm.addEventListener("submit", app.sendComment);
        app.posts = document.querySelector(".posts");

        app.Post = Parse.Object.extend("Post");
        app.Comment = Parse.Object.extend("Comment");
        app.loadAllPosts();
    },

    loadAllPosts: function() {
        //chamamos a função Query do Parse parar varer a nossa base
        var query = new Parse.Query(app.Post);
        query.equalTo("objectId", "TnSDUrpREk"); 
        //a função trata a query para sucesso ou erro de nossa consulta
        query.find({
            success: function(results){
                app.showPosts(results);
            },
            error: function(error){
                //tratamento para caso de erro
                console.log("error", error);
            }
        });
    },

    showPosts: function(results) {
        postsResult = results;
        postsResult.forEach(function(post) {
            app.createPost(post);
        });
    },

    createPost: function(post) {
        var htmlMarkup = "<article data-id='" + post.id + "'>" +
                        "<h2>" + post.attributes.title + "</h2>" +
                        "<p>" + post.attributes.content + "</p>" +
                        "</article>";

        app.posts.innerHTML += htmlMarkup;
        app.commentForm.dataset.id = post.id;
    },

    sendComment: function(event) {
        event.preventDefault();
        var target = event.srcElement || event.target;
        var comment = new app.Comment();
        var post = new app.Post();
        post.id = target.dataset.id;
        comment.save({
            name: target.name.value,
            email: target.email.value,
            message: target.message.value,
            parentPost: post
        }).then(function(result){
            app.loadComments(post);
        })
    },
    
    loadComments: function(post) {
        var query = new Parse.Query(app.Comments);
        query.equalTo("post",post.id)
        //vamos realizar uma query para resgatar todos os comentários
        query.find({
            //caso sucesso exibimos os nossos comentários
            success: function(results){
                app.showComments(results);
            },
            error: function(error){
                //tratamento para caso de erro
                console.log("error", error);
            }
        });
    },
    
    showComments: function(results) {
    
    }
};

window.addEventListener("load", function() {
   app.init()
});