Parse.initialize('xxxx', 'xxx');

var MyObject = Parse.Object.extend('MyObject'),
	test = new MyObject();

test.save({
	nome: 'Fellyph Cintra',
	email: 'email',
	idade: 30,
	skills: [
		'HTML5',
		'JS',
		'CSS',
		'PHP',
		'JAVA'
	]}).then(function(object) {
		alert('Informação salva com sucesso!');
	});