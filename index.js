import * as moment from 'moment';

//Title: threeSixty
//Description: This is a small program to calculate matching angles for
//cities between two codes. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the ability
//to calculate matching angles between any two timezones.
//Author: Ashley Robinson

  //moment.js to return current time in HH:MM format
  let eastCoastTime = moment.format('LT');
  console.log(eastCoastTime);
  //assign number left of semicolon to hours, "" right to minutes
  const eastCoastHour = eastCoastTime.trim(arr[0]);
  const eastCoastMinute = eastCoastTime.trim(arr[1]);
  //Pacific Standard Time is 3 hours behind Eastern:
  let westCoastHour = eastCoastHour-3 +':'+eastCoastMinute;
  console.log(westCoastTime);
  //no need to calculate west coast minutes since they're the same
  const westCoastMinute = westCoastTime.trim(arr[1]);

  //each angle theta is calculated by subtracting the minuteHandValue
  //in degrees from the hourHandValue. if this results in a negative
  //value, 360 is added to the value.
  let eastCoastAngle = Object.keys(hourClockAngles[eastCoastHour]);
  let westCoastAngle = Object.keys(hourClockAngles[westCoastHour]);
  //not differentiated between timezones since it is the same (lol)
  let minuteHandAngle = Object.keys(minuteClockAngles[eastCoastMinute]);
  console.log(hourHandValue);

  let thetaEast = eastCoastAngle - minuteHandAngle;
  let thetaWest = westCoastAngle - minuteHandAngle;
  console.log(thetaEast);
  console.log(thetaWest);
  //clunky but it works, can improve possibly by making an array of
  //timezones especially if calculating all UTC values
  if (thetaEast < 0) {
    thetaEast += 360;
    matchingAngleArray.push(time);
  }else if (thetaWest < 0) {
    thetaWest += 360;
    matchingAngleArray.push(time);
  }
  return matchingAngleArray;
}

(function getMatchingAngles() => {

  const matchingAngleArray = [];
  //for all times in a 24 hour window using moment
  const aroundTheClock = [moment()..moment.endOf('day').fromNow();
  const matchingAngles = aroundTheClock.map(time =>{
    calculateTheta();
    //TODO make sure theta values are able to be read
    if (thetaEast == thetaWest) {
      //TODO format timestamp for HH:MM
      matchingAngleArray.push(time);
    }
    return matchingAngleArray;
})();

//assign hour angles in a clock to correspond to increments of 30^o
//in future, have degrees in a circle divided by hours
const clockHours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
const hourClockAngles = [];
const minuteClockAngles = [];
//TODO read span operator with ..60 or varargs (preferable)
const clockMinutes = [0,20,40,60];
//this can be improved by adding an if-else statement
//that added 30^o if it was an hour hand, and 6^o if
//a minute hand and pushed to the appropriate array
const hourAngles = clockHours.map(hour => {
  //TODO test this outside of both aarrays
  let currAngle;
  let hourAngleJSON;
  currAngle += 30;
  console.log(currAngle);
  hourAngleJSO = {"hour" : "currAngle"};
  hourClockAngles.push({hourAngleJSO);
  console.log(hourClockAngles);
  return hourClockAngles;
});

const minuteAngles = clockMinutes.map(minute => {
  let currAngle;
  currAngle += 6;
  console.log(currAngle);
  minuteAngleJSO = {"minute" : "currAngle"};
  minuteClockAngles.push(minuteAngleJSO);
  console.log(minuteClockAngles);
  return minuteClockAngles;
});

































//ECHO is on.
