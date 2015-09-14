Parse.initialize("2fCYJxTlUgudJlmCFKjYLkvaZCE2xukZoPef87GY", "xR6psxbG0H2KtwKAsCtvDsY6QHljJZCXlgJLxoMN");


// Criando as variáveis que iremos trabalhar
var Post = Parse.Object.extend("Post"),
    Comment = Parse.Object.extend("Comment"),
    post = new Post(),
    commentForm,
    posts,
    postsResult;

window.addEventListener("load", function() {
    // selecionando o  form que irá enviar os comentários
	commentForm  = document.querySelector("#comment-form");
    posts = document.querySelector(".posts");
	// adicionando o evento para acompanhar qualquer envio do formulário
	commentForm.addEventListener("submit", sendComment);
    loadAllPosts();
})


function loadAllPosts() {
    //chamamos a função Query do Parse parar varer a nossa base
    var query = new Parse.Query("Post");

    //a função trata a query para sucesso ou erro de nossa consulta
    query.find({
        success: function(results){
            showPosts(results);
        },
        error: function(error){
            //tratamento para caso de erro
            console.log("error", error);
        }
    });
}

function showPosts(results) {
    postsResult = results;
    postsResult.forEach(function(post) {
        createPost(post);
    });
}

function createPost(post) {
    var htmlMarkup = "<article data-id='" + post.id + "'>" +
                    "<h2>" + post.attributes.title + "</h2>" + 
                    "<p>" + post.attributes.content + "</p>" +
                    "</article>";
    
    posts.innerHTML += htmlMarkup;
    commentForm.dataset.id = post.id;
}

//
function sendComment(event) {
	event.preventDefault();
    var target = event.srcElement || event.target;
    var comment = new Comment();
    var post = new Post();
    post.id = target.dataset.id;
    comment.save({
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
        parentPost: post 
    }).then(function(result){
        console.log(result);
    })
    console.log(event);
    //comment.save({});
}

