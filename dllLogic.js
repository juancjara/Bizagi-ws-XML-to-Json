var WorkFlowBizagi = require('edge').func({
        assemblyFile: 'BizagiWSDLL.dll',
        typeName: 'BizagiWSDLL.Startup',
        methodName: 'ConsumeWorkFlow' 
	}),
	formatter = require('./formatter.js'),
    GetEntities = require('edge').func({
        assemblyFile: 'BizagiWSDLL.dll',
        typeName: 'BizagiWSDLL.Startup',
        methodName: 'getEntities' 
    });

exports.consumeWorkFlowBizagi = function ( payload ) {
	var response;
	WorkFlowBizagi( payload , function( error , result ){
		result = JSON.parse( result );
		response = formatter.format( payload.methodName , result );
	});
	return response;
};
exports.consumeGetEntities = function( payload ){
    var response;
    GetEntities( payload , function(error ,result) {
        result = JSON.parse(result);
        response = formatter.format(payload.methodName,result)
        //console.log("gg",result.BizAgiWSResponse.Entities);
    });
    return response;
};
/*
{
    "methodName": "getActivities",
    "data": {
        "BizAgiWSParam": {
            "userName": "escalarAdmin"
        }
    }
}
*/
/*
{
    "methodName": "createCases",
    "data": {
        "BizAgiWSParam": {
        	"domain" : "domain",
            "userName": "escalarAdmin",
            "Cases" : {
				"Case" : {
					"Process" : "WS"
				}
            }
        }
    }
}
*/
/*
{
    "methodName": "performActivity",
    "data": {
        "BizAgiWSParam": {
        	"domain" : "domain",
            "userName": "escalarAdmin",
            "ActivityData" : {
				"idCase": "802",
				"taskName": "Task1"
            }
        }
    }
}
para idCase se puede omitir los "" o no
*/

/*
{
    "methodName": "performActivity",
    "data": {
        "BizAgiWSParam": {
            "EntityData" : {
                "EntityName" : "WS"
                "Filters" : {
    
                }
            }
        }
    }
}
*/

/*
{
    "methodName": "getEntities",
    "data": {
        "BizAgiWSParam": {
            "EntityData" : {
                "EntityName" : "Comun",
                "Filters" : "tipoProceso != '4'"
            }
        }
    }
}
*/