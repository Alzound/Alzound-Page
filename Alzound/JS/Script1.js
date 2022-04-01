const games = ["WhatWeWere", "CerealServed", "Mind&Bunny", "YourTravellingGuide"];

function DateTime()
{
    onclick=document.getElementById('dateTime').innerHTML = Date();
    id ="dateTime";
    alert("Date&Time"); 
   
}

function Greetings()
{
    if (new Date().getHours() < 18) 
    {
        alert("Good day to be more, Comrade!");
        //document.getElementById("demo").innerHTML = "Good day Comrade!"; 
    }
    else
    {
        alert("Good Evening may be upon you, Comrade!");
        //document.getElementById("demo").innerHTML = "Good Evening Comrade!";
    }
    
}

function ChangeDataGames()
{
    
    let text = "";
    for (let i = 0; i < games.length; i++) 
    {
        text += games[i] + "<br>";
        setInterval(() => 5000);
        document.getElementById("games").innerHTML = text;
    }
    
    alert(entro);     
}

function WhileData()
{
  let text = "";
  let i = 0;
  while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("while").innerHTML = text;
}

function CheckData()
{
    let entra(true); 
    let text = ""; 
    var Chara = ['@'];
    document.getElementById("Email").innerHTML = text;
    for(let i = 0; i<text.length;i++)
    {
        if(text[i] == Chara)
        {
            entra(true); 
            alert("Nah nah Correo inválido mother4ker"); 
        }
    }
    
}




function Life()
{
    document.write(40+2);
    alert("The number that solve's all your problems"); 
}