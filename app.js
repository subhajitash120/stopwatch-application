let startbutton=document.getElementById('start');
let stopbutton=document.getElementById('stop');
let resetbutton=document.getElementById('reset');

let hour=0;
let min=0;
let second=0;
let count=0;

startbutton.addEventListener('click', function(){
    timer=true;
    stopwatch();
});

stopbutton.addEventListener('click', function(){
    timer=false;
});

resetbutton.addEventListener('click',function(){
    timer=false;
    hour=0;
    min=0;
    second=0;
    count=0;
    document.getElementById('hour').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
});

function stopwatch(){
    if(timer){
        count++;
        if(count==100){
            second++;
            count=0;
        }
        if(second==60){
            min++;
            second=0;
        }
        if(min==60){
            hour++;
            min=0;
            second=0;
        }
        let hourdisplay=hour;
        let mindisplay=min;
        let seconddisplay=second;
        let countdisplay=count;

        if (hour<10){
            hourdisplay="0"+hourdisplay;
        }
        if (min<10){
            mindisplay="0"+mindisplay;
        }
        if (second<10){
            seconddisplay="0"+seconddisplay;
        }
        if (count<10){
            countdisplay="0"+countdisplay;
        }
        document.getElementById('hour').innerHTML=hourdisplay;
        document.getElementById('min').innerHTML=mindisplay;
        document.getElementById('sec').innerHTML=seconddisplay;
        document.getElementById('count').innerHTML=countdisplay;
        setTimeout(stopwatch,10);
    }
}