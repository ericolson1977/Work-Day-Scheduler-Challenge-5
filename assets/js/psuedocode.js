// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - DONE
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm - DONE
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future - DONE
// WHEN I click into a timeblock
// THEN I can enter an event - DONE
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage - DONE
// WHEN I refresh the page
// THEN the saved events persist - DONE


//Psuedo Code for Work Day Scheduler 

//Display today's date via DayJS - DONE

//Need to add more hours/timeblocks for input in your HTML - DONE

//Create some sort of Timer Function - DONE
  //loop through each time block...based upon current time it will know if it is past present or future

//Functionality for the SaveButton
//Add event listneer, need to be able to store and remove user input from local storage 

//On page reload or refresh...any input in local storage needs to be rendered to the correct hour 