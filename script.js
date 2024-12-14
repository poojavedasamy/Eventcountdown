document.getElementById("count").addEventListener("click",function(){
    var date=document.getElementById("date").value;
    if(date){
            var xx=new Date(date).getTime();
            clearInterval(window.countdownInterval);

            window.countdownInterval=setInterval(function(){
            var now=new Date().getTime();
            var dis=xx-now;
            var days=Math.floor(dis/(1000*60*60*24));
            var hours=Math.floor(dis%(1000*60*60*24)/(1000*60*60));
            var mins=Math.floor(dis%(1000*60*60)/(1000*60));
            var second=Math.floor(dis%(1000*60)/1000);
            document.getElementById("countdown").innerHTML=days+"d"+" "+hours+"h"+" "+mins+"m"+" "+second+"s";
            if(dis<0){
                clearInterval(window.countdownInterval);
                document.getElementById("countdown").innerHTML="EXPIRED";
            }   
        });
    }
    else{
        alert("Please enter a valid date and time.")
    }
});


