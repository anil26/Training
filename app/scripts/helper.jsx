'use strict'


var numberToMonthMapping={
  1 : "January",
  2 : "February",
  3 : "March",
  4 : "April",
  5 : "May",
  6 : "June",
  7 : "July",
  8 : "August",
  9 : "September",
  10 : "October",
  11 : "November",
  12 : "December"
};

function dateValidator(date){
  return (typeof(date)==='number' && date < 32 && date > 0);
}
function monthValidator(month){
  return(typeof(month)==='number'  && month < 13 && month > 0);
}
function yearValidator(year){
    return (typeof(year)==='number');
}


export {
  dateValidator,
  monthValidator,
  yearValidator,
  numberToMonthMapping
}
