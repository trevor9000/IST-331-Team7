
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


 function myMove() { //change 
  var elem = document.getElementById("animate");  //change  
  var pos = 76; //where element starts

   function movediv()
   {
    if (pos == 166) { //where element heads to
      document.getElementById('animate').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos+=10;
       elem.style.top = pos + "px"; 
       elem.style.left = pos + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}

// z-index: 1; left: 50px; top: 280px; width: 11px; height: 12px;
var id2=null;
 function myMove2() { //change 
  var elem = document.getElementById("animate2");  //change  
  var pos2 = 96; //where element starts
   function movediv(){
    if (pos2 == 166) { //where element heads to
      document.getElementById('animate2').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } else {
	
      pos2+=10;
      elem.style.left = pos2 + "px"; 
      sleep(speed).then(() => {
	  requestAnimationFrame(movediv)

	});


    }
 
  }	
  requestAnimationFrame(movediv)
}

function myMove3() { //change 
  var elem = document.getElementById("animate3");  //change  
  var pos3 = 86; //where element starts

   function movediv()
   {
    if (pos3 == 166) { //where element heads to
      document.getElementById('animate3').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos3+=10;
       elem.style.top = pos3 + "px"; 
       elem.style.left = pos3 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}

function myMove4() { //change 
  var elem = document.getElementById("animate4");  //change  
  var pos4 = 96; //where element starts

   function movediv()
   {
    if (pos4 == 166) { //where element heads to
      document.getElementById('animate4').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos4+=10;
       elem.style.top = pos4 + "px"; 
       elem.style.left = pos4 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}

function myMove5() { //change 
  var elem = document.getElementById("animate5");  //change  
  var pos5 = 36; //where element starts

   function movediv()
   {
    if (pos5 == 166) { //where element heads to
      document.getElementById('animate5').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos5+=10;
       elem.style.top = pos5 + "px"; 
       elem.style.left = pos5 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove6() { //change 
  var elem = document.getElementById("animate6");  //change  
  var pos6 = 166; //where element starts

   function movediv()
   {
    if (pos6 == 196) { //where element heads to
      document.getElementById('animate6').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos6+=10;
       elem.style.top = pos6 + "px"; 
       elem.style.left = pos6 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove7() { //change 
  var elem = document.getElementById("animate7");  //change  
  var pos7 = 166; //where element starts

   function movediv()
   {
    if (pos7 == 56) { //where element heads to
      document.getElementById('animate7').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos7-=10;
       elem.style.top = pos7 + "px"; 
       elem.style.left = pos7 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove8() { //change 
  var elem = document.getElementById("animate8");  //change  
  var pos8 = 166; //where element starts

   function movediv()
   {
    if (pos8 == 46) { //where element heads to
      document.getElementById('animate8').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos8-=20;
       elem.style.top = pos8 + "px"; 
       elem.style.left = pos8 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove9() { //change 
  var elem = document.getElementById("animate9");  //change  
  var pos9 = 166; //where element starts

   function movediv()
   {
    if (pos9 == 66) { //where element heads to
      document.getElementById('animate9').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos9-=20;
       elem.style.top = pos9 + "px"; 
       elem.style.left = pos9 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove10() { //change 
  var elem = document.getElementById("animate10");  //change  
  var pos10 = 166; //where element starts

   function movediv()
   {
    if (pos10 == 86) { //where element heads to
      document.getElementById('animate10').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos10-=20;
       elem.style.top = pos10 + "px"; 
       elem.style.left = pos10 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove11() { //change 
  var elem = document.getElementById("animate11");  //change  
  var pos11 = 100; //where element starts

   function movediv()
   {
    if (pos11 == 150) { //where element heads to
      document.getElementById('animate11').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos11 +=10;
       elem.style.top = pos11 + "px"; 
       elem.style.left = pos11 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}

function myMove12() { //change 
  var elem = document.getElementById("animate12");  //change  
  var pos12 = 10; //where element starts

   function movediv()
   {
    if (pos12 == 320) { //where element heads to
      document.getElementById('animate12').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos12 +=10;
       elem.style.top = pos12 + "px"; 
       elem.style.left = pos12 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove13() { //change 
  var elem = document.getElementById("animate13");  //change  
  var pos13 = 20; //where element starts

   function movediv()
   {
    if (pos13 == 330) { //where element heads to
      document.getElementById('animate13').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos13 +=10;
       elem.style.top = pos13 + "px"; 
       elem.style.left = pos13 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove14() { //change 
  var elem = document.getElementById("animate14");  //change  
  var pos14 = 30; //where element starts

   function movediv()
   {
    if (pos14 == 340) { //where element heads to
      document.getElementById('animate14').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos14 +=10;
       elem.style.top = pos14 + "px"; 
       elem.style.left = pos14 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
}
function myMove15() { //change 
  var elem = document.getElementById("animate15");  //change  
  var pos15 = 30; //where element starts

   function movediv()
   {
    if (pos15 == 360) { //where element heads to
      document.getElementById('animate15').style.display='none';  //change. hides element once animation is completed: https://www.tutorialspoint.com/how-to-hide-show-html-elements-in-javascript
    } 
    else 
    {
      pos15 +=10;
       elem.style.top = pos15 + "px"; 
       elem.style.left = pos15 + "px"; ; 

	  sleep(speed).then(() => {requestAnimationFrame(movediv)});
    }
  }	
  requestAnimationFrame(movediv)
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
    output(Math.floor(delta / 1000)); // in seconds
    // alternatively just show wall clock time:
    output(new Date().toUTCString());
}, 1000);
 }

