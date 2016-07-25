'use strict';
const parseInput=(text)=>{
  var t1= text.split(/<\/?p>/);
  var t4="";
  t1.forEach(function(current,index,array){
    if(current[current.length-1]=='.'){
      t4+=current+ " ";
    }
    else{
      t4+=current;
    }
  });
  var t3=t4.trim();
  return t3;
}
const checkToRemove = (originalWord,typedtext) => {
  if(typedtext[typedtext.length-1] == " "){
    var t = typedtext.split("");
    t.pop();
    var t1 = t.join("");
    return checkValidity(originalWord,t1);
  }
}

const checkValidity = (originalWord,typedtext) => {
  var length = typedtext.length;
  var originalWord = originalWord.replace(/[\n\r]+/g, '');
  var subString = originalWord.substr(0,length);
  return (subString==typedtext);
}

export {
  parseInput,
  checkToRemove,
  checkValidity
}