const getMovie = 'SELECT DISTINCT movietv.tconst,movietv.primarytitle FROM movietv WHERE movietv.titletype = \'movie\'';
const getMovieById = 'SELECT DISTINCT * FROM movietv WHERE movietv.titletype = \'movie\' AND movietv.tconst = $1';
const checkTConstExists = 'SELECT t from movietv t WHERE s.tconst = $1';
const addMovie = 'INSER INTO movietv(tconst,titletype,primarytitle) VALUES ($1,$2,$3)';
const removeMovie = 'DELETE FROM movietv WHERE tconst = $1';
const updateMovie = 'UPDATE movietv SET primarytitle = $1 WHERE tconst = $2';

const getActor = 'SELECT DISTINCT actorinfo.nconst,actorinfo.primaryname FROM actorinfo';
const getActorById = 'SELECT DISTINCT * FROM actorinfo WHERE actorinfo.nconst = $1';
const checkNConstExists = 'SELECT a from actorinfo a WHERE a.nconst = $1';
const addActor = 'INSER INTO actorinfo(nconst,primaryname,birthyear,deathyear,notes,person_rating) VALUES ($1,$2,$3,$4,$5,$6)';
const removeActor = 'DELETE FROM actorinfo WHERE nconst = $1';
const updateActor = 'UPDATE actorinfo SET notes = $1 WHERE nconst = $2';

const getUsers = 'SELECT usertable.userid,usertable.username FROM usertable';
const getUsersById = 'SELECT DISTINCT * FROM usertable WHERE usertable.userid = $1';
const checkUserIdExists = 'SELECT a from usertable a WHERE a.userid = $1';
const addUsers = 'INSER INTO usertable(userid,username,password,salt,hash) VALUES ($1,$2,$3,$4,$5)';
const removeUsers = 'DELETE FROM usertable WHERE userid = $1';
const updateUsers = 'UPDATE usertable SET password = $1 WHERE userid = $2';


module.exports = {
	getMovie,
	getMovieById,
	addMovie,
	checkTConstExists,
	removeMovie,
	updateMovie,
	getActor,
	getActorById,
	addActor,
	checkNConstExists,
	removeActor,
	updateActor,
	getUsers,
	getUsersById,
	addUsers,
	checkUserIdExists,
	removeUsers,
	updateUsers,
};