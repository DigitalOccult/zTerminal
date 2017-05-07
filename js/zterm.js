/**
* @project zTerminal
* @file termguts.js
* @author Zachariah Sobieszczyk <occultdigital@gmail.com>
* @version 0.2
*/

/***********************
*   Global Variables
************************/
var lines = 0;



/***********************
*   Basic Commands
************************/
var inBet = "<br>&nbsp;&nbsp;&nbsp; -- &nbsp;";
var helpTitle = "---------------------- <br> Basic Commands <br> ---------------------- <br>";
var badResp = "<br> Um. Yea. I'm going to need you to type 'help' <br>";


// basic commands array
var bc = [

// 0
{title:"help",
           termResp:" N/A ",
           helpResp:"This Text"
         },
//1
{title:"thetime",
           termResp: Date() ,
           helpResp:"Displays the Date and Time"
         },
//2
{title:"about",
           termResp:" Just a Terminal, written by a coder ",
           helpResp:"About this terminal"
         },
//3
{title:"contact",
           termResp:"Want to contact me for some reason? occultdigital@gmail.com ",
           helpResp:"y contact info"
         },
//4
{title:"edition",
           termResp:"Version 0.2 ",
           helpResp:"The terminal's Version"
         },
//5
{title:"future",
           termResp:"Unclear atm ",
           helpResp:"What to expect"
         },
//6
{title:"sauce",
           termResp:"I want that Mulan McNugget sauce, Morty! That's my series arc, Morty! If it takes nine seasons, I want my McNugget... dipping sauce Szechuan sauce, Morty! ",
           helpResp:"Dry Nuggets"
         },
//7
{title:"slurms",
           termResp:"Whimmy Wham Wham Wozzel",
           helpResp:"The Original Party Worm!"
         },
//8
{title:"clear",
           termResp:"N/a ",
           helpResp:"Clears the screen"
          }
]; // end of basic commands array


 /**********************
 *     onkeydown
 ***********************
 *
 * purpose: When enter is pressed the console command is passed to the termResp function.
 * also, when 10 console commands have been run, the screen clears the commands.
 * @param {nuffin'}
 * @return {nuffin'}
 *
 **************/


  document.onkeydown=function(evt){

      var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
      if(keyCode == 13)
      {
      var passcmd = document.getElementById("termInput").value;
      $("ol").append("zTerminal@localhost:~ ", passcmd);

            if(passcmd == bc[0].title){
              lines = lines + 9;
            } else{
              lines = lines + 1;
            }

            if(lines > 10){
              $("ol").empty();
              document.getElementById('termInput').value = "";
              lines = 0;
              termResp(passcmd);
            } else {
              document.getElementById('termInput').value = "";
              termResp(passcmd);
            }
      }
  }

/**********************
*     termResp(cncmd)
***********************
*
* purpose: takes in a console command and returns a proper helpResp
* @param {string} cncmd -- the passed console command
* @return {nuffin'}
*
**************/

function termResp(cncmd){

var cmd = (cncmd).toLowerCase();


/**************
*basic commands
**************/

  if (cmd == bc[0].title) {
    $("ol").append("<br>", helpTitle, bc[0].title, inBet, bc[0].helpResp,"<br>",bc[1].title, inBet, bc[1].helpResp,"<br>",bc[2].title, inBet, bc[2].helpResp,"<br>",bc[3].title, inBet, bc[3].helpResp,"<br>",bc[4].title, inBet, bc[4].helpResp,"<br>",bc[5].title, inBet, bc[5].helpResp,"<br>",bc[6].title, inBet, bc[6].helpResp,"<br>", bc[7].title, inBet, bc[7].helpResp, "<br>", bc[8].title, inBet, bc[8].helpResp, "<br>");
} else if(cmd == bc[1].title){
    $("ol").append("<br>", bc[1].termResp, "<br>");
} else if(cmd == bc[2].title){
    $("ol").append("<br>", bc[2].termResp, "<br>");
} else if(cmd == bc[3].title){
    $("ol").append("<br>", bc[3].termResp, "<br>");
} else if(cmd == bc[4].title){
    $("ol").append("<br>", bc[4].termResp, "<br>");
} else if(cmd == bc[5].title){
    $("ol").append("<br>", bc[5].termResp, "<br>");
} else if(cmd == bc[6].title){
    $("ol").append("<br>", bc[6].termResp, "<br>");
} else if(cmd == bc[7].title){
    $("ol").append("<br>", bc[7].termResp, "<br>");
} else if(cmd == bc[8].title){
    $("ol").empty();
} else {
    $("ol").append(badResp);
}


}

/**********************
*     mehScroll
***********************
*
* purpose: mediocre screen scrolling
* @param {nuffin'}
* @return {nuffin'}
*
**************/

function mehScroll(){

 if(document.getElementById('terminal').scrollTop<(document.getElementById('terminal').scrollHeight-document.getElementById('termainal').offsetHeight)){-1
       document.getElementById('terminal').scrollTop=document.getElementById('terminal').scrollTop+1
       }
 else {document.getElementById('terminal').scrollTop=0;}
}

setInterval(ScrollDiv,50)


/**********************
*    Input Focus
***********************/

$('#terminal').click(function(){
  $('#termInput').focus();
});
