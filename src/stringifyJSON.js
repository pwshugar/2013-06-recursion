// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var arr = [];
  for (var i = 0; i < obj.length; i++){
  	if (typeof obj[i] === 'string') arr.push('"' + obj[i] + '"');	
  	else if (Array.isArray(obj[i])) arr.push("[" + obj[i] + "]");
  	else if (Object.prototype.toString.call(obj[i])) {
      var keys = [];
      var objArr = [];
      for (var k in obj[i]) keys.push(k);
      for (var j = 0; j < keys.length; j++) {
      	objArr.push(keys(j) + ": " + keys.j);
      }
      arr.push("{" + objArr + "}");
    }
	else arr.push("" + obj[i] + "");
  }
  return "[" + arr + "]";
};
