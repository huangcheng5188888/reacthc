

export function getTime(time) {

  var nowTime = new Date();  //返回的是当前时间的毫秒数

  var inputTime = new Date(time.replace(/-/g, "/")); //返回的是输入的毫秒数

  var times = (inputTime - nowTime) / 1000;  //times是剩余时间转换成秒

  var days = parseInt(times / 60 / 60 / 24) //声明变量存储天数

  days = days < 10 ? '0' + days : days;

  var hours = parseInt(times / 60 / 60 % 24) //声明变量存储小时

  hours = hours < 10 ? '0' + hours : hours;

  var mins = parseInt(times / 60 % 60) //声明变量存储分钟

  mins = mins < 10 ? '0' + mins : mins;

  var Scons = parseInt(times % 60) //生命便令存储当前的秒

  Scons = Scons < 10 ? '0' + Scons : Scons;

  return {
    days,
    hours,
    mins,
    Scons
  }

}

