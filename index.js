// @title: aroundTheClock()
// @description: returns matching clock angles by timezone.
// @author: chthonix
// @version: 2.0.0

const dateTime = new Date();
const currentHour = dateTime.getUTCHours();
const currentMinute = dateTime.getMinutes();
const hourAngles = {0: 0, 1: 30, 2: 60, 3: 90, 4: 120, 5: 150, 6: 180, 7: 210, 8: 240, 9: 270, 10: 300, 11: 330, 12: 360}
const minuteAngles = {0:0, 1:6, 2:12, 3:18, 4:24, 5:30, 6:36, 7:42, 8:48, 9:54, 10:60, 11:66, 12:72,13:78, 14:84, 15:90, 16:96, 17:102, 18:108,19:114, 20:120, 21:126, 22:132, 23:138, 24:144,25:150, 26:156, 27:162, 28:168, 29:174, 30:180,31:186, 32:192, 33:198, 34:204, 35:210, 36:216,37:222, 38:228, 39:234, 40:240, 41:246, 42:252,43:258, 44:264, 45:270, 46:276, 47:282, 48:288,49:294, 50:300, 51:306, 52:312, 53:318, 54:324,55:330, 56:336, 57:342, 58:348, 59:354, 60:360}

// Determines if the timezone conversion resulted in zero or negative values. 
// If so, it adds 12 to the hour to bring positive.
const checkIfNegative = (currentHour) => {
  let hour;
  if (currentHour <= 0) {
    hour = currentHour + 12;
  } else {
    hour = currentHour;
  }
  return hour;
}

// Adjusts current UTC by timezone.
// East Coast Time ("EST") is 4 hours behind UTC.
const adjustHourByTimezone = (currentTimezone, currentHour) => {
    let adjustedHour;
    let positiveTimeValue;
    switch (currentTimezone) {
      case "EST":
      case "EDT":
        adjustedHour = currentHour - 4;
        break;
      case "CST":
      case "CDT":
        adjustedHour = currentHour - 5;
        break;
      case "MST":
      case "MDT":
        adjustedHour = currentHour - 6;
        break;
      case "PST":
      case "PDT":
        adjustedHour = currentHour - 7;
        break;
      default:
        break;
    }
  positiveTimeValue = checkIfNegative(adjustedHour);
  return positiveTimeValue;
}

// Formats hour output.
const formatHour = (hourValue) => {
  let formattedHour;
  if (hourValue === 0) {
    formattedHour = "12";
  } else  {
    formattedHour = hourValue;
  }
  if (formattedHour.toString().length < 2) {
    formattedHour = "0" + hourValue.toString();
  }
  return formattedHour;
} 

// Formats minute output.
const formatMinute = (minuteValue) => {
  let formattedMinute;
  if (minuteValue.toString().length < 2) {
    formattedMinute = "0" + minute;
  } else {
    formattedMinute = minuteValue;
  }
  return formattedMinute;
}

// Measures hour and minute analog clock angles.
const calculateAngle = (currentTimezone, currentHour, currentMinute) => {
  const adjustedHour = adjustHourByTimezone(currentTimezone, currentHour);
  const hourAngle = hourAngles[adjustedHour];
  const minuteAngle = minuteAngles[currentMinute];
  let calculatedAngle;

  if (hourAngle >= minuteAngle) {
    calculatedAngle = hourAngle - minuteAngle;
  } else if (minuteAngle > hourAngle) {
    calculatedAngle = minuteAngle - hourAngle;
  } else {
    throw new Error("Error calculating angle.");
  }

  const angleArray = [];
  let currentAngle;
  let formattedHour;
  let formattedMinute;

  for (hour in hourAngles) {
    for(minute in minuteAngles) {
      if (hourAngles[hour] >= minuteAngles[minute]) {
        currentAngle = Math.abs(hourAngles[hour] - minuteAngles[minute]);
      } else if (minuteAngles[minute] > hourAngles[hour]) {
        currentAngle = Math.abs(minuteAngles[minute] - hourAngles[hour]);
      } else {
        throw new Error("Error finding absolute value.");
      }
      if (currentAngle === calculatedAngle) {
        formattedHour = formatHour(hour);
        formattedMinute = formatMinute(minute);
        angleArray.push(formattedHour + ":" + formattedMinute);
      }
    }
  }
  return console.log("Matching analog clock values for " + formatHour(adjustedHour) + ":" + formatMinute(currentMinute) + " " + currentTimezone + ":\n\t" + angleArray);
}

// test by timezone
calculateAngle("EST", currentHour, currentMinute);
calculateAngle("CST", currentHour, currentMinute);
calculateAngle("MST", currentHour, currentMinute);
calculateAngle("PST", currentHour, currentMinute);

// TODO create military/civilian time conversion