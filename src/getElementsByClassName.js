// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var returnArr = [];
  iterate(document.body);
  
  var iterate = function(node) {
    if (node.classList.contains(className)) returnArr.push(node);
      if (node.childNodes.length > 0) {
  	    for (var i = 0; i < node.childNodes.length; i++) {
  	      iterate(node.childNodes[i]);
  	    }
      }
    };

  return returnArr;
};
