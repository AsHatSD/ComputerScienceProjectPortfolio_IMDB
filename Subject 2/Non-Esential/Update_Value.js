const { getClient } = require('./connect-db');

(async () => {
	const UpdateValue = await getClient();
	let selectQuery = 
	'UPDATE ratings SET rating = 10 WHERE userid = 2';
	const res = await UpdateValue.query(selectQuery);
	console.log('This is the info');
 	await UpdateValue.end();
})();