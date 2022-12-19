const pool = require('./connect-db');
const queries = require('./queries');

const getMovie = (req, res)=>{
	pool.query(queries.getMovie, (error,results) => {
			if(error) throw error;
			res.status(200).json(results.rows);
		})
};

const getMovieById = (req, res)=>{
	const id = req.params.id; 
	pool.query(queries.getMovieById,[id], (error,results) => {
			if(error) throw error;
			res.status(200).json(results.rows);
		})
};

const addMovie = (req, res)=>{
	const { tconst , titletype , primarytitle } = req.body;
	pool.query(queries.checkTConstExists,[tconst], (error,results) => {
		if(results.rows.length){
			res.send("Tconst exists.");
		}

	pool.query(queries.addMovie,[tconst,titletype,primarytitle], (error,results) =>{
		if(error) throw error;
		res.status(201).send("Movie added.");
		console.log("Movie Added.");
		})
	})
};

const removeMovie = (req, res)=>{
	const id = req.params.id;
	pool.query(queries.getMovieById,[id],(error,results) => {
		const noMovies = !results.rows.length;
		if(noMovies){
		res.send("Movies does not exist.");
		}
	pool.query(queries.removeMovie,[id],(error,results) => {
		if(error) throw error;
			res.status(200).send("Movie deleted.");
		})
	})
};

const updateMovie = (req, res)=>{
	const id = req.params.id;
	const { primarytitle } = req.body;

	pool.query(queries.getMovieById,[id],(error,results) => {
		const noMovies = !results.rows.length;
		if(noMovies){
		res.send("Movies does not exist.");
		}
	pool.query(queries.updateMovie,[primarytitle,id],(error,results)=>{
		if(error) throw error;
			res.status(200).send("Movie updated.");

		})

	})
};


const getActor = (req, res)=>{
	pool.query(queries.getActor, (error,results) => {
			if(error) throw error;
			res.status(200).json(results.rows);
		})
};

const getActorById = (req, res)=>{
	const id = req.params.id; 
	pool.query(queries.getActorById,[id], (error,results) => {
			if(error) throw error;
			res.status(200).json(results.rows);
		})
};

const addActor = (req, res)=>{
	const { nconst , primaryname , birthyear , deathyear , notes , person_rating } = req.body;
	pool.query(queries.checkNConstExists,[tconst], (error,results) => {
		if(results.rows.length){
			res.send("Tconst exists.");
		}

	pool.query(queries.addActor,[nconst,primaryname,birthyear,deathyear,notes,person_rating], (error,results) =>{
		if(error) throw error;
		res.status(201).send("Actor added.");
		console.log("Actor Added.");
		})
	})
};

const removeActor = (req, res)=>{
	const id = req.params.id;
	pool.query(queries.getActorById,[id],(error,results) => {
		const noActor = !results.rows.length;
		if(noActor){
		res.send("Actor does not exist.");
		}
	pool.query(queries.removeActor,[id],(error,results) => {
		if(error) throw error;
			res.status(200).send("Actor deleted.");
		})
	})
};

const updateActor = (req, res)=>{
	const id = req.params.id;
	const { notes } = req.body;

	pool.query(queries.getActorById,[id],(error,results) => {
		const noActor = !results.rows.length;
		if(noActor){
		res.send("Actor does not exist.");
		}
	pool.query(queries.updateActor,[notes,id],(error,results)=>{
		if(error) throw error;
			res.status(200).send("Actor updated.");

		})

	})
};

const getUsers = (req, res)=>{
	pool.query(queries.getUsers, (error,results) => {
			if(error) throw error;
			res.status(200).json(results.rows);
		})
};

const getUsersById = (req, res)=>{
	const id = req.params.id; 
	pool.query(queries.getUsersById,[id], (error,results) => {
			if(error) throw error;
			res.status(200).json(results.rows);
		})
};

const addUsers = (req, res)=>{
	const { userid , username , password , salt , hash } = req.body;
	pool.query(queries.checkNConstExists,[tconst], (error,results) => {
		if(results.rows.length){
			res.send("User exists.");
		}

	pool.query(queries.addUsers,[userid,username,password,salt,hash], (error,results) =>{
		if(error) throw error;
		res.status(201).send("User added.");
		console.log("User Added.");
		})
	})
};

const removeUsers = (req, res)=>{
	const id = req.params.id;
	pool.query(queries.getUsersById,[id],(error,results) => {
		const noUsers = !results.rows.length;
		if(noUsers){
		res.send("User does not exist.");
		}
	pool.query(queries.removeUsers,[id],(error,results) => {
		if(error) throw error;
			res.status(200).send("User deleted.");
		})
	})
};

const updateUsers = (req, res)=>{
	const id = req.params.id;
	const { notes } = req.body;

	pool.query(queries.getUsersById,[id],(error,results) => {
		const noUsers = !results.rows.length;
		if(noUsers){
		res.send("User does not exist.");
		}
	pool.query(queries.updateUsers,[notes,id],(error,results)=>{
		if(error) throw error;
			res.status(200).send("User updated.");

		})

	})
};



module.exports = {
	getMovie,
	getMovieById,
	addMovie,
	removeMovie,
	updateMovie,
	getActor,
	getActorById,
	addActor,
	removeActor,
	updateActor,
	getUsers,
	getUsersById,
	addUsers,
	removeUsers,
	updateUsers,
};