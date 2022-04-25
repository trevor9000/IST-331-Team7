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


 function myMove() { 
  var elem = document.getElementById("animate");   
  var pos = 76; 

   function movediv()
   {
    if (pos == 166) { 
      document.getElementById('animate').style.display='none';  
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


var id2=null;
 function myMove2() { 
  var elem = document.getElementById("animate2");   
  var pos2 = 96; 
   function movediv(){
    if (pos2 == 166) { 
      document.getElementById('animate2').style.display='none';  
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

function myMove3() { 
  var elem = document.getElementById("animate3");   
  var pos3 = 86; 

   function movediv()
   {
    if (pos3 == 166) { 
      document.getElementById('animate3').style.display='none';  
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

function myMove4() { 
  var elem = document.getElementById("animate4");   
  var pos4 = 96; 

   function movediv()
   {
    if (pos4 == 166) { 
      document.getElementById('animate4').style.display='none';  
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

function myMove5() { 
  var elem = document.getElementById("animate5");   
  var pos5 = 36; 

   function movediv()
   {
    if (pos5 == 166) { 
      document.getElementById('animate5').style.display='none';  
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
function myMove6() { 
  var elem = document.getElementById("animate6");   
  var pos6 = 166; 

   function movediv()
   {
    if (pos6 == 196) { 
      document.getElementById('animate6').style.display='none';  
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
function myMove7() { 
  var elem = document.getElementById("animate7");   
  var pos7 = 166; 

   function movediv()
   {
    if (pos7 == 56) { 
      document.getElementById('animate7').style.display='none';  
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
function myMove8() { 
  var elem = document.getElementById("animate8");   
  var pos8 = 166; 

   function movediv()
   {
    if (pos8 == 46) { 
      document.getElementById('animate8').style.display='none';  
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
function myMove9() { 
  var elem = document.getElementById("animate9");   
  var pos9 = 166; 

   function movediv()
   {
    if (pos9 == 66) { 
      document.getElementById('animate9').style.display='none';  
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
function myMove10() { 
  var elem = document.getElementById("animate10");   
  var pos10 = 166; 

   function movediv()
   {
    if (pos10 == 86) { 
      document.getElementById('animate10').style.display='none';  
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
function myMove11() { 
  var elem = document.getElementById("animate11");   
  var pos11 = 100; 

   function movediv()
   {
    if (pos11 == 150) { 
      document.getElementById('animate11').style.display='none';  
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

function myMove12() { 
  var elem = document.getElementById("animate12");   
  var pos12 = 10; 

   function movediv()
   {
    if (pos12 == 320) { 
      document.getElementById('animate12').style.display='none';  
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
function myMove13() { 
  var elem = document.getElementById("animate13");   
  var pos13 = 20; 

   function movediv()
   {
    if (pos13 == 330) { 
      document.getElementById('animate13').style.display='none';  
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
function myMove14() { 
  var elem = document.getElementById("animate14");   
  var pos14 = 30; 

   function movediv()
   {
    if (pos14 == 340) { 
      document.getElementById('animate14').style.display='none';  
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
function myMove15() { 
  var elem = document.getElementById("animate15");   
  var pos15 = 30; 

   function movediv()
   {
    if (pos15 == 360) { 
      document.getElementById('animate15').style.display='none';  
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
    output(Math.floor(delta / 1000));
    output(new Date().toUTCString());
}, 1000);
 }

