// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  var returnArr = [];
  
  var iterate = function(node) {
    if (node.classList){
      if (node.classList.contains(className)) returnArr.push(node);
    }
      if (node.hasChildNodes) {
        node = node.firstChild;
        while (node) {
          iterate(node);
          node = node.nextSibling;
  	    }
      }
    };

  iterate(document.body);
  return returnArr;
};