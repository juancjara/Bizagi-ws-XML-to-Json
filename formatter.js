var formatters = {};

/*
{
	"methodName": "getActivities",
    "data": {
        "BizAgiWSParam": {
            "userName": "escalarAdmin"
        }
    },
    "requiredInfo": [
		{"name":"processId","path":"process.processId","default":0}
    ]
}
*/
formatters['getActivities'] = function ( data , requiredInfo ){
	var workItems = data.workItems.workItem || new Array(),
		response = { "workItem" : new Array() };
	console.log("requiredInfo",requiredInfo);

	for (var i = 0; i < workItems.length; i++) {
		var item = workItems[i],
			newItem = {
			"errorCode"		: item.process.processError.errorCode || 0,
			"errorMessage"	: item.process.processError.errorMessage || ""
			};
		for ( var j = 0 ; j < requiredInfo.length ; j++ ){
			var info = requiredInfo[j];
			newItem[ info.name ] = info.default;
		}
		if ( newItem.errorMessage.length == 0 ){
			for ( var k = 0 ; k < requiredInfo.length ; k++ ){
				//console.log("no error",item);
				var info = requiredInfo[k];
				var arr = info.path.split(".");
				//console.log("array",arr);
				var gg = item;
				for ( var m = 0 ; m < arr.length ; m++ ){
					
					gg = gg[ arr[m] ];
				}
				newItem[ info.name ] = gg;
			};
		}
		/*if ( newItem.errorMessage.length == 0 ){
			console.log
			newItem['taskId'] =item.task.taskId;
			/*newItem['taskName'] = item.task.taskName;
			newItem['processId']	= item.process.processId;
			newItem['processName'] = item.process.processWorkflowClass.workflowClassName;
		};*/
		response.workItem.push(newItem);
	};
	return response;
};
/*
formatters['getActivities'] = function ( data ){
	var workItems = data.workItems.workItem || new Array(),
		response = { "workItem" : new Array() };
	
	for (var i = 0; i < workItems.length; i++) {
		var item = workItems[i],
			newItem = {
			"taskId"		: 0,
			"taskName"		: "",
			"processId"		: 0,
			"processName"	: "",
			"errorCode"		: item.process.processError.errorCode || 0,
			"errorMessage"	: item.process.processError.errorMessage || ""
		};
		if ( newItem.errorMessage.length == 0 ){
			console.log
			newItem['taskId'] =item.task.taskId;
			newItem['taskName'] = item.task.taskName;
			newItem['processId']	= item.process.processId;
			newItem['processName'] = item.process.processWorkflowClass.workflowClassName;
		};
		response.workItem.push(newItem);
	};
	return response;
};
*/

formatters['createCases'] = function ( data ){
	var process = data.processes.process,
		response = {
			"taskId"		: 0,
			"taskName"		: "", 
			"processId"		: 0,
			"processName"	: "",
			"errorCode"		: process.processError.errorCode || 0,
			"errorMessage"	: process.processError.errorMessage || ""
		};
	if ( response.errorMessage.length == 0 ){
		response['taskId'] = process.CurrentWorkItems.workItem.task.taskId;
		response['taskName'] = process.CurrentWorkItems.workItem.task.taskName;
		response['processId'] = process.processId;
		response['processName'] = process.processWorkflowClass.workflowClassName;
	}
	return response;
};

formatters['performActivity'] = function ( data ){
	var item = data.process,
		response = {
			"processId"		: 0,
			"processName"	: "",
			"taskId"		: 0,
			"taskName"		: "",
			"end"			: 1,
			"errorCode"		: item.processError.errorCode || 0,
			"errorMessage"	: item.processError.errorMessage || ""
		};

	if ( response.errorMessage.length == 0 ){
		response['processId'] = item.processId;
		response['processName'] = item.processWorkflowClass.workflowClassName;

		//when activity finish there isn't a task node
		if ( item.CurrentWorkItems.workItem ){
			response['taskId'] = item.CurrentWorkItems.workItem.task.taskId;
			response['taskName'] = item.CurrentWorkItems.workItem.task.taskName; 
			response['end'] = 0;
		}
	}

	return response;
};

formatters['getEntities'] = function( data ){
	var entities = data.BizAgiWSResponse.Entities;
	return entities;
};

exports.format = function( methodName , data , requiredInfo ){
	return formatters[ methodName ](data , requiredInfo);
};