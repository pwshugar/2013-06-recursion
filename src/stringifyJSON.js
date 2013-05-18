// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:


var arrObject = function(arr) {
  var resArr = [];
  for (var i = 0; i < arr.length; i++) {
    resArr.push(test(arr[i]));
  }
  return "[" + resArr + "]";
};

var objObject = function(obj) {
  var keys = [];
  var objArr = [];
  var key;
  var value;
  for (var k in obj) keys.push(k);
  for (var i = 0; i < keys.length; i++) {
    key = test(key[i]);
    value = test(obj[key[i]]);
    objArr.push(key + ": " + value);
  }
  return ("{" + objArr + "}");
};

var notObject = function(elem) {
  if (typeof elem === 'string') return ('"' + elem + '"');
  else return String(elem);
};

var test = function(elem) {
  if (Array.isArray(elem)) return arrObject(elem);
  else if (Object.prototype.toString.call(elem) === '[object Object]') {
    return objObject(elem);
  }
  else return notObject(elem);
};
var stringifyJSON = function (obj) {
  var objCheck = Object.prototype.toString.call(obj);
  var finArr = [];
  for (var i = 0; i < obj.length; i++){
    finArr.push(test(obj[i]));
  }
  return "[" + finArr + "]";
};