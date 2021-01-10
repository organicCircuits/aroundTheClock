const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

//moment to return current time in HH:MM format
const utcTime = moment.utc().format("HH:mm:ss"); //YYYY-MM-DD
//TODO add other time zones
//TODO create military/civilian time conversion
let utcConversion = timezone => {
  const utcHour = utcTime.substring(0, 2);
  const minutes = utcTime.substring(3, 5);
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
      let eastCoastPositive = checkIfNegative(eastCoastHour);
      console.log("The east coast hour is: ", eastCoastPositive);
      //construct the actual clock value
      const eastCoastTime = eastCoastPositive + ":" + minutes;
      console.log("The equivalent Atlantic coast time is: ", eastCoastTime);
      return eastCoastTime;
    case "CST":
    case "CDT":
      let centralHour = utcHour - 5;
      let mountainPositive = checkIfNegative(centralHour);
      console.log(hour);
      const centralTime = mountainPositive + ":" + minutes;
      console.log("The equivalent central time is: ", centralTime);
      return centralTime;
    case "MST":
    case "MDT":
      const mountainHour = utcHour - 6;
      let hour = checkIfNegative(mountainHour);
      console.log(hour);
      const mountainTime = mountainPositive + ":" + minutes;
      console.log("The equivalent mountain time is: ", mountainTime);
      return mountainTime;
    case "PST":
    case "PDT":
      const pacificHour = utcHour - 7;
      let pacificPositive = checkIfNegative(pacificHour);
      console.log("The pacific hour is: ", pacificPositive);
      const pacificTime = pacificPositive + ":" + minutes;
      console.log("The equivalent Pacific coast time is: ", pacificTime);
      //TODO return as time, not as specific timezone
      return pacificTime;
    default:
      const msg = "Eoth talich danya: A valid timezone was not entered.";
      console.log(msg);
      return msg;
  }
};

//checks if the resulting conversion from utc resulted in zero or a negative
//number. If so, it adds 12 or 13 to correspond to actual clock values
let checkIfNegative = hour => {
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
};

//assigns each hand an agle with 90 degrees being 12 o'clock and 0 at 3 o'clock
let assignClockDegrees = (hourOne, hourTwo, minuteHand) => {
  let hourHandDegrees = [];
  let minuteHandDegrees = [];

  //upgrade to foreach
  let calculateHours = () => {
    let hour = 0;
    let hourDegree = 0;

    do {
      console.log("the current hour is:", hour);
      hourHandDegrees.push([{ hour, hourDegree }]);
      hourDegree += 30;
      hour++;
    } while (hourDegree <= 360);
  };

  let calculateMinutes = () => {
    let minute = 0;
    let minuteDegree = 0;

    do {
      console.log("the current minute is:", minute);
      minuteHandDegrees.push([{ minute, minuteDegree }]);
      minuteDegree += 6;
      minute++;
    } while (minuteDegree <= 360);
  };
  calculateHours();
  calculateMinutes();
  console.log("The clock hours and their angle is:", hourHandDegrees);
  console.log("The clock minutes and their angle is:", minuteHandDegrees);

  //TODO compare time 12:15 AM EST (4:15 AM UTC) and 9:15 AM's angles
  //TODO remove hardcoded values
  //TODO return the second array value when the first matches hourHandOne, etc
  const hourOneDegree = 0; //TODO figure this out: hourHandDegrees.find((hourOne.value) => {});
  console.log("Hour One's degree angle is:", hourOneDegree);
  const hourTwoDegree = 0;
  console.log("Hour Two's degree angle is:", hourOneDegree);

  let findMinuteAngle = () => {
    minuteHandDegrees.forEach((minute, i) => {
      if (minute[i] === minuteHand) {
        let minuteAngle = minute.minuteDegree;
        // try {
        //   findMinuteAngle(minuteHand);
        // } catch (err){
        //   console.log("Something went wrong.");
        // }
        return minuteAngle;
      } else {
        console.log("No matching angle found.");
      }
    });
  };

  let findHourTwoAngle = hourTwo => {
    hourHandDegrees.forEach((hour, i) => {
      if (hour[i] === hourTwo) {
        let hourTwoAngle = hour.hourDegree;
        return hourTwoAngle;
      } else {
        console.log("No matching angle found.");
      }
    });
  };

  let findHourOneAngle = hourOne => {
    hourHandDegrees.forEach((hour, i) => {
      if (hour[i] === hourOne) {
        let hourOneAngle = hour.hourDegree;
        return hourOneAngle;
      } else {
        console.log("No matching angle found.");
      }
    });
  };
  findMinuteAngle();
  findHourOneAngle();
  findHourTwoAngle();
  // let findMinuteAngle = minuteHandDegrees.find((minute) => {
  //   //const minuteAngle = minuteHandDegrees.minuteDegree;
  //   const minuteAngle = minute.minuteDegree;
  //   console.log("The minute angle for that mintue is: ", minuteAngle);
  //   return minuteAngle;
  // });

  //findMinuteAngle();
  //console.log("hourOneDegree is:", hourOneDegree);
  //return minuteAngle; //hourOneAngle, hourTwoAngle,
};

//compares angles of two timezones in a 24 hour period and returns matching
//angles to an array
let caluclateTheta = (hourOne, hourTwo, minuteHand) => {
  let matchingAngleArray = [];
  assignClockDegrees(hourOne, hourTwo, minuteHand);
  //each angle theta is calculated by subtracting the minute's
  //angle in degrees from each hour's assigned degree. if this results in a
  //negative value, 360 is added to make positive and keep the same angle
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



  //if a match is found, push to an array
  if (thetaOne == thetaTwo) {
    matchingAngleArray.push(hourOne + ":" + minuteHand);
  } else {
    //TODO update console log to error message when aroundTheClock() is fxnal
    console.log("The angles do no match.");
  }

  console.log(matchingAngleArray);
  return matchingAngleArray;
};

//returns all matching angles between the two timezones for a 24 hour period
let aroundTheClock = (hourOne, hourTwo, minuteHand) => {
//this will require hour incrementing every time minutes reach 60
  //24 hour window using moment to include matching am and pm values
  //TODO determine if seconds would be helpful; run with both
  //hardcoded hours for now, may be updated to include other planetary hours
  const hoursInDay = 24;
  const minutesInHour = 60;
  const iterations = 1 + hoursInDay * minutesInHour;
  console.log("The number of iterations is: ", iterations);
  //TODO update to foreach
  //for every minute in a 24 hour period
  for (let i = 0; i < iterations; i++) {
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
};

//function to determine the two timezones the angles should be compared to
let driver = (timezoneOne, timezoneTwo) => {
  let timeOne = utcConversion(timezoneOne);
  let timeTwo = utcConversion(timezoneTwo);
  console.log("Coverted timezone one: ", timeOne);
  console.log("Coverted timezone two: ", timeTwo);

  let hourOne = timeOne.substring(0, 2);
  let hourTwo = timeTwo.substring(0, 2);
  //no need for both timeOne and timeTwo's minutes since the same
  let minuteHand = timeOne.substring(3, 5);
  console.log("Hour substing one:", hourOne);
  console.log("Hour substing two:", hourTwo);
  console.log("Minute substring:", minuteHand);

  return aroundTheClock(hourOne, hourTwo, minuteHand);
};

driver("EST", "PST");

// const matchingAngles = twentyFour.map(time => {
//   return caluclateTheta(hourHandOne, hourHandTwo, minuteHand);
// });
