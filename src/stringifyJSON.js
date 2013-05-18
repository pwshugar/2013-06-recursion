// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var objCheck = Object.prototype.toString.call(obj);
  var arr = [];
  for (var i = 0; i < obj.length; i++){
  	if (typeof obj[i] === 'string') arr.push('"' + obj[i] + '"');	
  	else if (Array.isArray(obj[i])) arr.push("[" + obj[i] + "]");
  	else if (Object.prototype.toString.call(obj[i])) {
      
	else arr.push("" + obj[i]);
  }
  return "[" + arr + "]";
};


var test = function(elem) {
  if (Array.isArray(elem)) return arrObject(elem);
  else if (Object.prototype.toString.call(obj[i]) === '[object Object]') {
    return ObjObject(elem);
  }
  else return notObject(elem);
};

var notObject = function(elem) {
  if (typeof elem === 'string') return ('"' + elem + '"');
  else return String(elem);
};

var arrObject = function(arr) {
  
};

var objObject = function(obj) {
  var keys = [];
  var objArr = [];
  for (var k in obj) keys.push(k);
  for (var j = 0; j < keys.length; j++) {
    objArr.push(keys(j) + ": " + keys.j);
  }
  return ("{" + objArr + "}");
};