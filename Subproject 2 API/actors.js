const express = require('express')
const router = express.Router();
const { getClient } = require('./connect-db');

router.get('/',(req,res) =>{
	(async () => {
	const SelectValue = await getClient();
	let selectQuery = 
	'SELECT DISTINCT * FROM actorinfo WHERE actorinfo.primaryname ILIKE concat(\'%Mads Mikkelsen%\')';
	const res = await SelectValue.query(selectQuery);
	console.log(res.rows);
 	await SelectValue.end();
	})();
})

module.exports = router;
