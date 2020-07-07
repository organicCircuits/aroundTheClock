const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

console.log("Hello Eoth.");

//moment to return current time in HH:MM format
//TODO create military/civilian time conversion
const utcTime = moment.utc("2020-07-06T01:36:30Z");
let utcHour = utcTime.format("HH");
const minutes = utcTime.format("mm");
console.log(utcTime);
console.log(utcHour);
console.log(minutes);

//TODO add other time zones
function utcConversion(utcHour, timezone) {
  switch (timezone) {
    case "EST":
      //east coast time is 4 hours behind utc
      //other timezones follow east to west
      let eastCoastHour = utcHour - 4;
      //moment will return 00, 01, etc times; checkIfNegative will return only
      //positive values for the conversion and assign it to the zone's hour
      let hour = checkIfNegative(eastCoastHour);
      console.log(hour);
      //construct the actual clock value
      const eastCoastTime = hour + ":" +  minutes;
      console.log(eastCoastTime);
      return eastCoastTime;
    case "CDT":
      const centralHour = utcHour - 5;
      let centralPositive = checkIfNegative(centralHour);
      console.log(centralPositive);
      const centralTime = centralPositive + ":" +  minutes;
      console.log(centralTime);
      return centralTime;
    case "MDT":
      const mountainHour = utcHour - 6;
      let mountainPositive = checkIfNegative(mountainHour);
      console.log(mountainPositive);
      const mountainTime = mountainPositive + ":" +  minutes;
      console.log(mountainTime);
      return mountainTime;
    case "PDT":
      const pacificHour = utcHour - 7;
      let pacificPositive = checkIfNegative(pacificHour);
      console.log(pacificPositive);
      const pacificTime = pacificPositive + ":" +  minutes;
      console.log(pacificTime);
      return pacificTime;
    default:
      const msg = "Eoth talich danya: No valid timezone entered.";
      console.log(msg);
      return msg;
  }
}

//TODO learn shortcut for refactoring, selecting whole word
//checks if the resulting conversion from utc resulted in a negative
//number. If so, it adds 12 to correspond to actual clock values
function checkIfNegative(hour) {
  if (hour <= 0) {
    console.log("The hour was negative:", hour);
    hour += 12;
    return hour;
  } else {
    console.log("The hour was positive:", hour);
    return hour;
  }
}

utcConversion(utcHour, "EST");

//assigns each hand an agle with 90 degrees being 12 o'clock and 0 at 3 o'clock
function assignClockDegrees() {
  let hourHandDegrees = [];
  let minuteHandDegrees = [];
  let hour = 0;
  let minute = 0;
  let hourDegree = 0;
  let minuteDegree = 0;

  function calculateHours() {
  do {
    hourHandDegrees.push([hour, hourDegree]);
    hourDegree += 30;
    hour++;
  } while (hourDegree <= 360);
}

  function calculateMinutes() {
  do {
    minuteHandDegrees.push([minute, minuteDegree]);
    minuteDegree += 6;
    minute++;
  } while (minuteDegree <= 360) ;
}
  calculateHours();
  calculateMinutes();
  console.log("The clock hours and their angle is:", hourHandDegrees);
  console.log("The clock minutes and their angle is:", minuteHandDegrees);
}

assignClockDegrees();

//compares angles of two timezones in a 24 hour period and pushes matching
//angles to an array that is returned to users
function compareClockAngles(hourHandOne, hourHandTwo, minuteHand) {

}

//function to determine the two timezones the angles should be compared to
function chooseTimezones(timezoneOne, timezoneTwo) {


}


// for (let hour =0; hour < 12; hourHand++) {
//   hourHand += 30;
// }
//TODO ++ time by minute to run through clock +24 hourAngles;
//this will require hour incrementing every time minutes reach 60

//calculates the angke between the hour and and the minute hand of specific
//timezones
//function calculateTheta(time) {
//
//   //each angle theta is calculated by subtracting the minuteHandValue
//   //in degrees from the hourHandValue. if this results in a negative
//   //value, 360 is added to bring positive and still maintain angle
//   let eastCoastAngle = Object.keys(hourClockAngles[eastCoastHour]);
//   let westCoastAngle = Object.keys(hourClockAngles[westCoastHour]);
//   //minute angle value not differentiated between timezones since they're the same
//   let minuteHandAngle = Object.keys(minuteClockAngles[eastCoastMinute]);
//
//   let thetaEast = eastCoastAngle - minuteHandAngle;
//   let thetaWest = westCoastAngle - minuteHandAngle;
//   console.log(thetaEast);
//   console.log(thetaWest);
//   if (thetaEast < 0) {
//     thetaEast += 360;
//   }else if (thetaWest < 0) {
//     thetaWest += 360;
//   }
//
//   //if a match is found, push to an array
//   let matchingAngleArray;
//   if (thetaEast == thetaWest) {
//     //TODO format timestamp for HH:MM
//     matchingAngleArray.push(time);
//   }
//   console.log(matchingAngleArray);
// }
//
// calculateTheta(2:24);

// //main function that calls calculateTheta() that compares angles
// //formed by the hour and minute hand
// (function getMatchingAngles() {
//   //24 hour window using moment to include matching am and pm values
//   const aroundTheClock = [moment().moment.endOf('day').fromNow()];
//   const matchingAngles = aroundTheClock.map(time =>{
//     return calculateTheta(time);
//   })();
//
// //assign clock angles to increment by 30 degrees for hours and 6 for minutes
// const clockHours = [...Array(12).keys()];
// const clockMinutes = [...Array(60).keys()];
// //key/value pairs for hoour/minute and its equivalent angle
// let hourAnglePair;
// let minuteAnglePair;
//
// let hourAngles = clockHours.map(hour => {
//   let currentAngle;
//   currentAngle += 30;
//   console.log(currentAngle);
//   hourAnglePair.push(...hour, ...currentAngle);
//   //check to see what the array contains
//   console.log(hourAngles);
// });
//
// let minuteAngles = clockMinutes.map(minute => {
//   let currentAngle;
//   currentAngle += 6;
//   console.log(currentAngle);
//   minuteAnglePair.push(...minute, ...currentAngle);
//   //check to see what the array contains
//   console.log(minuteAngles);
// });
