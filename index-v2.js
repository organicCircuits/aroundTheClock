const moment = require("moment");

//Title: threeSixty
//Description: This program calculates matching clock angles for cities
//in different timezones. This version calculates those between EST and
//PST with future versions moving away from hardcoded values and the
//ability to calculate matching angles between any two timezones.
//Author: Ashley Robinson

//moment to return current time in HH:mm:ss format
const utcTime = moment.utc().format("HH:mm:ss");
let matchingAngleArray = [];
let typeOf = (type) => console.log(typeof(type));
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
      //east coast time is 5 hours behind utc;
      //other timezones follow east to west
      let eastCoastHour = utcHour - 5;
      //checkIfNegative returns positive values after conversion
      let eastCoastPositive = checkIfNegative(eastCoastHour);
      console.log("The east coast hour is: ", eastCoastPositive);
      //construct the actual clock value
      const eastCoastTime = eastCoastPositive + ":" + minutes;
      console.log("The equivalent Atlantic coast time is: ", eastCoastTime);
      return eastCoastTime;
    case "CST":
    case "CDT":
      let centralHour = utcHour - 6;
      let mountainPositive = checkIfNegative(centralHour);
      console.log(hour);
      const centralTime = mountainPositive + ":" + minutes;
      console.log("The equivalent central time is: ", centralTime);
      return centralTime;
    case "MST":
    case "MDT":
      const mountainHour = utcHour - 7;
      let hour = checkIfNegative(mountainHour);
      console.log(hour);
      const mountainTime = mountainPositive + ":" + minutes;
      console.log("The equivalent mountain time is: ", mountainTime);
      return mountainTime;
    case "PST":
    case "PDT":
      const pacificHour = utcHour - 8;
      let pacificPositive = checkIfNegative(pacificHour);
      console.log("The pacific hour is: ", pacificPositive);
      const pacificTime = pacificPositive + ":" + minutes;
      console.log("The equivalent Pacific coast time is: ", pacificTime);
      return pacificTime;
    default:
      const msg = "Eoth talich danya: A valid timezone was not entered.";
      console.log(msg);
      return msg;
  }
};

//checks if the resulting conversion from utc resulted in zero or a negative
//number. if so, it adds 12 or 13 to correspond to actual clock values
let checkIfNegative = hour => {
  if (hour == 0) {
    console.log("The normalized hour was zero:", hour);
    hour += 12;
  }
  if (hour < 0) {
    console.log("The normalized hour was negative:", hour);
    hour += 13;
    return hour;
  } else {
    console.log("The hour was positive:", hour);
    return hour;
  }
};

//assigns each hand an angle with 0/360 degrees being 12 o'clock and 90 degrees at 3
let assignClockDegrees = () => {
  console.log("Entered assignClockDegrees loop.");
  let hourHandDegrees = [];
  let minuteHandDegrees = [];
  let mn = 0;
  let hr = 0;
  let hourDegree = 0;
  let minuteDegree = 0;

  let calculateHours = (hr, hourDegree) => {
    console.log("Entered calculate hours loop.");
    for (let i = 1; hourDegree <= 360; i++) {
      hourHandDegrees.push({
        hour: hr,
        hourDegree: hourDegree
      });
      hourDegree += 30;
      hr++;
    }
  };

  let calculateMinutes = (mn, minuteDegree) => {
    console.log("Entered calculate minutes loop.");
    for (let i = 1; minuteDegree <= 360; i++) {
      minuteHandDegrees.push({
        minute: mn,
        minuteDegree: minuteDegree
      });
      minuteDegree += 6;
      mn++;
    }
  };

  calculateHours(hr, hourDegree);
  calculateMinutes(mn, minuteDegree);

  return {
    minuteHandDegrees,
    hourHandDegrees
  };
}

let {
  minuteHandDegrees,
  hourHandDegrees
} = assignClockDegrees();
console.log("The hours and their degrees are:", hourHandDegrees);
console.log("The minutes and their degrees are:", minuteHandDegrees);

//each angle theta is calculated by subtracting the minute's
//angle in degrees from each hour's assigned degree. if this results in a
//negative value, 360 is added to make positive and keep the same angle
let caluclateTheta = (hourAngle, minuteAngle) => {

  // typeOf(hourAngle);
  // typeOf(minuteAngle);
  //if (typeOf(minuteAngle) == number && typeOf(hourOneAngle) == number) {
  //try {
  console.log("Beginning to calculate theta:");
  console.log("hourTheta is:", hourAngle);
  console.log("minuteTheta is:", minuteAngle);
  let theta = minuteAngle - hourAngle;
  typeOf(theta);
  // } catch (err){
  //   console.log("Something went wrong.");
  // }
  if (theta < 0) {
    theta += 360;
  }
  //}
  console.log("Theta for this time is:", theta);
  return theta;
}

let findHourAngle = (hour) => {
  const hourKeys = Object.keys(hourHandDegrees);
  const hourAngleKeys = Object.values(hourHandDegrees[1]);
  let hourAngle = 0;
  hourKeys.forEach(key => {
    console.log("Entering findHourAngle fxn:");
    if (hour === key) {
      console.log("Matching hour found for key: ", key);
      let hourAngleArray = Object.values(hourHandDegrees[hour]);
      hourAngle = hourAngleArray[1];
      console.log(`The matching angle for hour ${hour} is ${hourAngle}`);
    } else {
      console.log("No angle found for key.");
    }
  })
  console.log("Exiting findHourAngle fxn.");
  typeOf(hourAngle);
  return hourAngle;
}

let findMinuteAngle = (minuteHand) => {
  const minuteKeys = Object.keys(minuteHandDegrees);
  const minuteAngleKeys = Object.values(minuteHandDegrees[1]);
  let minuteAngle = 0;
  minuteKeys.find(key => {
    console.log("Entering findMinuteAngle fxn:");
    console.log("Current minute is:", minuteHand);
    let strMinute = minuteHand;
    //test either at 0-9 min manually on the hour or mocha/chai
    numMinute = Number(minuteHand);
    typeOf(numMinute);
    if (numMinute < 10 || numMinute === 00) {
      strMinute = minuteHand.substring(1, 2);
      numMinute = Number(strMinute);
    }

    if (minuteHand === key) {
      console.log("Matching minute found for key: ", key);
      let minuteAngleArray = Object.values(minuteHandDegrees[minuteHand]);
      minuteAngle = minuteAngleArray[1];
      console.log(`The matching angle for minute ${minuteHand} is ${minuteAngle}`);
    } else {
      return;
    }
  })
  return minuteAngle;
  console.log("exiting findMinuteAngle fxn.");
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
  const hoursInDay = 2;
  const minutesInHour = 2;
  const iterations = 1 + hoursInDay * minutesInHour;
  console.log("The number of iterations is: ", iterations);
  let arrayOfThetas = [];

  for (let i = 0; i < iterations; i++) {
    let hourCounter = Number(hour);
    console.log("The hour counter is starting at:", hourCounter);
    typeOf(hourCounter);
    let minuteDayCounter = Number(minuteHand);
    console.log("The minute day counter is starting at:", minuteDayCounter);
    typeOf(minuteDayCounter);

    if (minuteDayCounter === 60) {
      hourCounter++;
      minuteDayCounter = 0;
    }

    if (hourCounter > 12) {
      hourCounter = 0;
    }

    let hrAngle = findHourAngle(hour);
    let minAngle = findMinuteAngle(minuteHand);
    typeOf(hrAngle);
    typeOf(minAngle);
    //for (let i = 0; i < iterations; i++) {
    let theta = caluclateTheta(hrAngle, minAngle);
    let hoursAndMinutes = `${hour}:${minuteHand}`;
    console.log("aroundTheClock loop time is:", hoursAndMinutes);
    arrayOfThetas.push({time:minuteHand, theta: theta});
    console.log(arrayOfThetas);
    minuteDayCounter++;
  }
}

// let adjustTime = () => {

//   }

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

// let findHourAngle = (hour) => {
//   hourHandDegrees.forEach((item, i) => {
//     if (item == hour) {
//       let hourAngle = item[i].hourDegree;
//       typeOf(hourAngle);
//       return hourAngle;
//     }else {
//         console.log("No matching angle found for hour.");
//     }
//   });
// }

//let findHourAngle = hourHandDegrees.find(areHoursEqual(hour1));

// typeOf(hourHandDegrees);
// typeOf(minuteHandDegrees);
//let hrDegree = hourHandDegrees.hourDegree;
// console.log("The hour keys are:", hourKeys);
// console.log("The minute keys are:", minuteKeys);
// console.log("The hour angle keys are:", hourAngleKeys);
// console.log("The minute angle keys are:", minuteAngleKeys);

// let hourAngle = findHourAngle(hour);
// let minuteAngle = findMinuteAngle(minuteHand);
