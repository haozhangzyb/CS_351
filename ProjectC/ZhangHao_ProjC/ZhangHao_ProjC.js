var gl;													// WebGL rendering context -- the 'webGL' object
																// in JavaScript with all its member fcns & data
var g_canvasID;									// HTML-5 'canvas' element ID#

// For multiple VBOs & Shaders:-----------------
worldBox = new VBObox0();		  // Holds VBO & shaders for 3D 'world' ground-plane grid, etc;
GouraudBox = new VBObox1();		  // "  "  for first set of custom-shaded 3D parts
PhongBox = new VBObox2();     // "  "  for second set of custom-shaded 3D parts

// For animation:---------------------
var g_lastMS = Date.now();


// All time-dependent params (you can add more!)
var g_angleSphere  = 100.0;       // current angle, in degrees
var g_angleRate1 =  10.0;        // rotation angle rate, degrees/sec


// For mouse/keyboard:------------------------
var show_VBO_0 = 1;								// 0==Show, 1==Hide VBO0 contents on-screen.
var show_VBO_1 = 1;								// 	"					"			VBO1		"				"				" 
var show_VBO_2 = 0;                //  "         "     VBO2    "       "       "

var matlSelect;

var g_isBlinn = true;
var g_islightOn = true;

var g_lightPosX;
var g_lightPosY;
var g_lightPosZ;

var g_diffuseR;
var g_diffuseG;
var g_diffuseB;

var g_ambientR;
var g_ambientG;
var g_ambientB;

var g_specularR;
var g_specularG;
var g_specularB;

var g_lightPosX_temp;
var g_lightPosY_temp;
var g_lightPosZ_temp;

var g_diffuseR_temp;
var g_diffuseG_temp;
var g_diffuseB_temp;

var g_ambientR_temp;
var g_ambientG_temp;
var g_ambientB_temp;

var g_specularR_temp;
var g_specularG_temp;
var g_specularB_temp;


var g_camX = 12, 
    g_camY = 1.05, 
    g_camZ = 8.3;  
var g_lookX = 12, 
    g_lookY = 1.04, 
    g_lookZ = 7.68; 
var g_Theta = 180;
var g_D = g_lookZ - g_camZ;
var g_camMoveRate = 2.5;


// ! Global camera control
g_worldMatrix = new Matrix4();

function main() {
  //=============================================================================
  // Retrieve the HTML-5 <canvas> element where webGL will draw our pictures:
  g_canvasID = document.getElementById('webgl');	
  // Create the the WebGL rendering context: one giant JavaScript object that
  // contains the WebGL state machine adjusted by large sets of WebGL functions,
  // built-in variables & parameters, and member data. Every WebGL function call
  // will follow this format:  gl.WebGLfunctionName(args);

  // Create the the WebGL rendering context: one giant JavaScript object that
  // contains the WebGL state machine, adjusted by big sets of WebGL functions,
  // built-in variables & parameters, and member data. Every WebGL func. call
  // will follow this format:  gl.WebGLfunctionName(args);
  //SIMPLE VERSION:  gl = getWebGLContext(g_canvasID); 
  // Here's a BETTER version:
  gl = g_canvasID.getContext("webgl", { preserveDrawingBuffer: true});
  // This fancier-looking version disables HTML-5's default screen-clearing, so 
	// that our drawMain() 
	// function will over-write previous on-screen results until we call the 
	// gl.clear(COLOR_BUFFER_BIT); function. )
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
  
  gl.enable(gl.DEPTH_TEST);
  // gl.clearDepth(0.0);       // each time we 'clear' our depth buffer, set all
  //                           // pixel depths to 0.0  (1.0 is DEFAULT)
  // gl.depthFunc(gl.GREATER); // draw a pixel only if its depth value is GREATER
  //                           // than the depth buffer's stored value.
  //                           // (gl.LESS is DEFAULT; reverse it!)
  //------------------end 'REVERSED DEPTH' fix---------------------------------

  // Initialization of three shaders
  worldBox.init(gl);		// VBO + shaders + uniforms + attribs for our 3D world,               
  GouraudBox.init(gl);		//  "		"		"  for 1st kind of shading & lighting
  PhongBox.init(gl);    //  "   "   "  for 2nd kind of shading & lighting

  document.onkeydown = function (ev) {
    mykeyDown(ev);
  };

  gl.clearColor(0.2, 0.2, 0.2, 1);	  // RGBA color for clearing <canvas>
  // ==============ANIMATION============= 
  // Quick tutorials on synchronous, real-time animation in JavaScript/HTML-5: 
  //    https://webglfundamentals.org/webgl/lessons/webgl-animation.html
  //  or
  //  	http://creativejs.com/resources/requestanimationframe/
  //		--------------------------------------------------------
  // Why use 'requestAnimationFrame()' instead of the simpler-to-use
  //	fixed-time setInterval() or setTimeout() functions?  Because:
  //		1) it draws the next animation frame 'at the next opportunity' instead 
  //			of a fixed time interval. It allows your browser and operating system
  //			to manage its own processes, power, & computing loads, and to respond 
  //			to on-screen window placement (to skip battery-draining animation in 
  //			any window that was hidden behind others, or was scrolled off-screen)
  //		2) it helps your program avoid 'stuttering' or 'jittery' animation
  //			due to delayed or 'missed' frames.  Your program can read and respond 
  //			to the ACTUAL time interval between displayed frames instead of fixed
  //		 	fixed-time 'setInterval()' calls that may take longer than expected.
  //------------------------------------
  var tick = function() {		    // locally (within main() only), define our 
                                 // self-calling animation function. 
    requestAnimationFrame(tick, g_canvasID); // browser callback request; wait
                                // til browser is ready to re-draw canvas, then
    timerAll();  // Update all time-varying params, and
    drawAll();                // Draw all the VBObox contents
    };
  //------------------------------------
  tick();                       // do it again!
}


function timerAll() {
  //=============================================================================
  // Find new values for all time-varying parameters used for on-screen drawing
  // use local variables to find the elapsed time.  
  var now = Date.now();         // current time (in milliseconds)
  var elapsed = now - g_lastMS; 
  g_lastMS = now;                  // update for next webGL drawing.

  if(elapsed > 1000.0) {  
    // Browsers won't re-draw 'canvas' element that isn't visible on-screen 
    // (user chose a different browser tab, etc.); when users make the browser
    // window visible again our resulting 'elapsedMS' value has gotten HUGE.
    // Instead of allowing a HUGE change in all our time-dependent parameters,
    // let's pretend that only a nominal 1/30th second passed:          
    elapsed = 1000.0/30.0;
    }
  g_angleSphere = g_angleSphere + (g_angleRate1 * elapsed) / 1000.0;
  g_angleSphere %= 360.0; 
}

function drawAll() {
//=============================================================================
  g_canvasID.width = window.innerWidth - 50;
  g_canvasID.height = window.innerHeight * 0.7;

  matlSelect = document.getElementById('html_matlSelect').value;

  g_lightPosX = document.getElementById('posX').value;
  g_lightPosY = document.getElementById('posY').value;
  g_lightPosZ = document.getElementById('posZ').value;

  g_ambientR = document.getElementById('ambiR').value / 100;
  g_ambientG = document.getElementById('ambiG').value / 100;
  g_ambientB = document.getElementById('ambiB').value / 100;

  g_diffuseR = document.getElementById('diffR').value / 100;
  g_diffuseG = document.getElementById('diffG').value / 100;
  g_diffuseB = document.getElementById('diffB').value / 100;

  g_specularR = document.getElementById('specR').value / 100;
  g_specularG = document.getElementById('specG').value / 100;
  g_specularB = document.getElementById('specB').value / 100;

  
  // Clear on-screen HTML-5 <canvas> object:
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // set world Camera
  g_worldMatrix.setIdentity();
  g_lookX = g_camX + Math.cos(g_Theta * Math.PI / 180);
	g_lookY = g_camY + Math.sin(g_Theta * Math.PI / 180);
  g_lookZ = g_camZ + g_D;
  gl.viewport(0, 0, g_canvasID.width, g_canvasID.height);  
  g_worldMatrix.perspective(30.0, g_canvasID.width/g_canvasID.height, 1.0, 100.0,);    
  g_worldMatrix.lookAt( g_camX,  g_camY,  g_camZ, g_lookX, g_lookY, g_lookZ, 0.0, 0.0, 1.0,);


	if(show_VBO_0 == 1) {	// IF user didn't press HTML button to 'hide' VBO0:
	  worldBox.switchToMe();  // Set WebGL to render from this VBObox.
		worldBox.adjust();		  // Send new values for uniforms to the GPU, and
		worldBox.draw();			  // draw our VBO's contents using our shaders.
  }
  if(show_VBO_1 == 1) { // IF user didn't press HTML button to 'hide' VBO1:
    GouraudBox.switchToMe(); 
    GouraudBox.isReady(); 
  	GouraudBox.adjust();		  // Send new values for uniforms to the GPU, and
  	GouraudBox.draw();			  // draw our VBO's contents using our shaders.
  }
	if(show_VBO_2 == 1) { // IF user didn't press HTML button to 'hide' VBO2:
	  PhongBox.switchToMe();  // Set WebGL to render from this VBObox.
    PhongBox.isReady();
  	PhongBox.adjust();		  // Send new values for uniforms to the GPU, and
  	PhongBox.draw();			  // draw our VBO's contents using our shaders.
  }
}


function VBO1toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO1'.
  if(show_VBO_1 == 1) {
    show_VBO_1 = 0;			// show,
    console.log('Hide shader VBO1');
    show_VBO_2 = 1;
    console.log('Show shader VBO2');
    document.getElementById('toggleShading').innerText = "Switch from Phong Shading to Gouraud Shading";
  } else {
    show_VBO_1 = 1;
    console.log('Show shader VBO1');
    show_VBO_2 = 0;
    console.log('Hide shader VBO2');
    document.getElementById('toggleShading').innerText= "Switch from Gouraud Shading to Phong Shading";
  }
}

function toggleBlinn() {
  if(!g_isBlinn) {
    g_isBlinn = true;
    document.getElementById('toggleBlinn').innerText = "Turn off Blinn-Phong Lighting";
  }
  else {
    g_isBlinn = false;
    document.getElementById('toggleBlinn').innerText = "Turn on Blinn-Phong Lighting";
  }
}

function toggleLight() {
  if(!g_islightOn) {
    g_islightOn = true;
    document.getElementById('posX').value = g_lightPosX_temp;
    document.getElementById('posY').value = g_lightPosY_temp;
    document.getElementById('posZ').value = g_lightPosZ_temp;

    document.getElementById('ambiR').value = g_diffuseR_temp;
    document.getElementById('ambiG').value = g_diffuseG_temp;
    document.getElementById('ambiB').value = g_diffuseB_temp;

    document.getElementById('diffR').value = g_ambientR_temp;
    document.getElementById('diffG').value = g_ambientG_temp;
    document.getElementById('diffB').value = g_ambientB_temp;

    document.getElementById('specR').value = g_specularR_temp;
    document.getElementById('specG').value = g_specularG_temp;
    document.getElementById('specB').value = g_specularB_temp;
    document.getElementById('toggleLight').innerText = "Turn off Light";
  }
  else {
    g_islightOn = false;

    g_lightPosX_temp = document.getElementById('posX').value;
    g_lightPosY_temp = document.getElementById('posY').value;
    g_lightPosZ_temp = document.getElementById('posZ').value;

    g_diffuseR_temp = document.getElementById('ambiR').value;
    g_diffuseG_temp = document.getElementById('ambiG').value;
    g_diffuseB_temp = document.getElementById('ambiB').value;

    g_ambientR_temp = document.getElementById('diffR').value;
    g_ambientG_temp = document.getElementById('diffG').value;
    g_ambientB_temp = document.getElementById('diffB').value;

    g_specularR_temp = document.getElementById('specR').value;
    g_specularG_temp = document.getElementById('specG').value;
    g_specularB_temp = document.getElementById('specB').value;

    document.getElementById('posX').value = 0;
    document.getElementById('posY').value = 0;
    document.getElementById('posZ').value = 0;

    document.getElementById('ambiR').value = 0;
    document.getElementById('ambiG').value = 0;
    document.getElementById('ambiB').value = 0;

    document.getElementById('diffR').value = 0;
    document.getElementById('diffG').value = 0;
    document.getElementById('diffB').value = 0;

    document.getElementById('specR').value = 0;
    document.getElementById('specG').value = 0;
    document.getElementById('specB').value = 0;
    document.getElementById('toggleLight').innerText = "Turn on Light";
  }
}


function mykeyDown(ev) {
  var xd = g_camX - g_lookX;
	var yd = g_camY - g_lookY;
	var zd = g_camZ - g_lookZ;
	var len = Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2) + Math.pow(zd, 2));
	var moveRateRad = g_camMoveRate * Math.PI / 180;

  const A = 65;
  const D = 68;
  const W = 87;
  const S = 83;
  const R = 82;
  const UP_ARROW    = 38;
  const LEFT_ARROW  = 37;
  const RIGHT_ARROW = 39;
  const DOWN_ARROW  = 40;
	
	switch(ev.keyCode) {
		case LEFT_ARROW:
      g_Theta -= g_camMoveRate;
			if(g_Theta > 360) g_Theta -= 360.0;
			if(g_Theta < 0) g_Theta += 360.0;

			break;
		case RIGHT_ARROW: 
			g_Theta += g_camMoveRate;
			if(g_Theta > 360) g_Theta -= 360.0;
			if(g_Theta < 0) g_Theta += 360.0;

			break;
		case UP_ARROW:
			g_D += moveRateRad;
			break;
		case DOWN_ARROW:
			g_D -= moveRateRad;

			break;
    case A:
      var xStrafe = Math.cos((g_Theta + 90) * Math.PI / 180);
      var yStrafe = Math.sin((g_Theta + 90) * Math.PI / 180);
      g_camX += xStrafe / len;
      g_camY += yStrafe / len;

      break;
    case D:
      var xStrafe = Math.cos((g_Theta + 90) * Math.PI / 180);
      var yStrafe = Math.sin((g_Theta + 90) * Math.PI / 180);
      g_camX -= xStrafe / len;
      g_camY -= yStrafe / len;

      break;
		case W: 
			g_lookX -= (xd / len);
			g_lookY -= (yd / len);
			g_lookZ -= (zd / len);
			g_camX -= (xd / len);
			g_camY -= (yd / len);
			g_camZ -= (zd / len);

			break;
		case S: 
			g_lookX += (xd / len);
			g_lookY += (yd / len);
			g_lookZ += (zd / len);
			g_camX += (xd / len);
			g_camY += (yd / len);
			g_camZ += (zd / len);

			break;      
    default:
      // Prevent the unnecessary drawing
      break;
	}
}


