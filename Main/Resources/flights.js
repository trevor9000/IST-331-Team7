
    // Timer 
var timerRate = 1;
var phlX = 310;
var phlY = 530;
var totalSeconds = 0;
var totalMs = 0;
var baseFreq = 1000; 
var timerInterval;

    // Data block

var animationInterval;
var dataBlockInterval;

    // Set time 
    // adapated https://stackoverflow.com/questions/65448862/html-retern-null-count-up-time
    function setTime() {
        totalMs += baseFreq / timerRate;
    
        var flights = document.getElementsByClassName("flight-not-ready");
        for(var i = 0; i < flights.length; i++) {
            if (flights[0].getAttribute("data-startTime") / timerRate <= totalMs) {
                document.getElementById(`list_${flights[0].id}`).remove();
                flights[0].classList.remove("flight-not-ready");
            }
        }
    
        var hoursLabel = document.getElementById("hours");
        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
    
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        hoursLabel.innerHTML = pad(parseInt(totalSeconds / 60 / 60));
    }

    // tested working timer https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    // Rate, Start, Stop
    function changeRate() {
        if(!animationInterval)
            timerRate = document.getElementById('rate').value;
    }
    
    function startSimulation() {
        if(!animationInterval) {
            timerInterval = setInterval(setTime, baseFreq / timerRate);
            animationInterval = setInterval(frame, baseFreq / timerRate);
            dataBlockInterval = setInterval(toggleDataBlock, 2000);
        }
    }
    function resetSimulation() {
        location.reload();
    }

// Calc new x and new y: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
// Used for animations
function frame() {
    var flights = document.querySelectorAll(".flight:not(.flight-not-ready)");

    for(var i = 0; i < flights.length; i++) {
        flights[i].style.position = "absolute";

        var degrees = flights[i].getAttribute('data-heading');
        var rect = flights[i].getBoundingClientRect();

        var posX = rect.left + window.scrollX;
        var posY = rect.top + window.scrollY;

        if ((flights[i].getAttribute("data-endPhl") === "true" && posX <= phlX + 14 && posX >= phlX && posY <= phlY + 14 && posY >= phlY) || (posX < 0 || posY < 0 || posX > 800 || posY > 800)) {
            flights[i].remove();
        } else {
            posX += 2 * (Math.cos(degrees * Math.PI / 180));
            posY += 2 * Math.sin(degrees * Math.PI / 180) * -1;
            flights[i].style.top = posY + "px";
            flights[i].style.left = posX + "px";
        }
    }

    if (flights.length == 0 && document.getElementsByClassName("flight").length == 0) {
        clearInterval(timerInterval);
        clearInterval(animationInterval);
        clearInterval(dataBlockInterval);
    }
}

    // Keyboard input
    function letterPress(letter) {
        var input = document.getElementById("KeyboardInput");
        input.value += letter;
    }
    
    function backspace() {
        var clear = document.getElementById("KeyboardInput").value;
        document.getElementById("KeyboardInput").value = clear.substring(0, clear.length - 1);
    }
    
    function clearInput(){
        var input = document.getElementById("KeyboardInput");
        input.value = "";
        document.getElementById("invalidLabel").style.visibility = "hidden";
    }

    // Keyboard flight controls text-based
    function updateHeading(flightId, heading) {
        var flightDiv = document.getElementById(flightId);
        flightDiv.setAttribute('data-heading', heading);
    }
    
    function updateAltitude(flightId, altitude) {
        var flightDiv = document.getElementById(flightId);
        var altitudeDiv = flightDiv.querySelector('span[name="dbAltitude"]');
    
        altitudeDiv.innerText = altitude;
        flightDiv.setAttribute('data-altitude', altitude);
    }
    
    function updateGroundSpeed(flightId, groundSpeed) {
        var flightDiv = document.getElementById(flightId);
        var groundSpeedDiv = flightDiv.querySelector('span[name="dbGroundSpeed"]');
    
        groundSpeedDiv.innerText = groundSpeed;
        flightDiv.setAttribute('data-groundSpeed', groundSpeed);
    }
    
    function showFlightData(flightId) {
        var flight = document.getElementById(flightId);
    
        document.getElementById("fsTailNumber").innerText = flightId;
        document.getElementById("fsSquawk").innerText = flight.getAttribute("data-squawk");
        document.getElementById("fsDepAirport").innerText = flight.getAttribute("data-depAirport");
        document.getElementById("fsCompleteRoute").innerText = flight.getAttribute("data-depAirport") + "  FIX1  " + flight.getAttribute("data-destination");
    
        document.getElementById("fsAircraft").innerText = flight.getAttribute("data-aircraft");
        document.getElementById("fsFlightPlanId").innerText = flight.getAttribute("data-flightPlanId");
        document.getElementById("fsAltitude").innerText = flight.getAttribute("data-altitude");
        document.getElementById("fsRemarks").innerText = "IFR TRAINING FLIGHT";
    }
    
    function toggleDataBlock() {
        var flights = document.getElementsByClassName("flight");
    
        for(var i = 0; i < flights.length; i++) {
            var db1 = flights[i].querySelector('span[name="data-block-1"]');
            var db2 = flights[i].querySelector('span[name="data-block-2"]');
    
            db1.classList.toggle("data-block-hidden");
            db2.classList.toggle("data-block-hidden");
        }
    }
    
    // Used to enter commands 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
     function parseInput() {
        if(!animationInterval) return;
    
        document.getElementById("invalidLabel").style.visibility = "hidden";
    
        var input = document.getElementById("KeyboardInput").value;
    
        // [__][A___][V___][H___]
        if(input.length != 14) {
            document.getElementById("invalidLabel").style.visibility = "visible";
            return; // Invalid input format
        }
        var tailNum = input.substring(0,2);
        var commands = input.substring(2).match(/.{1,4}/g);
    
        var flight = document.querySelector(`.flight[name="${tailNum}"]`);
    
        for(var i = 0; i < commands.length; i++) {
            var command = commands[i][0];
    
            if(!["A", "V", "H"].includes(command)) {
                document.getElementById("invalidLabel").style.visibility = "visible";
                return; // Invalid command found
            }
    
            var value = commands[i].substring(1, 4);
            switch(command) {
                case "A":
                    updateAltitude(flight.id, value);
                    break;
                case "V":
                    updateGroundSpeed(flight.id, value);
                    break;
                case "H":
                    updateHeading(flight.id, value);
                    break;
            }
        }    
        clearInput();
     }    
    function showLoadedFlights() {     }

     function flightSearchFilter() {
    
     }



     // Old speed commands
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var speed = 1500; //NOTE: Speed (variable shown right above refreshInterval() function modifies the speed of the animation)
		
		var text = null;
		var textDecommand = "";
        function processchange() {
        	textDecommand = document.getElementById("textarea").value;
        }

        function changeAltitude() {
        textDecommand = $("#write").val();
            var option = textDecommand.charAt(0);
        	if(option == "A"){
        
        	textDecommand = textDecommand.substring(2);
			var newHeader = textDecommand.substring(textDecommand.indexOf(' ')+1);
			var oldHeader = textDecommand.substring(0,textDecommand.indexOf(' '));
			var oldInner = document.getElementById(oldHeader).innerHTML;
			document.getElementById(oldHeader).innerHTML =  newHeader +" "+ oldInner.substring(oldInner.indexOf(' ')+1);
 
	}

}

 
 function stopAnim(){
  document.getElementById('animate').style.display='none';
  document.getElementById('animate2').style.display='none';
  document.getElementById('animate3').style.display='none';
  document.getElementById('animate4').style.display='none';
  document.getElementById('animate5').style.display='none';
  document.getElementById('animate6').style.display='none';
  document.getElementById('animate7').style.display='none';
  document.getElementById('animate8').style.display='none';
  document.getElementById('animate9').style.display='none';
  document.getElementById('animate10').style.display='none';
  document.getElementById('animate11').style.display='none';
  document.getElementById('animate12').style.display='none';
  document.getElementById('animate13').style.display='none';
  document.getElementById('animate14').style.display='none';
  document.getElementById('animate15').style.display='none';
 }


 function Timer(){
  var start = Date.now();
	setInterval(function() {
    var delta = Date.now() - start; 
    output(Math.floor(delta / 1000));
    output(new Date().toUTCString());
}, 1000);
 }

