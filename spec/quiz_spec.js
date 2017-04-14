//import code from index to test
var image = require('../Pics')

describe('a program to call pics from a list.', () => {

	it('can blow smoke', () => {
		expect(true).toBe(true);
	});

	it('can get the roster of people', () => {
		expect(image.getRoster() instanceof Array).toBe(true);
	});
});

var quiz = require('../index2');

describe('The answer to the question "Who is this?"', () => {

	it('can blow smoke', () => {
		expect(true).toBe(true);
	});

	it('can tell you the answer for each question.', () => {
		expect(answer0).toBe('Joe');
		expect(answer1).toBe('Cordell');
		expect(answer2).toBe('Scott');
	});

	//Refactored the test this is optional code 
	//for how it use to be.
	//it('can tell you if you are right or wrong for the second question', () => {
	//	expect(answer1).toBe('Cordell');
	//});

	//it('can tell you if you are right or wrong for the third question', () => {
	//	expect(answer2).toBe('Scott');
	//});


});