
function nickNames() {
    var day = document.getElementById("day").value;
    var DD = parseInt(day); // dd for day
    var month = document.getElementById("month").value;
    var MM =parseInt (month);// mm for  month
    var year = document.getElementById("year").value;
    var YY =parseInt (year); // yy rep year
    var CC = parseInt(YY - 1) / 100 + 1; // cc is the century in digits
    var dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;//day of the week
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //  male  in array
    var femaleNames = ["Akosua","Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];// female in array
         //checking gender
        if (document.getElementById("gender").checked) {
                var gender = 'male';
        }
        else{
            var gender = 'female';
        }
        // checking if month is correct
        if (MM < 0 || MM > 12 ){
            alert("invalid month ");
        }
        // checking if day is within the max no of days in a month  if its not correct alert user
        else if (DD < 0 || DD > 31) {
            alert("invalid  Date");
        }
         // validating february month ...leap year to be checked
        else if( MM == 2 && DD > 29){
            alert("This month does not have those number of days");
        }
           // validating year
        else if(YY<1000||YY>2020){
            alert("Invalid year");
        }
            //The Math.ceil() rounds a number up to the next largest whole number
            // monday
        else if(Math.ceil(dayOfTheWeek)==1 && gender ==='female'||gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
               "Your day name is "+maleNames[1]+" ,which means you were born on a Monday."
            }
            else{
               document.getElementById("results").innerHTML=
               "Your day name is "+femaleNames[1]+" ,which means you were born on a Monday."
            }
         }
           //  Tuesday
        else if(Math.ceil(dayOfTheWeek)==2 && gender ==='female'|| gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
             "Your day name is "+maleNames[2] +", which means you were born on a Tuesday."
            }
            else{
                document.getElementById("results").innerHTML=
                "Your day name is "+femaleNames[2]+", which means you were born on a Tuesday."
           }
         }
          //  wednesday
        else if(Math.ceil(dayOfTheWeek)==3 && gender ==='female'|| gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
             "Your day name is "+maleNames[3] +", which means you were born on a Wednesday."
            }
            else{
                document.getElementById("results").innerHTML=
                "Your day name is "+femaleNames[3]+", which means you were born on a Wednesday."
           }
         }
          // thursday
        else if(Math.ceil(dayOfTheWeek)==4 && gender ==='female'|| gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
             "Your day name is "+maleNames[4] +", which means you were born on a Thursday."
            }
            else{
                document.getElementById("results").innerHTML=
                "Your day name is "+femaleNames[4]+", which means you were born on a Thursday."
           }
         }
          //  friday
        else if(Math.ceil(dayOfTheWeek)==5 && gender ==='female'|| gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
             "Your day name is "+maleNames[5] +", which means you were born on a Friday."
            }
            else{
                document.getElementById("results").innerHTML=
                "Your day name is "+femaleNames[5]+", which means you were born on a Friday."
           }
         }
          //  saturday
        else if(Math.ceil(dayOfTheWeek)==6 && gender ==='female'|| gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
             "Your day name is "+maleNames[6] +", which means you were born on a Saturday."
            }
            else{
                document.getElementById("results").innerHTML=
                "Your day name is "+femaleNames[6]+", which means you were born on a Saturday."
           }
         }
          //   sunday
        else if(Math.ceil(dayOfTheWeek)==0 && gender ==='female'|| gender==='male'){
            if(gender==='male'){
             document.getElementById("results").innerHTML=
             "Your day name is "+maleNames[0] +", which means you were born on a Sunday."
            }
            else{
                document.getElementById("results").innerHTML=
                "Your day name is "+femaleNames[0] +", which means you were born on a Sunday."
           }
        }
         // default prompt user to enter his or her details
        else{
             alert("Enter your information please!!!")
          }
  }
  