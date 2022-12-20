const { getClient } = require('./connect-db');

(async () => {
	const SelectValue = await getClient();
	let selectQuery = 
	'SELECT * FROM movietv WHERE movietv.primarytitle ILIKE \'batman\'';
	const res = await SelectValue.query(selectQuery);
	console.log(res.rows);
 	await SelectValue.end();
})();