#!/usr/bin/env node
var csv = require('to-csv');
var map = require('./DataLayer-Map.js');

var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) { continue; }
		
		if ((typeof ob[i]) == 'object' && ob[i] !== null) {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) { continue; }
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

var appendTypeOfValueToKey = function(o) { 
  for (i in o) { 
    o[i + '<' + (typeof o[i]) + '>'] = o[i];
    delete o[i];
  }
  return o;
};

console.log(csv(appendTypeOfValueToKey(flattenObject(map.Bootstrapper.dataObject))));