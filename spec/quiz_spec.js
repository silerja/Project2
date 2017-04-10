//import code from index to test
var quiz = require('../index2');

describe('The answer to the first question "Who is this?"', () => {

	it('can blow smoke', () => {
		expect(true).toBe(true);
	});


	it('can tell you if you are right or wrong', () => {
		expect('Joe Siler').toBe(true);
		//expect('Cordell McCurry').toBe(false);
		//expect('Scott Layne').toBe(false);
	});

});