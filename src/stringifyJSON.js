// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  if (Array.isArray(obj)) return arrReturn(obj);
  else if (obj === null) return "null";
  else if (typeof obj === 'object') return objReturn(obj);
  else if (typeof obj === 'number') return "" + obj;
  else if (typeof obj === 'boolean') return "" + obj;
  else if (typeof obj === 'string') return '"' + obj + '"';
  else if (typeof obj === 'undefined') return "";
};

var arrReturn = function(arr) {
  var resArr = [];
  for (var i = 0; i < arr.length; i++) {
    resArr.push(stringifyJSON(arr[i]));
  }
  return "[" + resArr + "]";
};

var objReturn = function(obj) {
  var keys = [];
  var objArr = [];
  var key;
  var value;
  for (var k in obj) keys.push(k);
  for (var i = 0; i < keys.length; i++) {
    key = stringifyJSON(key[i]);
    value = stringifyJSON(obj[key[i]]);
    objArr.push(key + ": " + value);
  }
  return ("{" + objArr + "}");
};
