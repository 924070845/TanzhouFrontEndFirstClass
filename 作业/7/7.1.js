var oTime = document.getElementById("time");
var num = 5;
var timer;  //存放定时器对象。

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
// var now = date.getHourMinuteSecond();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var oNow = document.getElementById("nowTime");
if (seconds < 10) {
    oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;"
        + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;"
        + minutes + "&nbsp;分&nbsp;0" + seconds + "&nbsp;秒&nbsp;";
} else {
    oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;"
        + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;"
        + minutes + "&nbsp;分&nbsp;" + seconds + "&nbsp;秒&nbsp;";
}

if (minutes < 10) {
    oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;"
        + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;0"
        + minutes + "&nbsp;分&nbsp;" + seconds + "&nbsp;秒&nbsp;";
} else {
    oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;"
        + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;"
        + minutes + "&nbsp;分&nbsp;" + seconds + "&nbsp;秒&nbsp;";
}

// 处理倒计时
timer = setInterval(function () {
    num--;
    oTime.innerHTML = "敌军还有" + num + "s到达战场，请做好准备";

    if (num === 0) {
        clearInterval(timer);
        // window.location.href = "http://www/baidu.com";
        oTime.innerHTML = "全军出击！！！";
        oTime.style.color = "red";
        oTime.style.fontSize = "30";

    }
}, 1000);

// 处理当前时间
timerNow = setInterval(function () {
    seconds++;
    oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month
        + "&nbsp;月&nbsp;" + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;"
        + minutes + "&nbsp;分&nbsp;" + seconds + "&nbsp;秒&nbsp;";

    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }

    if (seconds < 10) {
        oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;"
            + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;"
            + minutes + "&nbsp;分&nbsp;0" + seconds + "&nbsp;秒&nbsp;";
    }

    if (minutes < 10) {
        oNow.innerHTML = "现在时刻背景时间&nbsp;" + year + "&nbsp;年&nbsp;" + month + "&nbsp;月&nbsp;"
            + day + "&nbsp;日&nbsp;" + hour + "&nbsp;时&nbsp;0"
            + minutes + "&nbsp;分&nbsp;" + seconds + "&nbsp;秒&nbsp;";
    }

    if (minutes >60) {
        minutes = 0;
        hour ++;
    }
}, 1000);


// timerNow = setInterval(function (){
//
// });