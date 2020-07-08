const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

console.log("Hello Eoth.");

//TODO add other time zones
function utcConversion(timezone) {

  //moment to return current time in HH:MM format
  //TODO create military/civilian time conversion
  const utcTime = moment.utc("2020-07-06T01:36:30Z");
  let utcHour = utcTime.format("HH");
  const minutes = utcTime.format("mm");
  console.log(utcTime);
  console.log(utcHour);
  console.log(minutes);

  switch (timezone) {
    case "EST":
    case "EDT":
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
    case "CST":
    case "CDT":
      const centralHour = utcHour - 5;
      let centralPositive = checkIfNegative(centralHour);
      console.log(centralPositive);
      const centralTime = centralPositive + ":" +  minutes;
      console.log(centralTime);
      return centralTime;
    case "MST":
    case "MDT":
      const mountainHour = utcHour - 6;
      let mountainPositive = checkIfNegative(mountainHour);
      console.log(mountainPositive);
      const mountainTime = mountainPositive + ":" +  minutes;
      console.log(mountainTime);
      return mountainTime;
    case "PST":
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

  return hourHandDegrees, minuteHandDegrees;
}

//compares angles of two timezones in a 24 hour period and pushes matching
//angles to an array that is returned to users
function caluclateTheta(hourHandOne, hourHandTwo, minuteHand) {

  //TODO check if assignClockDegrees and functions following need to be
  //promises; if so, update accordingly
  assignClockDegrees();
  //TODO compare time 12:15 AM EST (4:15 AM UTC) and 9:15 AM's angles
  //TODO remove hardcoded values
  //TODO return the second array value when the first matches hourHandOne, etc
  const hourOneDegree = 0;
  const hourTwoDegree = 240;
  const minuteDegree = 90;

  //each angle theta is calculated by subtracting the minuteDegree
  //in degrees from each hour's assigned degree. if this results in a negative
  //value, 360 is added to bring positive and still maintain the angle
  let thetaOne = minuteDegree - hourOneDegree;
  let thetaTwo = minuteDegree - hourTwoDegree;
  console.log("Angle one's value is:", thetaOne);
  console.log("Angle two's value is:", thetaTwo);

    if (thetaOne < 0) {
      thetaOne+= 360;
    }
    if (thetaTwo < 0) {
      thetaTwo += 360;
    }

  //   //if a match is found, push to an array
  //   let matchingAngleArray;
  //   if (thetaEast == thetaWest) {
  //     //TODO format timestamp for HH:MM
  //     matchingAngleArray.push(time);
  //   }
  //   console.log(matchingAngleArray);
  // }

  aroundTheClock();
}

//returns all matching angles between the two timezones for a 24 hour period
function aroundTheClock() {

  console.log("Initial function aroundTheClock reached.");
}

//function to determine the two timezones the angles should be compared to
function driver(timezoneOne, timezoneTwo) {

  let timeOne = utcConversion(timezoneOne);
  let timeTwo =  utcConversion(timezoneTwo);
  console.log("Coverted timezone one", timeOne);
  console.log("Coverted timezone two", timeTwo);

  let hourOne = timeOne.substring(0,1);
  let hourTwo = timeOne.substring(0,1);
  //no need for both timeOne and timeTwo's minutes since the same
  let minuteHand = timeOne.substring(2);
  console.log("Hour substing one", hourOne);
  console.log("Hour substing two", hourTwo);
  console.log("Minute substring", minuteHand);

  caluclateTheta(hourOne, hourTwo, minuteHand);

}

driver("EST", "PDT");

//TODO ++ time by minute to run through clock +24 hourAngles;
//this will require hour incrementing every time minutes reach 60

//calculates the angke between the hour and and the minute hand for each tz

//
// calculateTheta(2:24);

// //main function that calls calculateTheta() that compares angles
// //formed by the hour and minute hand
// function getMatchingAngles() {
//   //24 hour window using moment to include matching am and pm values
//   const twentyFour = [moment().moment.endOf('day').fromNow()];
//   const matchingAngles = aroundTheClock.map(time =>{
//     return calculateTheta(time);
//   }
//
