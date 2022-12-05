var scorenum=0;
var arr=[];
function Compare(){
    var num = Math.floor(Math.random()*10-1+1)+1;
    var p = document.getElementById("data");
    var p1 = document.getElementById("goal");

for(var i=1;i<=4;) {
    var value = prompt("enter a number between 1 and 10");
    if (isNaN(value)) {
        alert("Please enter an number in the correct range!");
    p.innerHTML="Please enter an number in the correct range!";
            }else if (value>num) {
                alert("Your guess is a little big, please re-enter a small number");
     i++;
        }else if (value<num) {
            alert("Your guess is a little small, please re-enter a big number");
    i++;
        }else if(value=num) {
            alert("Congratulations! you've guessed right");
            scorenum=scorenum+1;
            p.innerHTML="Congratulations! you've guessed right";
            p1.innerHTML="Socre:"+scorenum;
            document.getElementById("but1").style.display="none";
            document.getElementById("but2").style.display="block";
            document.getElementById("but3").style.display="block";
            break;
        }
    
    } if (i>4) {
        alert("GG!");
    p.innerHTML="GG! You used up your three chances,the correct number is: "+num;
    document.getElementById("but1").style.display="none";
    document.getElementById("but3").style.display="block";
    scorenum=scorenum;
    p1.innerHTML="Socre:"+scorenum;
    }
}

function Continue(){
    var num = Math.floor(Math.random()*10-1+1)+1;
    var p = document.getElementById("data");
    var p1 = document.getElementById("goal");

for(var i=1;i<=4;) {
    var value = prompt("enter a number between 1 and 10");
    if (isNaN(value)) {
        alert("Please enter an number in the correct range!");
    p.innerHTML="Please enter an number in the correct range!";
            }else if (value>num) {
                alert("Your guess is a little big, please re-enter a small number");
     i++;
        }else if (value<num) {
            alert("Your guess is a little small, please re-enter a big number");
    i++;
        }else if(value=num) {
            alert("Congratulations! you've guessed right");
            scorenum=scorenum+1;
            p.innerHTML="Congratulations! you've guessed right";
            p1.innerHTML="Socre:"+scorenum;
            document.getElementById("but1").style.display="none";
            document.getElementById("but2").style.display="block";
            document.getElementById("but3").style.display="block";
            break;
        }
    
    } if (i>4) {
        alert("GG!");
    p.innerHTML="GG! You used up your three chances,the correct number is: "+num;
    document.getElementById("but1").style.display="none";
    document.getElementById("but3").style.display="block";
    scorenum=scorenum;
    p1.innerHTML="Socre:"+scorenum;
    }
}


    function Quit(){
        var p = document.getElementById("data");
        var p1 = document.getElementById("goal");
        p.innerHTML="Thank you for your play!please enter your nick name!";
        p1.innerHTML="Socre:"+scorenum;
        document.getElementById("but1").style.display="block";
        document.getElementById("but2").style.display="none";
        document.getElementById("but3").style.display="none";
        var nickname=prompt("please enter your nick name");
        var p2 = document.getElementById("rankinglist");
        p2.innerHTML+="<br>"+"Player:"+nickname+",   score:"+scorenum+"<br>";
    }
