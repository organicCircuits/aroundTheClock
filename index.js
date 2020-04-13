import * as moment from 'moment';

//Title: threeSixty
//Description: This is a small program to calculate matching angles for
//cities between two codes. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the ability
//to coalucate matching angles between any timezones.catch
//Author: Ashley Robinson

//moment.js to return current time in HH:MM format
let eastCoastTime = moment.format('LT');
//assign number left of semicolon to hours, "" right to minutes
const eastCoastHour = eastCoastTime.trim(arr[0]);
const eastCoastMinute = eastCoastTime.trim(arr[1]);
//Pacific Standard Time is 3 hours behind EST:
let westCoastTime = eastCoastHour-3 +':'+eastCoastMinute;
console.log(westCoastTime);
const westCoastHour = westCoastTime.trim(arr[0]);
const westCoastMinute = westCoastTime.trim(arr[1]);

//assign hour angles in a clock to correspond to increments of 30^o
//in future, have degrees in a circle divided by hours
const clockHours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
const clockAngles = [];
//const clockMinutes = [0..60];
const angles = clockHours.map(hour => {
  let currAngle = 0;
  currAngle += 30;
  console.log(currAngle);
  clockAngles.push(currAngle);
});

console.log(clockAngles);  


































//ECHO is on.
