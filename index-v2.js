const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

//moment to return current time in HH:mm:ss format
const utcTime = moment.utc().format("HH:mm:ss");
//TODO add other time zones
//TODO create military/civilian time conversion
let utcConversion = timezone => {
  const utcHour = utcTime.substring(0, 2);
  const minutes = utcTime.substring(3, 5);
  //TODO add seconds for all possible matching angles
  console.log("Current UTC time is: ", utcTime);
  console.log("Current UTC hour is: ", utcHour);
  console.log("The current minutes are: ", minutes);

  switch (timezone) {
    case "EST":
    case "EDT":
      //east coast time is 5 hours behind utc
      //other timezones follow east to west
      let eastCoastHour = utcHour - 4;
      //checkIfNegative returns only positive values for the conversion
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
//number. If so, it adds 11 or 12 to correspond to actual clock values
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
let assignClockDegrees = () => {

  //console.log("The type of hour1 is: ", typeOf(hour1));
  //let hour2 = Number(hourTwo);
  //console.log("The type of hour1 is: ", typeOf(hour2));
  //console.log("The type of minute is: ", typeOf(minute));
  let hourHandDegrees = [];
  let minuteHandDegrees = [];
  let minute = 0;
  let hr = 0;
  let hourDegree = 0;
  let minuteDegree = 0;
  console.log("The hour degree is currently: ", hourDegree);
  console.log("The minute degree is currently: ", minuteDegree);

  let calculateHours = (hr, hourDegree) => {

    while (hourDegree <= 360) {
      console.log("the current hour is:", hr);
      hourHandDegrees.push([{ hr, hourDegree }]);
      hourDegree = hourDegree + 30;
      hr++;
    }
  };

  let calculateMinutes = (minute, minuteDegree) => {
    while (minuteDegree <= 360) {
      console.log("the current minute is:", minute);
      minuteHandDegrees.push([{ minute, minuteDegree}]);
      minuteDegree += 6;
      minute++;
    }
  };

  calculateHours(hr, hourDegree);
  calculateMinutes(minute, hourDegree);

  console.log("The clock hours and their angle are:", hourHandDegrees);
  console.log("The clock minutes and their angle are:", minuteHandDegrees);

  return minuteHandDegrees, hourHandDegrees;
  //generic hour for counter
  //let hour = 0;
  // let adjustTime = () => {
  //
  //   if (minute == 60) {
  //   hour1++;
  //   //hour2++;
  //   minute = 0;
  //   }
  //
  //   if (hour1 > 12) {
  //     hour1 -= 12;
  //     checkIfNegative(hourOne);
  //   }
  //
  //   // if (hour2 > 12) {
  //   //   hour2 -= 12;
  //   //   checkIfNegative(hourTwo);
  //   // }
  //
  //   minute++;
  //   if (minuteHand > 60 || minute > 60) {
  //     minuteHand -= 60;
  //     minute -= 60;
  //     //TODO make this work for mintues as well
  //     //checkIfNegative(hourOne);
  //   }
  //
  // }
  }

  //each angle theta is calculated by subtracting the minute's
  //angle in degrees from each hour's assigned degree. if this results in a
  //negative value, 360 is added to make positive and keep the same angle
  let caluclateTheta = (hour, minuteHand) => {

    //  let findAllAngles = () => {
    //}
    let assignClkDgrs = assignClockDegrees();
    let minuteDegrees = assignClkDgrs.minuteHandDegrees;
    let hourDegrees = assignClkDgrs.hourHandDegrees;
    let typeOf = (type) => console.log(typeof (type));
    console.log(typeOf(minuteDegrees));
    console.log(typeOf(hourDegrees));

    let findMinuteAngle = (minuteDegrees, minuteHand) => {
        //try {
        minuteDegrees.forEach((minute, i) => {
          if (minute[i] == minuteHand) {
            let minuteAngle = minute.minuteDegree;
            return minuteAngle;
          } else {
            console.log("No matching angle found for minutes.");
          }
      // } catch (err){
      //   console.log("Something went wrong.");
      // }
      });
    };

    let findHourAngle = (hourDegrees, hour) => {
        hourDegrees.forEach((hr, i) => {
          if (hr[i] === hour) {
            let hourAngle = hr.hourDegrees;
            return hourAngle;
          } else {
            console.log("No matching angle found for hour two.");
        }
      });

      //execute or return something here
    };

    let miniuteTheta = findMinuteAngle(minuteDegrees, minuteHand);
    let hourOneTheta = findHourAngle(hourDegrees, hour);
    let hourTwoTheta = findHourAngle(hourDegrees, hour);
    //if (typeOf(minuteAngle) == number && typeOf(hourOneAngle) == number) {

      let thetaHourOne = miniuteTheta - hourOneTheta;
      let thetaHourTwo = miniuteTheta - hourTwoTheta;

      if (thetaHourOne < 0) {
        thetaHourOne += 360;
      }
      if (thetaHourTwo < 0) {
        thetaHourTwo += 360;
      }
      console.log("Angle one's value is:", thetaHourOne);
      console.log("Angle two's value is:", thetaHourTwo);
      //}
    return thetaHourOne, thetaHourTwo;

  }

  // let findHourOneAngle = (hourOne) => {
  //     hourHandDegrees.forEach((hour, i) => {
  //       if (hour[i] === hourOne) {
  //         let hourOneAngle = hour.hourDegree;
  //         return hourOneAngle;
  //       } else {
  //
  //       //TODO add string || number check to code
  //       console.log("No matching angle found for hour one.");
  //     }
  //   });
  // };
  // let findMinuteAngle = minuteHandDegrees.find((minute) => {
  //   //const minuteAngle = minuteHandDegrees.minuteDegree;
  //   const minuteAngle = minute.minuteDegree;
  //   console.log("The minute angle for that mintue is: ", minuteAngle);
  //   return minuteAngle;
  // });

  let doAnglesMatch = (hourOne, hourTwo, minuteHand,timeOneTheta, timeTwoTheta) => { //hr1, hr2, minHand, t18, t28

    let matchingAngleArray = [];
    //if a match is found, push to an array

    if (timeOneTheta == timeTwoTheta) {
      const msgMatch = `${hourOne} + ":" + ${minuteHand} + " and " + ${hourTwo} + ${minuteHand} + "s time have a matching angle of " + ${thetaHourOne} + " degrees."`;
        matchingAngleArray.push([msgMatch]); //just theta one because matching
      } else {
      //TODO update console log to error message when aroundTheClock() is fxnal
      const msg404 = `${hourOne} + ":" + ${minuteHand} + " and " + ${hourTwo} + ${minuteHand} + "do not match."`;
      console.log(msg404);
    }
    console.log(matchingAngleArray);
    return matchingAngleArray;
}



//returns all matching angles between the two timezones for a 24 hour period
let aroundTheClock = (hour, minuteHand) => {
  //this will require hour incrementing every time minutes reach 60
  //TODO add seconds - determine if helpful
  const hoursInDay = 24;
  const minutesInHour = 60;
  const iterations = 1 + hoursInDay * minutesInHour;
  console.log("The number of iterations is: ", iterations);
  //TODO update to foreach
  //for every minute in a 24 hour period

  for (let i = 0; i < iterations; i++) {
    return caluclateTheta(hour, minuteHand);
    //TODO fix this
    // minuteHand++;
    // if (minuteHand == 60) {
    //   hourOne++;
    //   hourTwo++;
    //   if (hour > 12) {
    //     hour -= 12;
    //     //checkIfNegative(hourOne);
    //   }
    //
    //   minuteHand++;
    //   if (minuteHand > 60) {
    //     hourOne -= 60;
    //     //checkIfNegative(hourOne);
    //   }
    //
    //   // if (hourOne > 12) {
    //   //   hourOne -= 12;
    //   //   //checkIfNegative(hourOne);
    //   // }
    // }
    // let hourCounter = 0;
    // hourCounter++;
    // if (hourCounter >= 24) {
    //   break;
    // }
  }
  return doAnglesMatch(hourOne, hourTwo, minuteHand, timeOneTheta, timeTwoTheta);
  //return thetaHourOne, thetaHourTwo;
  //return matchingAngleArray;
};

//function to determine the two timezones the angles should be compared to
let driver = (timezoneOne, timezoneTwo) => {
  let timeOne = utcConversion(timezoneOne);
  let timeTwo = utcConversion(timezoneTwo);
  console.log("Coverted timezone one: ", timeOne);
  console.log("Coverted timezone two: ", timeTwo);

  let hourOne = timeOne.substring(0, 2);
  let hourTwo = timeTwo.substring(0, 2);
  let minuteHand = timeOne.substring(3, 5);

  console.log("Hour substing one:", hourOne);
  console.log("Hour substing two:", hourTwo);
  console.log("Minute substring:", minuteHand);

  let timeOneTheta = aroundTheClock(hourOne, minuteHand);
  let timeTwoTheta = aroundTheClock(hourTwo, minuteHand);
  doAnglesMatch(hourOne, hourTwo, minuteHand, timeOneTheta, timeTwoTheta);
  console.log("The times with matching angles are: \n\t", matchingAngleArray);
  return matchingAngleArray;
};

driver("EST", "PST");

// const matchingAngles = twentyFour.map(time => {
//   return caluclateTheta(hourHandOne, hourHandTwo, minuteHand);
// });
