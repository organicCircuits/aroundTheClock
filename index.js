const moment = require('moment');

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

  async function calculateTheta(time) {
  //moment.js to return current time in HH:MM format
  let eastCoastTime = moment.format('LT');
  console.log(eastCoastTime);
  //assign number left of semicolon to hours, right of semicolon to minutes
  const eastCoastHour = eastCoastTime.trim(arr[0]);
  const eastCoastMinute = eastCoastTime.trim(arr[1]);
  //Pacific Standard Time is 3 hours behind Eastern:
  let westCoastHour = eastCoastHour-3;
  console.log(westCoastTime);
  //no need to calculate west coast minutes since they're the same
  const westCoastMinute = eastCoastMinute;

  //each angle theta is calculated by subtracting the minuteHandValue
  //in degrees from the hourHandValue. if this results in a negative
  //value, 360 is added to bring positive and still maintain angle
  let eastCoastAngle = Object.keys(hourClockAngles[eastCoastHour]);
  let westCoastAngle = Object.keys(hourClockAngles[westCoastHour]);
  //minute angle value not differentiated between timezones since they're the same
  let minuteHandAngle = Object.keys(minuteClockAngles[eastCoastMinute]);

  let thetaEast = eastCoastAngle - minuteHandAngle;
  let thetaWest = westCoastAngle - minuteHandAngle;
  console.log(thetaEast);
  console.log(thetaWest);
  if (thetaEast < 0) {
    thetaEast += 360;
  }else if (thetaWest < 0) {
    thetaWest += 360;
  }

  //if a match is found, push to an array
  let matchingAngleArray;
  if (thetaEast == thetaWest) {
    //TODO format timestamp for HH:MM
    matchingAngleArray.push(time);
  }
  console.log(matchingAngleArray);
}

//main function that calls calculateTheta() that compares angles
//formed by the hour and minute hand
(function getMatchingAngles() {
  //24 hour window using moment to include matching am and pm values
  const aroundTheClock = [moment().moment.endOf('day').fromNow()];
  const matchingAngles = aroundTheClock.map(time =>{
    return calculateTheta(time);
  })();

//assign clock angles to increment by 30 degrees for hours and 6 for minutes
const clockHours = [...Array(12).keys()];
const clockMinutes = [...Array(60).keys()];
//key/value pairs for hoour/minute and its equivalent angle
let hourAnglePair;
let minuteAnglePair;

let hourAngles = clockHours.map(hour => {
  let currentAngle;
  currentAngle += 30;
  console.log(currentAngle);
  hourAnglePair.push(...hour, ...currentAngle);
  //check to see what the array contains
  console.log(hourAngles);
});

let minuteAngles = clockMinutes.map(minute => {
  let currentAngle;
  currentAngle += 6;
  console.log(currentAngle);
  minuteAnglePair.push(...minute, ...currentAngle);
  //check to see what the array contains
  console.log(minuteAngles);
});
