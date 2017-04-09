(Function(){
	var question = [{
		//First question
		question: "Who is this?"
		//Image of person yyou want to ask about
		image: "silerja.jpeg"
		choices: [Joe Siler, Cordell McCurry, Scott Layne],
		correctAnswer: Joe Siler
	},

	}];

	var questionCounter = 0;
	var selections = []
	var quiz = $('#quiz');

	displayNext();
})