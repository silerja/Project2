let fs = require('fs');

let getRoster = () => {
	let roster = fs.readFileSync('./pictures/roster.csv');
	console.log(roster instanceof Array ? 'true' : 'false');
	return[];
};

module.exports = {
	getRoster: getRoster
};