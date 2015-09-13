Parse.initialize("2fCYJxTlUgudJlmCFKjYLkvaZCE2xukZoPef87GY", "xR6psxbG0H2KtwKAsCtvDsY6QHljJZCXlgJLxoMN");


// Criando as variáveis que iremos trabalhar
var PostObject = Parse.Object.extend("Post"),
    Comment = Parse.Object.extend("Comment"),
    post = new PostObject(),
    commentForm;

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
})

//
function sendComment(event){
	event.preventDefault();
    var comment = new Comment();
    console.log(event);
    //comment.save({});
}

