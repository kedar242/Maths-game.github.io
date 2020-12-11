
  var first = [9, 3, 4, 5, 6, 7,4,6,8,9];
  var second = [3, 7, 6, 5, 8, 6,9,7,8,6];
  var ans = [27, 21, 24, 25,48,42,36,42,64,54];
  var score=0;
  var op1,op2,op3,op4;
  var myCounter;

function setOptions()
{
   op1=Math.floor(Math.random() * 100);
   op2=Math.floor(Math.random() * 100);
   op3=Math.floor(Math.random() * 100);
   op4=Math.floor(Math.random() * 100);
   console.log(score);
   if(score>0)
   {
      i = score;
      i=i%4;
      switch(i)
      {
         case 0 : op1=ans[score];
                      break;
         case 1 : op2=ans[score];
                      break;
         case 2 : op3=ans[score];
                      break;
         case 3 : op4=ans[score];
                      break;
      }
   }
   else
    op4=ans[score];
}

function hide(Id)
{
  document.getElementById(Id).style.display="none";
}
function show(Id)
{
  document.getElementById(Id).style.display="block";
}
function restValues()
{
    document.getElementById("questions").innerHTML = " ";
    document.getElementById("option1").innerHTML = " ";
    document.getElementById("option2").innerHTML = " ";
    document.getElementById("option3").innerHTML = " ";
    document.getElementById("option4").innerHTML = " ";

    hide("time");
    clearInterval(myCounter);
}
function endGame()
{
  show("gameover");
  document.getElementById("endscore").innerHTML =" "+ score + ".";
  hide("correct");
  hide("wrong");
  // restValues(); 
}
function Countdown()
{
    var timervalue = document.getElementById('timervalue');
    var counter = 60;
  
    timervalue.innerHTML = counter;
    show("time");
     myCounter = setInterval(function(){
      counter-=1;
      timervalue.innerHTML = counter;
      if(counter==0)
      {
        clearInterval(myCounter);
        endGame();
      }
    },1000);
}
function setValue()
{
  document.getElementById("questions").innerHTML = " " + first[score] + " x " + second[score];
  document.getElementById("strt").innerHTML = "Reset Game";
  setOptions();
  document.getElementById("option1").innerHTML = op1;
  document.getElementById("option2").innerHTML = op2;
  document.getElementById("option3").innerHTML = op3;
  document.getElementById("option4").innerHTML = op4;
}
function showQandA() {
  var status = String(document.getElementById("strt").innerHTML)
  if (status.localeCompare("Reset Game") == 0) 
  {
    location.reload();
    score=0;
  }
  else
  {
      if(document.getElementById("gameover").style.display = 'block')
      {
        hide("gameover");
      }
      setValue(score);
      Countdown();  
  }
}
function updateCount()
{
    if(document.getElementById("wrong").style='block')
    {
      hide("wrong");
    }
    show("correct");
    score+=1;
    document.getElementById("scorevalue").innerHTML = score;
    if(score<10)
    {
      setValue(score);
      clearInterval(myCounter);
      Countdown();  
    }
    else
      endGame();
  
}
function checkAns(Id)
{
  switch(Id)
  {
      case "option1": if(op1==ans[score])
                        updateCount();
                      else
                        show("wrong");
                      break;
      case "option2": if(op2==ans[score])
                        updateCount();
                      else
                        show("wrong");
                      break;
      case "option3": if(op3==ans[score])
                        updateCount();
                      else
                        show("wrong");
                      break;
      case "option4": if(op4==ans[score])
                        updateCount();
                      else
                        show("wrong");
                      break;
  }         
}
