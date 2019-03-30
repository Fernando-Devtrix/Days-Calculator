function getDate() {
    var startDay = document.getElementById("startDay").value;
    document.getElementById("firstDaySelected").innerHTML = startDay;

    var endDay = document.getElementById("endDay").value;
    document.getElementById("lastDaySelected").innerHTML = endDay;

    var date_diff_indays = function(startDay, endDay) {
    firstDay = new Date(startDay);
    secondDay = new Date(endDay);
    milisecondsInADay = 86400000; 
    // milisecondsInASecond = 1000
    // secondInAHours = 3600
    // hours = 24; 
    countedDays = Math.floor((Date.UTC(secondDay.getFullYear(), secondDay.getMonth(), secondDay.getDate()) - Date.UTC(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate()) ) /(milisecondsInADay));
    return countedDays;
    }

    document.getElementById("daysField").value = date_diff_indays(startDay, endDay);
    // console.log(date_diff_indays(startDay, endDay));

}
