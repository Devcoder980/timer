// setTimeout(function(){
//     window.location.reload();
//  }, 5000);
let day=new Date("june 10, 2022 15:23:34").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=day-now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000%60*60*24))/(1000*60*60));
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds=Math.floor((distance%(1000*60))/1000);

    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
    if(distance<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML="expired"
    }


})