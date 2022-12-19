const { getClient } = require('./connect-db');

(async () => {
	const DeleteValue = await getClient();
	let selectQuery = 
	'DELETE FROM ratings WHERE userid = 1';
	const res = await DeleteValue.query(selectQuery);
	console.log('This is the info');
 	await DeleteValue.end();
})();