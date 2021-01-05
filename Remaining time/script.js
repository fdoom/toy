

window.onload = function () {
    setInterval(todayTime, 1);
}

function todayTime(){
    let today = new Date();

    let year = today.getFullYear();
    let month = 1 + today.getMonth();
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let remainHour = 22 - hour;
    let remainMinute = 60 - minute;
    let remainSecond = 60 - second;

    document.querySelector(".date").innerHTML = year + ' ' + month + ' ' + day;
    document.querySelector(".remain_time").innerHTML = remainHour + ' : ' + remainMinute + ' : ' + remainSecond;
    
}