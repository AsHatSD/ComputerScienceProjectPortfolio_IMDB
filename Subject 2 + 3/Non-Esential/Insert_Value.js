const { getClient } = require('./connect-db');

(async () => {
	const InsertValue = await getClient();
	let selectQuery = 
	'Insert INTO ratings (userid,tconst,rating) VALUES(1,\'tt21250231\',10)';
	const res = await InsertValue.query(selectQuery);
	console.log('This is the info');
 	await InsertValue.end();
})();