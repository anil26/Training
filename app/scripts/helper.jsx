'use strict';
const parseInput=(text)=>{
  var t1= text.split(/<\/?p>/);
  t2=t1.join("");
  t3=t2.trim();
  return t3;
}

export {
  parseInput
}