var canvas;
var gl;


function prepare(){
	var canvas = document.getElementById("glcanvas");
	gl = initWebGL(canvas);
	
	// only continue if webGL is available and working
	if(gl){
		gl.clearColor(0.0,0.5, 0.0, 1.0);	// set color to be black and fully opaque
		gl.enable(gl.DEPTH_TEST);	//Enable depth test
		gl.depthFunc(gl.LEQUAL);    // Near things obscure far thing
    	gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT); 
	}
}

function initWebGL(canvas){
	gl = null;
  
  	try {
    	// Try to grab the standard context. If it fails, fallback to experimental.
    	// experimental-webgl is a temple name for canvas
    	gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    	gl.viewpoint(0,0, canvas.weight, canvas.height);
  	}catch(e) {
  	}
  
  	// If we don't have a GL context, give up now
  	if (!gl) {
    	alert("Unable to initialize WebGL. Your browser may not support it.");
    	gl = null;
  	}
  
  return gl;
}