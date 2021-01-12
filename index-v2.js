const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

//moment to return current time in HH:mm:ss format
const utcTime = moment.utc().format("HH:mm:ss");
let matchingAngleArray = {};
let typeOf = (type) => console.log(typeof (type));
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
  console.log("Entered assignClockDegrees loop.");
  let hourHandDegrees = [];
  let hourObject = {};
  let minuteHandDegrees = [];
  let minuteObject = {};
  let minute = 0;
  let hr = 0;
  let hourDegree = 0;
  let minuteDegree = 0;
  console.log("The hour degree is currently: ", hourDegree);
  console.log("The minute degree is currently: ", minuteDegree);
  typeOf(minute);
  typeOf(hr);
  typeOf(hourDegree);
  typeOf(minuteDegree);

  let calculateHours = (hr, hourDegree) => {
    console.log("Entered calculate hours loop.");
    for (let i = 0; hourDegree <= 360; i++) {
      console.log("the current hour is:", hr);
      hourObject[hr[i]] = hourDegree;
      hourHandDegrees.push([hr, hourDegree]);
      hourDegree += 30;
      hr++;
    }
  };

  let calculateMinutes = (minute, minuteDegree) => {
    console.log("Entered calculate minutes loop.");
    for (let i = 0; minuteDegree <= 360; i++)  {
      console.log("the current minute is:", minute);
      minuteObject[minute[i]] = minuteDegree;
      minuteHandDegrees.push([minute, minuteDegree]);
      minuteDegree += 6;
      minute++;
    }
  };

  calculateHours(hr, hourDegree);
  calculateMinutes(minute, hourDegree);

  typeOf(hourHandDegrees);
  typeOf(minuteHandDegrees);

  // console.log("The clock hours and their angles are:", hourHandDegrees);
  // console.log("The clock minutes and their angles are:", minuteHandDegrees);

  return { minuteHandDegrees, hourHandDegrees };
  }

  //each angle theta is calculated by subtracting the minute's
  //angle in degrees from each hour's assigned degree. if this results in a
  //negative value, 360 is added to make positive and keep the same angle
  let caluclateTheta = (hour, minuteHand) => {

    //hardocoded temporarily to test fxn
    let hour1 = 1;
    let minHand = 10;
    let { minuteHandDegrees, hourHandDegrees } = assignClockDegrees();
    //typeOf(assignClkDgrs);
    //let hourDegrees = assignClkDgrs.hourHandDegrees;
    console.log("The hours and their degrees are:", hourHandDegrees);
    //let minuteDegrees = assignClkDgrs.minuteHandDegrees;
    console.log("The minutes and their degrees are:", minuteHandDegrees);
    typeOf(hourHandDegrees);
    typeOf(minuteHandDegrees);

    let findHourAngle = (hour1) => {
      hourHandDegrees.forEach((item, i) => {
        if (item == hour1) {
          let hourAngle = item.hourDegree;
          typeOf(hourAngle);
          return hourAngle;
        }
      });
    }

    //let findHourAngle = hourHandDegrees.find(areHoursEqual(hour1));

      //if {
      //}else {
      //     console.log("No matching angle found for hour.");
      // }
    //});

    let findMinuteAngle = (minuteHand) => {
      minuteHandDegrees.forEach((min, i) => {
          console.log("Entering findMinuteAngle fxn:");
          if (min == minuteHand) {
            let minuteAngle = min.minuteDegree;
            console.log("The minutes's angle from the array is:", minuteAngle);
            typeOf(minuteAngle);
            return minuteAngle;
          } else {
            console.log("No matching angle found for minutes.");
          }
      // } catch (err){
      //   console.log("Something went wrong.");
      // }
      });
    }

    let hourTheta = findHourAngle(hour1);
    typeOf(hourTheta);
    let minuteTheta = findMinuteAngle(minuteHand);
    typeOf(minuteTheta);
    //if (typeOf(minuteAngle) == number && typeOf(hourOneAngle) == number) {

      let theta = minuteTheta - hourTheta;
      //let thetaHourTwo = miniuteTheta - hourTwoTheta;
      typeof(theta);

      if (theta < 0) {
        theta += 360;
      }
      // if (thetaHourTwo < 0) {
      //   thetaHourTwo += 360;
      // }
      console.log("Theta for this time is:", theta);
      //console.log("Angle two's value is:", thetaHourTwo);
      //}
    return theta;
  }

  let doAnglesMatch = (hourOne, hourTwo, minuteHand, timeOneTheta, timeTwoTheta) => { //hr1, hr2, minHand, t18, t28
    //if a match is found, push to an array
    if (timeOneTheta === timeTwoTheta) {
      console.log("matching found:", timeOneTheta);
        matchingAngleArray.push([timeOneTheta]);
      } else {
      const msg404 = `${hourOne}:${minuteHand} and ${hourTwo}:${minuteHand} do not have any matching angles....something went wrong.`;
      console.log(msg404);
    }
    console.log("The matching angle array is: ", matchingAngleArray);
    const msgMatch = `${hourOne}:${minuteHand} and ${hourTwo}:${minuteHand}'s time have the following matching angles: ${matchingAngleArray}`;
    console.log(msgMatch);
    return matchingAngleArray;
  }

//used to return theta between the hour and minute hand for each minute in 24 hrs
let aroundTheClock = (hour, minuteHand) => {
  //TODO add seconds to avoid skipping coverage of angles
  const hoursInDay = 4;
  const minutesInHour = 5;
  const iterations = 1 + hoursInDay * minutesInHour;
  console.log("The number of iterations is: ", iterations);
  //TODO update to foreach
  for (let i = 0; i < iterations; i++) {
    return caluclateTheta(hour, minuteHand);
  }
  //return matchingAngleArray;
};

//user inputs two timezones to determine comparative angles formed by the
//hour and minute hand of the converted current utc time
let driver = (timezoneOne, timezoneTwo) => {
  let timeOne = utcConversion(timezoneOne);
  let timeTwo = utcConversion(timezoneTwo);
  console.log("Coverted timezone one: ", timeOne);
  console.log("Coverted timezone two: ", timeTwo);

  let hourOne = timeOne.substring(0, 1);
  let hourTwo = timeTwo.substring(0, 1);
  let minuteHand = timeOne.substring(2, 5);

  console.log("Hour substing one:", hourOne);
  console.log("Hour substing two:", hourTwo);
  console.log("Minute substring:", minuteHand);

  let timeOneTheta = aroundTheClock(hourOne, minuteHand);
  let timeTwoTheta = aroundTheClock(hourTwo, minuteHand);
  typeOf(timeOneTheta);
  typeOf(timeTwoTheta);
  doAnglesMatch(hourOne, hourTwo, minuteHand, timeOneTheta, timeTwoTheta);
  console.log("The times with matching angles are: ", matchingAngleArray);
  return matchingAngleArray;
};

driver("EST", "PST");

// const matchingAngles = twentyFour.map(time => {
//   return caluclateTheta(hourHandOne, hourHandTwo, minuteHand);
// });

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
// let hourCounter = 0;
// hourCounter++;
// if (hourCounter >= 24) {
//   break;
// }

  // let findHourOneAngle = (hourOne) => {
  //     hourHandDegrees.forEach((hour, i) => {
  //       if (hour[i] === hourOne) {
  //         let hourOneAngle = hour.hourDegree;
  //         return hourOneAngle;
  //       } else {
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
