console.log("Digital Clock")
setInterval(function () {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();
    $(".hour-show").text(hour);
    $(".minute-show").text(minutes);
    $(".sec-show").text(sec);
    if (hour >= 12 && hour <24){

    $(".period-show").text("PM");
    }
    else{

    $(".period-show").text("AM");
    }
}, 10)