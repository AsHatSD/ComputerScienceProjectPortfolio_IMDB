const pool = require('./connect-db');
const bodyParser = require('body-parser');
const controller = require('./controller');
const macRouter = require('./routes');
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static('images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", function(req,res){
	res.sendFile("D:/CSPP_API/index.html");
});


app.use("/routes",macRouter);

var server = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s",host,port)
});
