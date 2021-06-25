// To acquire all of the required data; to print stuff.

// - get employee's name; what is your quest?
userName=prompt("What is your name?");

// - get hours worked
//   TODO: SELECT HOURSWORKED from HR-database where USERNAME=userName;
hoursWorked=35;

// - get the day of the week
day=new Date().toLocaleString('en-us', {  weekday: 'long' });

// - case(weekday) -> day specific message
switch (day){
  case    "Sunday":    message="Do not work today :P";
    break;
  case    "Monday":    message="Sounds like somebody's got a case of the Mondays";
    break;
  case   "Tuesday":    message="Ruby Tuesday isn't good anymore";
    break;
  case "Wednesday":    message="Median day";
    break;
  case  "Thursday":    message="Its almost Friday";
    break;
  case    "Friday":    message="Happy friday";
    break;
  case  "Saturday":    message="Its the last day of the week.";
    break;
}

// - if it is thursday and Friday is a holiday
//   or today is friday and Monday is holiday
//     then alert about long weekend

// - if associate hours worked > 35 then warn about overtime
// - Print all messages with document.write
// - MIME it up with HTML and CSS


/*
* Research
  + [[https://stackoverflow.com/questions/9677757/how-to-get-the-day-of-the-week-from-the-day-number-in-javascript][<Gabriel Kohen>@stackoverflow::9677757]]
    *How to get the day of the week from the day number in JavaScript?*
    Do I care why it works? Plug and chug :P
    ~console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));~
  + [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch][mdn::switch]]
    *switch*
    I wonder if I can't use it like a function and return the value of assignment
*/

