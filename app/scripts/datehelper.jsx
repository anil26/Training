'use strict'
const date=new Date();
const currentMonth=date.getMonth();
const currentYear=date.getFullYear();
const currentDate=date.getDate();

export {
  currentDate,
  currentYear,
  currentMonth
}