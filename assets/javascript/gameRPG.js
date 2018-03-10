// VARIABLES
var userScore = 0; 
var user; 
var userStats; 
var victory = 1; 
var defenderStats;
var defender; 
var userPlayer = false; 
var defenderPlayer = false;
var userAP = 0;  
var userHP = 0; 
var defenderHP = 0; 
var defenderCAP = 0;  
var explosion; 
var audio = new Audio("../RPG-Game/assets/images/explosion.mp3");


// attribute variables
var hp = []; 
var ap = []; 
var cap = []; 

$(document).ready(function(){
  
  // GAME PLAY FUNCTION
  function gamePlay() {
    
    
    // $('.defenderBox').html("<img src='../RPG-Game/assets/images/explode.gif' alt ='image' />"); 
  
    

    
    for (i = 0; i < 4; i++) {
      hp[i] = (Math.floor(Math.random() * 100)+50); 
      ap[i] = (Math.floor(Math.random() * 100)+20); 
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

    // Display HP and Attack Power on screen. 
    $('#mechaHP').text(hp[0]); 
    $('#mechaAP').text(ap[0]); 
    $('#mechaCAP').text(cap[0]); 

    $('#zordHP').text(hp[1]); 
    $('#zordAP').text(ap[1]); 
    $('#zordCAP').text(cap[1]); 
    
    $('#ironHP').text(hp[2]); 
    $('#ironAP').text(ap[2]);
    $('#ironCAP').text(cap[2]); 
    
    $('#gundamHP').text(hp[3]); 
    $('#gundamAP').text(ap[3]); 
    $('#gundamCAP').text(cap[3]); 
    

    $('#startingPlayerRow').on('click', '.characters', function() {
      
      if (userPlayer === false && defenderPlayer === false) {
        user=($(this)); // ------ Check this later.....
        userStats= ($(this)).attr('id'); 
        userPlayer = true; 
        userHP = ($(this).attr("hp"));
        userHP = parseInt(userHP);
        userAP = ($(this).attr("ap"));
        userAP = parseInt(userAP);
        console.log('userHP:', userHP, "userAP:", userAP);
        console.log(userPlayer); 
        $('.playerBox').append(user); 
        
        switch(userStats) {
          case 'mecha':
          userStats = $('#mechaStats'); 
            break; 
            case 'zord':
            userStats = $('#zordStats'); 
            break; 
          case 'iron':
          userStats = $('#ironStats'); 
          break; 
          case 'gundam':
          userStats = $('#gundamStats'); 
          break; 
          default:
        }
        
        console.log(userStats); 
        
        userStats.hide(); 
        $('#userHP').text(userHP); 
        $('#userAP').text(userAP); 
        

        // $('#mechaStats').prependTo('.textDisplay'); 
        
        // add empty() to toprow box. 

        
      } else if (userPlayer === true && defenderPlayer === false) {
        defender=($(this)); // ------ Check this later.....
        defenderStats= ($(this)).attr('id'); 
        defenderPlayer = true; 
        defenderHP = ($(this).attr("hp"));
        defenderHP = parseInt(defenderHP);
        defenderCAP = ($(this).attr("cap"));
        defenderCAP = parseInt(defenderCAP);
        console.log('defenderHP:', defenderHP, "defenderCAP:", defenderCAP);
        $('.defenderBox').append(defender); 
        
        switch(defenderStats) {
          case 'mecha':
            defenderStats = $('#mechaStats'); 
            break; 
          case 'zord':
          defenderStats = $('#zordStats'); 
            break; 
            case 'iron':
            defenderStats = $('#ironStats'); 
            break; 
          case 'gundam':
          defenderStats = $('#gundamStats'); 
          break; 
          default:
        }

        defenderStats.hide(); 
        $('#defenderHP').text(defenderHP); 
        $('#defenderCAP').text(defenderCAP); 
        
       
        
      } else if (userPlayer === true && defenderPlayer === true) {
        return; 
      } // End player select IF
      
    }); // END on.click ()
    
    $('.button').on('click', '#fight', function() {
      console.log('button clicked!'); 
      if (userPlayer === true && defenderPlayer === true) {
        attack(); 
        checkVictory(); 
        checkDefeat(); 
        checkWin(); 
      }

    }); // END Button on.click ()
    
    
    // FUNCTIONS
    function attack() {
      defenderHP = defenderHP - userAP; 
      userAP += userAP; 
      if (defenderHP > 0) {
        userHP = userHP - defenderCAP; 
      }
      console.log('userAP:', userAP, 'defenderHP:', defenderHP, 'userHP:', userHP)
      $('#userHP').text(userHP); 
      $('#userAP').text(userAP); 
      $('#defenderHP').text(defenderHP); 
      $('#defenderCAP').text(defenderCAP); 
    }
    
    function checkVictory() {
      if (defenderHP <= 0) {
        alert('Victory'); 
        audio.play(); 
        defenderExplosion();  
        defender.hide(); 
        defenderPlayer = false; 
        defenderHP = 0; 
        defenderCAP = 0;  
        victory++; 
      }
    }
    
    function checkDefeat() {
      if (userHP <= 0) {
        alert('Defeat!'); 
        audio.play(); 
        userExplosion(); 
        user.hide(); 
        userPlayer = false; 
        userHP = 0; 
        userAP = 0; 
        userScore--; 
      }
    }

    function checkWin() {
      if (victory === 4) {
        userScore++; 
        $('#userScore').text(userScore); 
        alert('You WIN!!'); 
        reset(); 
      } else if (userHP <= 0) {
        setTimeout(alert('You LOSE!!'), 3000);  //Issue with user explostion     
        reset(); 

      }
    }

    function reset() {
      console.log('----RESET----'); 
      user; 
      userStats; 
      victory = 1; 
      defenderStats;
      defender; 
      userPlayer = false; 
      defenderPlayer = false;
      userAP = 0;  
      userHP = 0; 
      defenderHP = 0; 
      defenderCAP = 0;  
      // attribute variables
      hp = []; 
      ap = []; 
      cap = []; 

      $('#userHP').text(userHP); 
      $('#userAP').text(userAP); 
      $('#defenderHP').text(defenderHP); 
      $('#defenderCAP').text(defenderCAP); 

      $('#mechaStats').show(); 
      $('#zordStats').show(); 
      $('#ironStats').show(); 
      $('#gundamStats').show(); 

      $('.characters').show(); 
      $('.mechaCard').prepend($('#mecha')); 
      $('.zordCard').prepend($('#zord')); 
      $('.ironCard').prepend($('#iron')); 
      $('.gundamCard').prepend($('#gundam')); 

      
      //  $('.mechaCard').prepend("<img src='assets/images/mechaGodzilla.png'>"); 

      
    }
    
    ///Explostion functions
    function defenderExplosion() {
      $('.defenderBox').append("<img id='explode' src='../RPG-Game/assets/images/explode.gif' alt ='image' />");
      $('#explode').animate({ opacity: "1"});
      setTimeout(clearExplosion, 2000); 
    }

    function userExplosion() { 
      $('.playerBox').append("<img id='explode' class 'img-responsive' src='../RPG-Game/assets/images/explode.gif' alt ='image' />");
      $('#explode').animate({ opacity: "1"});
      setTimeout(clearExplosion, 2000); 
    }

    function clearExplosion() {
      $('#explode').animate({ opacity: "0"});
      $('#explode').remove(); 
    }


} // END gamePlay()




gamePlay(); 


}); // END Doc Ready()




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
