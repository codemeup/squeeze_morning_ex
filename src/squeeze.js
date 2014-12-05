
//first rev
// var squeeze = function(string){
//   var strArr = str.split(''); //splitting string into array
//   var strArrlen = strArr.length;
//   for (i=0, i<strArrlen, i++) {
//     if(strArr[i] === strArr[i+1]) {
//       strArr.splice(i,1); //splicing out the duplicate
//       strArrLen=str.length;
//     };
//     }
//     return strArr.join(''); //returning array as a string
//   };


// another version
function squeeze(str){
  var word = str.split("");
  var deleted;
  do {
    deleted = false;
    for (var i=0; i<word.length; i++){
      if( word[i] === word[i+1] ){
        word.splice(i,1);
        deleted = true;
      }
    }
  } while (deleted);
  return (word.join(""));
}


