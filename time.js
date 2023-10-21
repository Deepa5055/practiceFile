function time() {
  // Get input values for the start and end times
  var startTime = document.getElementById("starttime").value;
  var endTime = document.getElementById("endtime").value;

  // Split the input strings to get hours and minutes
  var startHours = parseInt(starttime.split(":")[0]);
  var startMinutes = parseInt(starttime.split(":")[1]);
  var endHours = parseInt(endtime.split(":")[0]);
  var endMinutes = parseInt(endtime.split(":")[1]);

  // Calculate the time difference in hours and minutes
  var timeDifferenceHours = endHours - startHours;
  var timeDifferenceMinutes = endMinutes - startMinutes;

  // Normalize the time difference (e.g., if end time is earlier than start time)
  if (timeDifferenceMinutes < 0) {
    timeDifferenceHours--;
    timeDifferenceMinutes += 60;
  }

  // Display the result
  document.getElementById("result").innerHTML =
    "Time Difference: " +
    timeDifferenceHours +
    " hours and " +
    timeDifferenceMinutes +
    " minutes";
}
