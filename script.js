
let hourElement = document.getElementById('hour');
let minuteElement = document.getElementById('minute');
let secondElement = document.getElementById('second');
let milisecondElement = document.getElementById('milisecond');
let dayElement = document.getElementById('day');
let yearElement = document.getElementById('year');

setInterval(() => {
      //for milisecond
      let date = new Date();
      let milisecond = date.getMilliseconds();
      milisecondElement.innerHTML = milisecond;
      //for second
      let second = date.getSeconds();
      secondElement.innerHTML = second;
      //for minute
      let minute = date.getMinutes();
      minuteElement.innerHTML = minute;
      //for hour
      let hour = date.getHours();
      hourElement.innerHTML = hour;
      //for day
      let day = date.getDay();
      let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      dayElement.innerHTML = days[day];
      //for year
      let year = date.getFullYear();
      yearElement.innerHTML = year;


});