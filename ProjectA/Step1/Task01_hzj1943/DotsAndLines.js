//3456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_
// (JT: why the numbers? counts columns, helps me keep 80-char-wide listings)
//
// MultiPoint.js (c) 2012 matsuda
// MultiPointJT.js  MODIFIED for EECS 351-1, Northwestern Univ. Jack Tumblin
//						(converted to 2D->4D; 3 verts --> 6 verts; draw as
//						gl.POINTS and as gl.LINE_LOOP, change color.
//
// Vertex shader program.  
//  Each instance computes all the on-screen attributes for just one VERTEX,
//  specifying that vertex so that it can be used as part of a drawing primitive
//  depicted in the CVV coord. system (+/-1, +/-1, +/-1) that fills our HTML5
//  'canvas' object.
// Each time the shader program runs it gets info for just one vertex from our 
//	Vertex Buffer Object (VBO); specifically, the value of its 'attribute' 
// variable a_Position, is supplied by the VBO.
// 
//   CHALLENGE: Change the program to get different pictures. 
//	See if you can:
//	EASY:
//    --change the background color?
//		--change the dot positions? 
//		--change the size of the dots?
//    --change the color of the dots-and-lines?
//	HARDER: (HINT: read about 'uniform' vars in your textbook...)
//    --change the number of dots?
//    --get all dots in one color, and all lines in another color?
//    --set each dot color individually? (what happens to the line colors?)
//
var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'void main() {\n' +
  '  gl_Position = a_Position;\n' +
  '  gl_PointSize = 10.0;\n' +
  '}\n';

// Fragment shader program
//  Each instance computes all the on-screen attributes for just one PIXEL
var FSHADER_SOURCE =
  'void main() {\n' +
  '  gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);\n' +
  '}\n';

function parseOBJ(text) {
  // because indices are base 1 let's just fill in the 0th data
  const objPositions = [[0, 0, 0]];
  const objNormals = [[0, 0, 0]];

  // same order as `f` indices
  const objVertexData = [
    objPositions,
    objNormals,
  ];

  // same order as `f` indices
  let webglVertexData = [
    [],   // positions
    [],   // normals
  ];

  function newGeometry() {
    // If there is an existing geometry and it's
    // not empty then start a new one.
    if (geometry && geometry.data.position.length) {
      geometry = undefined;
    }
    setGeometry();
  }

  function addVertex(vert) {
    const ptn = vert.split('/');
    ptn.forEach((objIndexStr, i) => {
      if (!objIndexStr) {
        return;
      }
      const objIndex = parseInt(objIndexStr);
      const index = objIndex + (objIndex >= 0 ? 0 : objVertexData[i].length);
      webglVertexData[i].push(...objVertexData[i][index]);
    });
  }

  const keywords = {
    v(parts) {
      objPositions.push(parts.map(parseFloat));
    },
    vn(parts) {
      objNormals.push(parts.map(parseFloat));
    },
    f(parts) {
      const numTriangles = parts.length - 1;
      for (let tri = 0; tri < numTriangles; ++tri) {
        addVertex(parts[0]);
        addVertex(parts[tri + 1]);
      }
    },
  };

  const keywordRE = /(\w*)(?: )*(.*)/;
  const lines = text.split('\n');
  for (let lineNo = 0; lineNo < lines.length; ++lineNo) {
    const line = lines[lineNo].trim();
    if (line === '' || line.startsWith('#')) {
      continue;
    }
    const m = keywordRE.exec(line);
    if (!m) {
      continue;
    }
    const [, keyword, unparsedArgs] = m;
    const parts = line.split(/\s+/).slice(1);
    const handler = keywords[keyword];
    if (!handler) {
      console.warn('unhandled keyword:', keyword);  // eslint-disable-line no-console
      continue;
    }
    handler(parts, unparsedArgs);
  }

  return {
    position: webglVertexData[0],
    normal: webglVertexData[1],
  };
}

function main() {
//==============================================================================
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Write buffer full of vertices to the GPU, and make it available to shaders
  var n = initVertexBuffers(gl);	
  if (n < 0) {
    console.log('Failed to load vertices into the GPU');
    return;
  }

  // Specify the color for clearing <canvas>: (Northwestern purple)
  gl.clearColor(78/255, 42/255, 132/255 , 1.0);	// R,G,B,A (A==opacity)

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw 6 points. see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glDrawArrays.xml

  for (var index = 0; index < n; index += 4){
    gl.drawArrays(gl.LINE_LOOP, index, 4);
  }

  gl.drawArrays(gl.POINTS, 0, 12); 
  // gl.drawArrays(mode, first, count)
			//mode: sets drawing primitive to use. Other valid choices: 
				// gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP, 
				// gl.TRIANGLES, gl.TRIANGLES_STRIP, gl.TRIANGLE_FAN
			// first: index of 1st element of array.
			// count; number of elements to read from the array.
}




function initVertexBuffers(gl) {
//==============================================================================
// first, create an array with all our vertex attribute values:

  var objPositions = new Float32Array([

    0.0,  0.0,  0.0, 1.0, // Node 0
    0.0,  0.0,  1.0, 1.0, // Node 1
    0.0,  1.0,  0.0, 1.0, // Node 2
    0.0,  1.0,  1.0, 1.0, // Node 3
    1.0,  0.0,  0.0, 1.0, // Node 4
    1.0,  0.0,  1.0, 1.0, // Node 5
    1.0,  1.0,  1.0, 1.0, // Node 6
    1.0,  1.0,  0.0, 1.0, // Node 7
     
  ]);

  var vertices = new Float32Array([

    0.0,  0.0,  0.0, 1.0, // Node 0
    0.0,  0.0,  1.0, 1.0, // Node 1
    0.0,  1.0,  1.0, 1.0, // Node 3
    0.0,  1.0,  0.0, 1.0, // Node 2

    0.0,  0.0,  0.0, 1.0, // Node 0
    0.0,  1.0,  0.0, 1.0, // Node 2
    1.0,  1.0,  0.0, 1.0, // Node 7
    1.0,  0.0,  0.0, 1.0, // Node 4

    1.0,  0.0,  0.0, 1.0, // Node 4
    1.0,  0.0,  1.0, 1.0, // Node 5
    1.0,  1.0,  1.0, 1.0, // Node 6
    1.0,  1.0,  0.0, 1.0, // Node 7

    0.0,  0.0,  1.0, 1.0, // Node 1
    0.0,  1.0,  1.0, 1.0, // Node 3
    1.0,  1.0,  1.0, 1.0, // Node 6
    1.0,  0.0,  1.0, 1.0, // Node 5

  ]);


  var n = 16; // The number of vertices

  for (var index = 0; index < vertices.length; index += 1){

    // // scale to 0.5
    // if ((index + 1) % 4 !== 0) {
    //   vertices[index] *= 0.5;
    // }

    // move vertice left
    if ((index + 1) % 4 == 1) {
      vertices[index] -= 0.3;
    }
    // move vertice down
    if ((index + 1) % 4 == 2) {
      vertices[index] -= 0.3;
    }
    
    //move vertices in the front a bit so it looks like 3D
    if ((index + 1) % 4 == 3) {
      if (vertices[index] !== 0) {
        vertices[index - 2] -= 0.3;
        vertices[index - 1] -= 0.3;
      }
    }
  }

  // Then in the Graphics hardware, create a vertex buffer object (VBO)
  var vertexBuffer = gl.createBuffer();	// get it's 'handle'
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // COPY data from our 'vertices' array into the vertex buffer object in GPU:
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  var a_PositionID = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_PositionID < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_PositionID, 4, gl.FLOAT, false, 0, 0);
  // vertexAttributePointer(index, x,y,z,w size=4, type=FLOAT, 
  // NOT normalized, NO stride)

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_PositionID);

  return n;
}
