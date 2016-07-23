'use strict'
var text="<p>Lorem ipsum aliquam ut rhoncus quis mauris nibh, commodo curabitur proin pulvinar fringilla aliquet, duis gravida eros porttitor vitae facilisis.<\/p>\r<p>Elit morbi molestie turpis fringilla bibendum lorem nibh eu curae, lorem mauris auctor congue sociosqu magna netus iaculis, libero ultrices viverra pellentesque taciti suscipit potenti euismod malesuada neque ut aptent scelerisque velit consectetur massa.<\/p>\r<p>Ligula feugiat molestie aenean eu sociosqu taciti tristique inceptos sodales posuere, phasellus mollis ullamcorper pharetra tortor nibh class felis sed, adipiscing etiam ante duis cubilia et dui netus vulputate sed dictumst sociosqu pellentesque dui nulla commodo rutrum etiam.<\/p>\r";
var t1= text.split(/<\/?p>/);
var t2=t1.join("");
var t3=t2.trim();
const FETCH_REQUEST="FETCH_REQUEST";
const FETCH_SUCCESS="FETCH_SUCCESS";
const FETCH_FAILURE="FETCH_FAILURE";
const UPDATE_BOARD="UPDATE_BOARD";
const SET_WRONG_STATE="SET_WRONG_STATE";
const SET_RIGHT_STATE="SET_RIGHT_STATE";




export {
  t3,
  SET_RIGHT_STATE,
  SET_WRONG_STATE,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
}