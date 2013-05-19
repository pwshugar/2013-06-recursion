// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  if (Array.isArray(obj)) return arrReturn(obj);
  else if (obj === null) return "null";
  else if (typeof obj === 'object') return objReturn(obj);
  else if (typeof obj === 'string') return '"' + obj + '"';
  else return "" + obj;
};

var arrReturn = function(arr) {
  var resArr = [];
  for (var i = 0; i < arr.length; i++) resArr.push(stringifyJSON(arr[i]));
  return "[" + resArr + "]";
};

var objReturn = function(obj) {
  var objArr = [];
  for (var k in obj) {
    if (typeof obj[k] === 'function') return "{}";
    objArr.push(stringifyJSON(k) + ":" + stringifyJSON(obj[k]));
  }
  return "{" + objArr + "}";
};