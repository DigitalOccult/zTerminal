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

/********************************************************************
*   Basic Commands
*********************************************************************/
var inBet = "&nbsp;&nbsp; -- &nbsp;";
var indent = "&nbsp;&nbsp;&nbsp;"
var helpTitle = "Basic Commands <br> ---------------------- <br>";
var badResp = "<br> Um. Yeeeaaahh. I'm going to need you to type 'help' <br>";


// basic commands array
var bc = [

// 0
{title:"help",
           termResp:"no terminal response for this one",
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
         }
]; // end of basic commands array



var fc = [
  {title:"clear",
             termResp: function(){ $("ol").empty();} ,
             helpResp:"Clears the screen"
            }
];


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
      document.getElementById('termInput').focus();


            if(passcmd == bc[0].title){
              lines = lines + 9;
            } else{
              lines = lines + 1;
            }

            if(lines > 10){
              $("ol").empty();
              document.getElementById('terminal').value = "";
              lines = 0;
              termResp(passcmd);
              } else {
              document.getElementById('terminal').value = "";
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


/**********************
*basic commands loop
**********************/

  if (cmd == bc[0].title) {

    var arrayLength = bc.length;
    $("ol").append("<br><br>", helpTitle);
    for (var i = 0; i < arrayLength; i++) {
        $("ol").append(indent, bc[i].title);
        $("ol").append(inBet);
        $("ol").append(bc[i].helpResp, "<br>");
}


}else{
    var arrayLength = bc.length;
    var goodresp = 0;

        for (var x = 0; x < arrayLength; x++) {
          if(cmd == bc[x].title){
            $("ol").append("<br>", bc[x].termResp, "<br>");
            goodresp = 1;
          }
      }

/**********************
*function commands loop
**********************/

      if(goodresp == 0){
        var arrayLength = fc.length;

                for (var y = 0; y < arrayLength; y++) {
                  if(cmd == fc[y].title){
                    fc[y].termResp();
                    }else{
                    $("ol").append(badResp);
                  }// end of y if/else state
                }//end of y loop

       } //end of if goodresp */

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

setInterval(ScrollDiv,50);
