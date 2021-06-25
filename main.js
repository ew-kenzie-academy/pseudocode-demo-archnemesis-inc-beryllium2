// To acquire all of the required data; to print stuff.

// - get employee's name; what is your quest?
//    TODO: implment logging in using LDAP
  userName=prompt("What is your name?");

// - get hours worked
//   TODO: SELECT HOURSWORKED from HR-database where USERNAME=userName;
  hoursWorked=31;

// - get the day of the week
  day=new Date().toLocaleString('en-us', {  weekday: 'long' });

// - get is this Friday or next Monday a holiday?
//   TODO: implement this feature
  thisFridayIsHoliday=Math.random()<.15;
  nextMondayIsHoliday=Math.random()<.15;
  if(thisFridayIsHoliday && nextMondayIsHoliday)
      nextMondayIsHoliday=false;

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
    case    "Friday":    message="Happy Friday";
      break;
    case  "Saturday":    message="Are you supposed to be here today?";
      break;
  }

// - if there is an impending holdiday, then alert about long weekend
//     TODO: Actually determine whether this is the case.
  let secondMessage="";
  if(   (day === "Thursday" && thisFridayIsHoliday)
     || (day === "Friday"   && nextMondayIsHoliday)  )
           secondMessage+="There is an upcoming holiday. Its going to be a long weekend.";

// - if associate hours worked > 35 then warn about overtime
  if(hoursWorked>31)
      alert("You have worked "
            + hoursWorked
            + " this week. Be cautious and Do not work overtime!");

// - Print all messages with document.write
  document.write("<h3>Messages of the Day</h3><br>"
     + "Hello, " + userName + ".<br>"
     + message + "<br>"
     + secondMessage );

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
  + [[https://www.federalpay.org/holidays][federalpay.org/holidays]]
    *List of Federal Holidays - FederalPay.org*
    There it is when I want to get around to it.
    #+begin_text
    |-------------------------------------+----------+---------------------|
    | New Year's Day                      | Friday   | January 1st, 2021   |
    | Birthday of Martin Luther King, Jr. | Monday   | January 18th, 2021  |
    | Washington's Birthday               | Monday   | February 15th, 2021 |
    | Memorial Day                        | Monday   | May 31st, 2021      |
    | Juneteenth Independence Day †       | Friday   | June 18th, 2021     |
    | Independence Day † (9 days)         | Monday   | July 5th, 2021      |
    | Labor Day                           | Monday   | September 6th, 2021 |
    | Columbus Day                        | Monday   | October 11th, 2021  |
    | Veterans Day                        | Thursday | November 11th, 2021 |
    | Thanksgiving Day                    | Thursday | November 25th, 2021 |
    | Christmas Day †                     | Friday   | December 24th, 2021 |
    |-------------------------------------+----------+---------------------|
    #+end_text
  + [[https://en.wikipedia.org/wiki/Box-Muller][wiki::Box-Muller]] *Box–Muller transform*
    No built-in probability functions :/ I would have to make my own, practically.
    #+begin_src javascript
    u1=Math.random();u2=Math.random();
    Math.sqrt(2*Math.log(1/u1))*Math.cos(2*Math.PI*u2);
    Math.sqrt(2*Math.log(1/u1))*Math.sin(2*Math.PI*u2);
    #+end_src    
*/

