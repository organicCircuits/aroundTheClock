const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

//moment to return current time in HH:MM format
const utcTime = moment.utc().format("HH:mm:ss");//YYYY-MM-DD
//TODO add other time zones
//TODO create military/civilian time conversion
let utcConversion = (timezone) => {

  const utcHour = utcTime.substring(0,2);
  const minutes = utcTime.substring(3,5);
  //TODO add seconds for all possible matching angles
  console.log("Current UTC time is: ", utcTime);
  //console.log("Current UTC stringified time is: ", utcTimeString);
  console.log("Current UTC hour is: ", utcHour);
  console.log("The current minutes are: ", minutes);

  switch (timezone) {
    case "EST":
    case "EDT":
      //east coast time is 4 hours behind utc
      //other timezones follow east to west
      let eastCoastHour = utcHour - 4;
      //moment will return 00, 01, etc times; checkIfNegative will return only
      //positive values for the conversion and assign it to the zone's hour
      let hour = checkIfNegative(eastCoastHour);
      console.log("The east coast hour is: ", hour);
      //construct the actual clock value
      const eastCoastTime = hour + ":" +  minutes;
      console.log("The equivalent east coast time is: ", eastCoastTime);
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

//checks if the resulting conversion from utc resulted in zero or a negative
//number. If so, it adds 12 or 13 to correspond to actual clock values
let checkIfNegative = (hour) => {

  if (hour == 0) {
    console.log("The normalized hour was zero:", hour);
    hour += 12;
  }
  if (hour < 0) {
    console.log("The normalized hour was zero or negative:", hour);
    hour += 11; //to account for adding over 0
    return hour;
  } else {
    console.log("The hour was positive:", hour);
    return hour;
  }
}

//assigns each hand an agle with 90 degrees being 12 o'clock and 0 at 3 o'clock
let assignClockDegrees = () => {
  let hourHandDegrees = [];
  let minuteHandDegrees = [];
  let hour = 0;
  let minute = 0;
  let hourDegree = 0;
  let minuteDegree = 0;

  let calculateHours = () => {
  do {
    hourHandDegrees.push([hour, hourDegree]);
    hourDegree += 30;
    hour++;
  } while (hourDegree <= 360);
}

  let calculateMinutes = () => {
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
let caluclateTheta = (hourOne, hourTwo, minuteHand) => {

  //TODO check if assignClockDegrees and functions following need to be
  //promises; if so, update accordingly. also see if this is best placement
  assignClockDegrees();
  //TODO compare time 12:15 AM EST (4:15 AM UTC) and 9:15 AM's angles
  //TODO remove hardcoded values
  //TODO return the second array value when the first matches hourHandOne, etc
  const hourOneDegree = 0;//TODO figure this out: hourHandDegrees.find((hourOne.value) => {});
  console.log("Hour One's degree angle is:", hourOneDegree);
  const hourTwoDegree = 0;
  console.log("Hour Two's degree angle is:", hourOneDegree);
  const minuteDegree = 90;
  console.log("hourOneDegree is:", hourOneDegree);

  //each angle theta is calculated by subtracting the minuteDegree
  //in degrees from each hour's assigned degree. if this results in a negative
  //value, 360 is added to bring positive and still maintain the angle
  let thetaOne = minuteDegree - hourOneDegree;
  console.log(thetaOne);
  let thetaTwo = minuteDegree - hourTwoDegree;
 console.log(thetaTwo);

    if (thetaOne < 0) {
      thetaOne += 360;
    }
    if (thetaTwo < 0) {
      thetaTwo += 360;
    }

  console.log("Angle one's value is:", thetaOne);
  console.log("Angle two's value is:", thetaTwo);

  let matchingAngleArray = [];

  //if a match is found, push to an array
  if (thetaOne == thetaTwo) {
    matchingAngleArray.push(hourOne + ":" + minuteHand);
  }else{
    //TODO update console log to error message when aroundTheClock() is fxnal
    console.log("The angles do no match.");
  }

  console.log(matchingAngleArray);
  return matchingAngleArray;
}

//returns all matching angles between the two timezones for a 24 hour period
let aroundTheClock = (hourOne, hourTwo, minuteHand) => {

  //TODO ++ time by minute to run through clock +24 hourAngles;
  //this will require hour incrementing every time minutes reach 60

  //24 hour window using moment to include matching am and pm values
  //TODO determine if seconds would be helpful; run with both
    //const utcTime = moment.utc("2020-07-06T04:15:30Z");
    //const utcEpoch = moment.utc("2020-07-06T04:15:30Z").unix();
    //const twentyFour = utcTime.add(24, 'hour');
    //const twentyFourEpoch = utcTime.add(24, 'hour').unix();
    // console.log(utcTime);
    // console.log(utcEpoch);
    // console.log(twentyFour);
    // console.log(twentyFourEpoch);
    //hardcoded hours for now, may be updated to include other planetary hours
    const hoursInDay = 24;
    const minutesInHour = 60;
    const iterations = 1 + hoursInDay * minutesInHour;
    console.log("The number of iterations is: ", iterations);
    //TODO update to foreach
    //for every minute in a 24 hour period
    for (let i=0; i < iterations ; i++) {
      caluclateTheta(hourOne, hourTwo, minuteHand);
      minuteHand++;
      if (minuteHand == 60) {
        hourOne++;
        hourTwo++;
        if (hourOne > 12) {
          hourOne -= 12;
          //checkIfNegative(hourOne);
        }

        if (hourOne > 12) {
          hourOne -= 12;
          //checkIfNegative(hourOne);
        }
        minuteHand++;
        if (minuteHand > 60) {
          hourOne -= 60;
          //checkIfNegative(hourOne);
        }
      }
      let hourCounter = 0;
      hourCounter++;
      if (hourCounter >= 24) {
        break;
      }
    }
}

//function to determine the two timezones the angles should be compared to
let driver = (timezoneOne, timezoneTwo) => {

  let timeOne = utcConversion(timezoneOne);
  let timeTwo =  utcConversion(timezoneTwo);
  console.log("Coverted timezone one: ", timeOne);
  console.log("Coverted timezone two: ", timeTwo);

  let hourOne = timeOne.substring(0,1);
  let hourTwo = timeTwo.substring(0,1);
  //no need for both timeOne and timeTwo's minutes since the same
  let minuteHand = timeOne.substring(2,4);
  console.log("Hour substing one:", hourOne);
  console.log("Hour substing two:", hourTwo);
  console.log("Minute substring:", minuteHand);

  return aroundTheClock(hourOne, hourTwo, minuteHand);
}

driver("EST", "PST");

// const matchingAngles = twentyFour.map(time => {
//   return caluclateTheta(hourHandOne, hourHandTwo, minuteHand);
// });
