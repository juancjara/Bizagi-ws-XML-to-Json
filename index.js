 var bodyParser = require('body-parser'),
	express = require('express'),
	wsBizagi = require('./dllLogic.js'),
  	app = express();

app.use( bodyParser.json());

app.post('/test',function( request , response) {
	var rsp = {"field":4};
	response.send(rsp);
});

app.post('/WorkFlowBizagi', function(request, response){
  	console.log("request",request.body);
	var requestJson = {},
		responseJson;

	requestJson.methodName = request.body.methodName;
	requestJson.data = JSON.stringify(request.body.data);

	responseJson = wsBizagi.consumeWorkFlowBizagi( requestJson, request.body.requiredInfo );
  	response.send( responseJson );
});

app.post('/getEntity', function(request, response){
	var requestJson,
		responseJson;

	requestJson = request.body;
	requestJson.data = JSON.stringify(requestJson.data);

	responseJson = wsBizagi.consumeGetEntities( requestJson );
  	response.send( responseJson );
});

app.listen(4000);
console.log("Server listening port 4000");
