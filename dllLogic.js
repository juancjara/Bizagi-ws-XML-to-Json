var WorkFlowBizagi = require('edge').func({
        assemblyFile: 'BizagiWSDLL.dll',
        typeName: 'BizagiWSDLL.Startup',
        methodName: 'ConsumeWorkFlow' 
	}),
	formatter = require('./formatter.js');

exports.consumeWorkFlowBizagi = function ( payload ) {
	var response;
	WorkFlowBizagi( payload , function( error , result ){
		result = JSON.parse( result );
		response = formatter.format( payload.methodName , result );
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