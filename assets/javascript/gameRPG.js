// VARIABLES
var userScore = 0; 
var user; 
var defender; 
var userPlayer = false; 
var defenderPlayer = false;
var userAP = 0;  
var userHP = 0; 
// var mechaGodzilla; 
// var megaZord; 
// var ironGiant; 
// var optimusPrime; 
var defenderHP = 0; 
var defenderCAP = 0;  


// attribute variables
var hp = []; 
var ap = []; 
var cap = []; 


// GAME PLAY FUNCTION
function gamePlay() {


  for (i = 0; i < 4; i++) {
    hp[i] = (Math.floor(Math.random() * 100)+50); 
    ap[i] = (Math.floor(Math.random() * 100)+1); 
    cap[i] = (Math.floor(Math.random() * 100)+20);  //---- MAY NEED TO LOWER #s
  } 
  console.log('hp:', hp); 
  console.log('ap:', ap); 
  console.log('cap:', cap); //------------Checks random hp, ap, & cap assignments

  // Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.
  $('#mecha').attr("hp", hp[0]).attr("ap", ap[0]).attr("cap", cap[0]);
  $('#zord').attr("hp", hp[1]).attr("ap", ap[1]).attr("cap", cap[1]);
  $('#iron').attr("hp", hp[2]).attr("ap", ap[2]).attr("cap", cap[2]);
  $('#gundam').attr("hp", hp[3]).attr("ap", ap[3]).attr("cap", cap[3]);

  // console.log("attribute check", mecha, zord, iron, gundam); //-----Checks value assignment

  
  $('#startingPlayerRow').on('click', '.characters', function() {
  
    if (userPlayer === false && defenderPlayer === false) {
      user=($(this)); // ------ Check this later.....
      userPlayer = true; 
      userHP = ($(this).attr("hp"));
      userHP = parseInt(userHP);
      userAP = ($(this).attr("ap"));
      userAP = parseInt(userAP);
      console.log('userHP:', userHP, "userAP:", userAP);
      console.log(userPlayer); 
      $('.playerBox').html(user); 
      // add empty() to toprow box. 

    
    } else if (userPlayer === true && defenderPlayer === false) {
      defender=($(this)); // ------ Check this later.....
      defenderPlayer = true; 
      defenderHP = ($(this).attr("hp"));
      defenderHP = parseInt(defenderHP);
      defenderCAP = ($(this).attr("cap"));
      defenderCAP = parseInt(defenderCAP);
      console.log('defenderrHP:', defenderHP, "defenderCAP:", defenderCAP);
      $('.defenderBox').html(defender); 

    } else if (userPlayer === true && defenderPlayer === true) {
      return; 
    } // End player select IF

  }); // END on.click ()
    
  $('#fight').on('click', '.btn', function() {
     console.log('button clicked!'); 
  }); 


  console.log(userPlayer); 

  // $('#coin-image').html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg'>"); 
  // .remove()

} // END gamePlay()


// FUNCTIONS




// ----------- randomally create values for hp, ap, & cap



// -----------user chooses a player from the available characters 
// -----------userPlay moves to #defenderArea
// -----------other characters turn red
// -----------user chooses from available characters to bring down to #defenderArea
// -----------user clicks #attackBtn to fight defender
// -----------user's attack strength++ and defender hitpoints - attack
// -----------defender counter attacks and user hitpoint - counter attack
// -----------IF defender's hitpoints <= 0, defender disappers and user selects another character to fight again
// -----------IF no other characters remain, user wins
// -----------





// CALL FUNCTIONS

gamePlay(); 