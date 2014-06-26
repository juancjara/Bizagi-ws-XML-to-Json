var bodyParser = require('body-parser'),
	express = require('express'),
	wsBizagi = require('./dllLogic.js'),
  	app = express();

app.use( bodyParser.json());

app.post('/test',function( request , response) {
	console.log(request.body);
	var ff = {"campo":4};
	response.send(ff);
});

app.post('/WorkFlowBizagi', function(request, response){
  	console.log("request",request.body);
	var requestJson,
		responseJson;

	requestJson = request.body;
	requestJson.data = JSON.stringify(requestJson.data);

	responseJson = wsBizagi.consumeWorkFlowBizagi( requestJson );
  	response.send( responseJson );
});

app.listen(4000);
console.log("Server listening port 4000");
/*
<campo>WS.campo1<XPaths><XPath XPath=\"WS.campo1\" /></XPaths></campo>


<BizAgiWSParam>
	<CaseInfo>
		<CaseNumber>903</CaseNumber>
	</CaseInfo>
	<XPaths>
		<XPath XPath="WS.campo1"></XPath>
		<XPath XPath="WS.campo2"></XPath>
	</XPaths>
</BizAgiWSParam>

<BizAgiWSResponse xmlns="">
   <XPath XPath="WS.campo1">ff</XPath>
   <XPath XPath="WS.campo2"/>
</BizAgiWSResponse>


<BizAgiWSParam>
	<EntityData>
		<EntityName>WS</EntityName>
		<Filters>
			<![CDATA[ idCase  = 903 ]]> 
		</Filters>
	</EntityData>
</BizAgiWSParam>

<BizAgiWSResponse xmlns="">
   <Entities>
      <WS key="3">
         <campo1>ff</campo1>
         <idCase>903</idCase>
      </WS>
   </Entities>
</BizAgiWSResponse>
*/
