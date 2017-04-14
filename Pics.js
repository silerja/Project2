//start of what I need to get pictures into quiz

let fs = require('fs');

let getRoster = () => {
	let roster = fs.readFileSync('./pictures/roster.csv');
	console.log(roster instanceof Array ? 'true' : 'false');
	return[];
};

//export roster for use in other componets
module.exports = {
	getRoster: getRoster
};