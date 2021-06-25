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
  case    "Sunday":    message="today is friday";
    break;
  case    "Monday":    message="today is friday";
    break;
  case   "Tuesday":    message="today is friday";
    break;
  case "Wednesday":    message="today is friday";
    break;
  case  "Thursday":    message="today is friday";
    break;
  case    "Friday":    message="today is friday";
    break;
  case  "Saturday":    message="today is friday";
    break;
}

// - get booleans for... is Friday holiday? is Monday holiday?
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

