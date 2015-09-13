Parse.initialize("2fCYJxTlUgudJlmCFKjYLkvaZCE2xukZoPef87GY", "xR6psxbG0H2KtwKAsCtvDsY6QHljJZCXlgJLxoMN");


// Criando as variáveis que iremos trabalhar
var PostObject = Parse.Object.extend("Post"),
    Comment = Parse.Object.extend("Comment"),
    post = new PostObject(),
    commentForm,
    postsResult;

/* Criando um Post para depois relacionar os comentários
post.save({
	title: "Meu Post",
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo eu urna euismod commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id urna ac ex aliquet eleifend a et dolor. Phasellus bibendum eleifend magna." 
}).then(function(object) {
    console.log(object);
}); */

window.addEventListener("load", function() {
    // selecionando o  form que irá enviar os comentários
	commentForm  = document.querySelector("#comment-form");
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
    
}

//
function sendComment(event) {
	event.preventDefault();
    var target = event.srcElement || event.target;
    var comment = new Comment();
    comment.save({
        name: target.name.value,
        email: target.email.value,
        message: target.message.value
    }).then(function(result){
        console.log(result);
    })
    console.log(event);
    //comment.save({});
}

