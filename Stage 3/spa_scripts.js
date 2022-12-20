const fs = require('fs');


fetch("movies.json").then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products)
	{
		out +=`
			<tr>
			   <td> '${product.tconst}' </td>
			   <td> '${product.titletype}' </td>
			   <td> '${product.primarytitle}' </td>
			</tr>
		`;
	}
	placeholder.innerhtml = out;
})

function jsonReader(filePath,cb){
	fs.readFile(filePath,'utf-8',(err,fileData) => {
		if(err){
			return cb && cb(err);
		}

		try {
			const object = JSON.parse(fileData);
			return cb && cb(null, object);
		} catch (err) {
			return cb && cb(err);
		}
	})
}


const newMovie = {
	tconst: 'tt0011224',
	titletype: 'movie',
	primarytitle: 'TestMovie3',
};
const jsonString = JSON.stringify(newMovie);
console.log(jsonString); 

 fs.writeFile('./newmovies.json',JSON.stringify(newMovie,null,2), err =>{
 	if(err){
 		console.log(err);
 	} else {
 		console.log('File created.');
 	}
 });

jsonReader('./movies.json',(err,data) => {
	if(err){
		console.log(err);
	} else {
		data.titletype = 'tvshow';
		fs.writeFile('./movies.json',JSON.stringify(data,null,2), err =>{
			if(err){
				console.log(err);
			}
		});
	}
});