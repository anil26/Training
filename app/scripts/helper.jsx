'use strict';
const parseInput=(text)=>{
  var t1= text.split(/<\/?p>/);
  var t2=t1.join("");
  var t3=t2.trim();
  return t3;
}
const checkToRemove=(originalWord,typedtext)=>{
  if(typedtext[typedtext.length-1]==" "){
    var t=typedtext.split("");
    t.pop();
    var t1=t.join("");
    return checkValidity(originalWord,t1);
  }
}

const checkValidity=(originalWord,typedtext)=>{
  var subString=originalWord.substr(0,typedtext.length);
  return (subString==typedtext);
}

export {
  parseInput,
  checkToRemove,
  checkValidity
}