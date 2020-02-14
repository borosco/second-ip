//declaring the variables
function getname(){
    var DD =parseInt(document.getElementById("day").value);
    var MM=parseInt(documenet.getElementById("month").value);
    var YY=parseInt(document.getElementById("year").value);
    var CC=parseInt(YY-1)/100+1
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var daysOfTheWeek=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var formula = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
//validating the month
if(MM<=0||MM>12){
    alert("Kindly enter a valid month")
}
//validating the month of february
else if(MM==2 && DD<29){
    alert("sorry february has only 29 days")
}
//validate the date
if(DD<=0 && DD>31){
    alert("Thats not a valid date please.")
}
//validate the year
if(YY<1000||YY>2020){
    alert("You are too old to be alive or inexistent")
}
//validate the gender 
if(document.getElementById("gender")){
   var gender="male"
}
else