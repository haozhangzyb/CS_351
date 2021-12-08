var floatsPerVertex = 6;

function getSurfNorm(a, b, c) {
  var bSubA = b.sub(a);
  var cSubA = c.sub(a);
  var ans = new Vector3();
  ans = bSubA.cross(cSubA);
  ans = ans.normalize();

  return ans.elements;
}

// import ProjBItems
function makeProjBItems(){
  var c30 = Math.sqrt(0.75); // == cos(30deg) == sqrt(3) / 2
  var sq2 = Math.sqrt(2.0);

  var Norm1 = new Float32Array(getSurfNorm(new Vector3([0.0,     0.0,     sq2]),
                                            new Vector3([c30,    -0.5,     0.0]),
                                            new Vector3([0.0,     1.0,     0.0])));
  var Norm2 = new Float32Array(getSurfNorm(new Vector3([0.0,     0.0,     sq2]),
                                            new Vector3([0.0,     1.0,     0.0]),
                                            new Vector3([-c30,   -0.5,     0.0])));
  var Norm3 = new Float32Array(getSurfNorm(new Vector3([0.0,     0.0,     sq2]),
                                            new Vector3([-c30,   -0.5,     0.0]),
                                            new Vector3([c30,    -0.5,     0.0])));
  var Norm4 = new Float32Array(getSurfNorm(new Vector3([-c30,	  -0.5,     0.0]),
                                            new Vector3([0.0,     1.0,     0.0]),
                                            new Vector3([c30,	  -0.5,     0.0])));
  var Norm5 = new Float32Array(getSurfNorm(new Vector3([c30, -0.5, 0.0]),
                                            new Vector3([0.0,  1.0, 0.0]),
                                            new Vector3([c30, -0.5, -4.0])));
  var Norm6 = new Float32Array(getSurfNorm(new Vector3([c30, -0.5, 0.0]),
                                            new Vector3([0.0,  1.0, 0.0]),
                                            new Vector3([0.0,  1.0, -4.0])));
  var Norm7 = new Float32Array(getSurfNorm(new Vector3([0.0,  1.0, 0.0]),
                                            new Vector3([-c30, -0.5, 0.0]),
                                            new Vector3([0.0,  1.0, -4.0])));
  var Norm8 = new Float32Array(getSurfNorm(new Vector3([0.0,  1.0, 0.0]),
                                            new Vector3([-c30, -0.5, 0.0]),
                                            new Vector3([-c30, -0.5, -4.0])));
  var Norm9 = new Float32Array(getSurfNorm(new Vector3([c30, -0.5, 0.0]),
                                            new Vector3([-c30, -0.5, 0.0]),
                                            new Vector3([c30, -0.5, -4.0])));
  var Norm10 = new Float32Array(getSurfNorm(new Vector3([c30, -0.5, 0.0]),
                                            new Vector3([-c30, -0.5, 0.0]),
                                            new Vector3([-c30, -0.5, -4.0])));
  
  var Norm11 = new Float32Array(getSurfNorm(new Vector3([0.0,    0.0,      -sq2]),
                                            new Vector3([c30,    -0.5,     0.0]),
                                            new Vector3([0.0,     1.0,     0.0])));
  var Norm12 = new Float32Array(getSurfNorm(new Vector3([0.0,      0.0,    -sq2]),
                                            new Vector3([0.0,     1.0,     0.0]),
                                            new Vector3([-c30,   -0.5,     0.0])));
  var Norm13 = new Float32Array(getSurfNorm(new Vector3([0.0,      0.0,      -sq2]),
                                            new Vector3([-c30,	    -0.5,     0.0]),
                                            new Vector3([c30,      -0.5,     0.0])));
  var Norm14 = new Float32Array(getSurfNorm(new Vector3([-c30,	    -0.5,     0.0]),
                                            new Vector3([0.0,        1.0,     0.0]),
                                            new Vector3([c30,	    -0.5,     0.0])));
  var Norm15 = new Float32Array(getSurfNorm(new Vector3([1.0, -1.0, -1.0]),
                                            new Vector3([1.0,  1.0, -1.0]),
                                            new Vector3([1.0,  1.0,  1.0])));
  var Norm15_1 = new Float32Array(getSurfNorm(new Vector3([1.0,  1.0,  1.0]),
                                              new Vector3([1.0, -1.0,  1.0]),
                                              new Vector3([1.0, -1.0, -1.0])));
  var Norm16 = new Float32Array(getSurfNorm(new Vector3([-1.0,  1.0, -1.0]),
                                            new Vector3([-1.0,  1.0,  1.0]),
                                            new Vector3([1.0,  1.0,  1.0])));
  var Norm16_1 = new Float32Array(getSurfNorm(new Vector3([1.0,  1.0,  1.0]),
                                              new Vector3([1.0,  1.0, -1.0]),
                                              new Vector3([-1.0,  1.0, -1.0])));
  var Norm17 = new Float32Array(getSurfNorm(new Vector3([-1.0,  1.0,  1.0]),
                                            new Vector3([-1.0, -1.0,  1.0]),
                                            new Vector3([1.0, -1.0,  1.0])));
  var Norm17_1 = new Float32Array(getSurfNorm(new Vector3([1.0, -1.0,  1.0,]),
                                              new Vector3([1.0,  1.0,  1.0,]),
                                              new Vector3([-1.0,  1.0,  1.0])));
  var Norm18 = new Float32Array(getSurfNorm(new Vector3([-1.0, -1.0,  1.0]),
                                            new Vector3([-1.0,  1.0,  1.0]),
                                            new Vector3([-1.0,  1.0, -1.0])));
  var Norm18_1 = new Float32Array(getSurfNorm(new Vector3([-1.0,  1.0, -1.0]),
                                              new Vector3([-1.0, -1.0, -1.0]),
                                              new Vector3([-1.0, -1.0,  1.0])));
  var Norm19 = new Float32Array(getSurfNorm(new Vector3([1.0, -1.0, -1.0]),
                                            new Vector3([1.0, -1.0,  1.0]),
                                            new Vector3([-1.0, -1.0,  1.0])));
  var Norm19_1 = new Float32Array(getSurfNorm(new Vector3([-1.0, -1.0,  1.0]),
                                              new Vector3([-1.0, -1.0, -1.0]),
                                              new Vector3([1.0, -1.0, -1.0])));                                            
  var Norm20 = new Float32Array(getSurfNorm(new Vector3([1.0,  1.0, -1.0]),
                                            new Vector3([1.0, -1.0, -1.0]),
                                            new Vector3([-1.0, -1.0, -1.0])));

  var Norm21 = new Float32Array(getSurfNorm(new Vector3([-1.0, -1.0, -1.0]),
                                            new Vector3([-1.0,  1.0, -1.0]),
                                            new Vector3([1.0,  1.0, -1.0])));
  var Norm22 = new Float32Array(getSurfNorm(new Vector3([-1.0, -1.0, -1.0]),
                                            new Vector3([-1.0,  1.0, -1.0]),
                                            new Vector3([-3.0,   0.0, 0.0])));
  var Norm23 = new Float32Array(getSurfNorm(new Vector3([-1.0,  1.0,  1.0]),
                                            new Vector3([-1.0, -1.0,  1.0]),
                                            new Vector3([0.0,    0.0, 3.0])));
  var Norm24 = new Float32Array(getSurfNorm(new Vector3([1.0,  1.0,  1.0]),
                                            new Vector3([1.0, -1.0,  1.0]),
                                            new Vector3([3.0,    0.0, 0.0])));
  var Norm25 = new Float32Array(getSurfNorm(new Vector3([1.0,  1.0, -1.0]),
                                            new Vector3([1.0, -1.0, -1.0]),
                                            new Vector3([0.0,   0.0, -3.0])));
  var Norm26 = new Float32Array(getSurfNorm(new Vector3([1.0,  1.0,  1.0]),
                                            new Vector3([-1.0,  1.0,  1.0]),
                                            new Vector3([0.0,   3.0, 0.0])));
  var Norm27 = new Float32Array(getSurfNorm(new Vector3([-1.0, -1.0, -1.0]),
                                            new Vector3([1.0,  -1.0, -1.0]),
                                            new Vector3([0.0,  -3.0, 0.0])));
  var Norm28 = new Float32Array(getSurfNorm(new Vector3([0.0,     0.0,     sq2/2]),
                                            new Vector3([c30,    -0.5,     0.0]),
                                            new Vector3([0.0,     1.0,     0.0])));
  var Norm29 = new Float32Array(getSurfNorm(new Vector3([0.0,     0.0,     sq2/2]),
                                            new Vector3([0.0,     1.0,     0.0]),
                                            new Vector3([-c30,   -0.5,     0.0])));
  var Norm30 = new Float32Array(getSurfNorm(new Vector3([0.0,     0.0,     sq2/2]),
                                            new Vector3([-c30,	  -0.5,     0.0]),
                                            new Vector3([c30,    -0.5,     0.0])));
  var Norm31 = new Float32Array(getSurfNorm(new Vector3([-c30,	  -0.5,     0.0]),
                                            new Vector3([0.0,     1.0,     0.0]),
                                            new Vector3([c30,	  -0.5,     0.0])));

  projBVerts = new Float32Array([
        // Tetrahedron UP
        // Face 1: (left side)
        0.0,     0.0,     sq2,     Norm1[0],     Norm1[1],     Norm1[2], // Node 0
        c30,    -0.5,     0.0,     Norm1[0],     Norm1[1],     Norm1[2], // Node 1
        0.0,     1.0,     0.0,     Norm1[0],     Norm1[1],     Norm1[2], // Node 2
        // Face 2: (right side)
        0.0,     0.0,     sq2,     Norm2[0],     Norm2[1],     Norm2[2], // Node 0
        0.0,     1.0,     0.0,     Norm2[0],     Norm2[1],     Norm2[2], // Node 2
        -c30,   -0.5,     0.0,     Norm2[0],     Norm2[1],     Norm2[2], // Node 3
        // Face 3: (lower side)
        0.0,     0.0,     sq2,     Norm3[0],     Norm3[1],     Norm3[2], // Node 0
        -c30,   -0.5,     0.0,     Norm3[0],     Norm3[1],     Norm3[2], // Node 3
        c30,    -0.5,     0.0,     Norm3[0],     Norm3[1],     Norm3[2], // Node 1
        // Face 4: (base side)
        -c30,	  -0.5,     0.0,     Norm4[0],     Norm4[1],     Norm4[2], // Node 3 
        0.0,     1.0,     0.0,     Norm4[0],     Norm4[1],     Norm4[2], // Node 2
        c30,	  -0.5,     0.0,     Norm4[0],     Norm4[1],     Norm4[2], // Node 1

        // RocketBody
        // Face 5
        c30, -0.5, 0.0,  		  Norm5[0],     Norm5[1],     Norm5[2], 	// Node 1 (base: lower rt; red)
        0.0,  1.0, 0.0,   		Norm5[0],     Norm5[1],     Norm5[2],	// Node 2 (base: +y axis;  grn)
        c30, -0.5, -4.0,  		Norm5[0],     Norm5[1],     Norm5[2], 	// Node 1' (base: lower rt; red)
        // Face 6
        c30, -0.5, 0.0,  		  Norm6[0],     Norm6[1],     Norm6[2], 	// Node 1 (base: lower rt; red)
        0.0,  1.0, 0.0,   		Norm6[0],     Norm6[1],     Norm6[2],	// Node 2 (base: +y axis;  grn)
        0.0,  1.0, -4.0,   		Norm6[0],     Norm6[1],     Norm6[2],	// Node 2' (base: +y axis;  grn)
        // Face 7
        0.0,  1.0, 0.0,   		Norm7[0],     Norm7[1],     Norm7[2],	// Node 2 (base: +y axis;  grn)
        -c30, -0.5, 0.0,  		Norm7[0],     Norm7[1],     Norm7[2], 	// Node 3 (base:lower lft; blue)
        0.0,  1.0, -4.0,   		Norm7[0],     Norm7[1],     Norm7[2],	// Node 2' (base: +y axis;  grn)
        // Face 8
        0.0,  1.0, 0.0,   		Norm8[0],     Norm8[1],     Norm8[2],	// Node 2 (base: +y axis;  grn)
        -c30, -0.5, 0.0,  		Norm8[0],     Norm8[1],     Norm8[2], 	// Node 3 (base:lower lft; blue)
        -c30, -0.5, -4.0,  		Norm8[0],     Norm8[1],     Norm8[2], 	// Node 3' (base:lower lft; blue)
        // Face 9
        c30, -0.5, 0.0,  		  Norm9[0],     Norm9[1],     Norm9[2], 	// Node 1 (base: lower rt; red)
        -c30, -0.5, 0.0,  		Norm9[0],     Norm9[1],     Norm9[2], 	// Node 3 (base:lower lft; blue)
        c30, -0.5, -4.0,  		Norm9[0],     Norm9[1],     Norm9[2], 	// Node 1' (base: lower rt; red)
        // Face 10
        c30, -0.5, 0.0,  		  Norm10[0],     Norm10[1],     Norm10[2], 	// Node 1 (base: lower rt; red)
        -c30, -0.5, 0.0,  		Norm10[0],     Norm10[1],     Norm10[2], 	// Node 3 (base:lower lft; blue)
        -c30, -0.5, -4.0,  		Norm10[0],     Norm10[1],     Norm10[2], 	// Node 3' (base:lower lft; blue)

        //Tetrahedron DOWN
        // Face 11
        0.0,    0.0,      -sq2,		Norm11[0],     Norm11[1],     Norm11[2],	// Node 0'
        c30,    -0.5,     0.0,    Norm11[0],     Norm11[1],     Norm11[2], // Node 1
        0.0,     1.0,     0.0,    Norm11[0],     Norm11[1],     Norm11[2], // Node 2
        // Face 12: (right side)
        0.0,      0.0,    -sq2,   Norm12[0],     Norm12[1],     Norm12[2],	// Node 0'
        0.0,     1.0,     0.0,    Norm12[0],     Norm12[1],     Norm12[2], // Node 2
        -c30,   -0.5,     0.0,    Norm12[0],     Norm12[1],     Norm12[2], // Node 3
        // Face 13: (lower side)
        0.0,      0.0,      -sq2,    Norm13[0],     Norm13[1],     Norm13[2],	// Node 0'
        -c30,	    -0.5,     0.0,     Norm13[0],     Norm13[1],     Norm13[2],// Node 3
        c30,      -0.5,     0.0,     Norm13[0],     Norm13[1],     Norm13[2],// Node 1
        // Face 14: (base side)
        -c30,	    -0.5,     0.0,      Norm14[0],     Norm14[1],     Norm14[2], // Node 3 
        0.0,        1.0,     0.0,     Norm14[0],     Norm14[1],     Norm14[2], // Node 2
        c30,	    -0.5,     0.0,      Norm14[0],     Norm14[1],     Norm14[2], // Node 1

        /* // Cube Nodes  ('node': a 3D location where we specify 1 or more vertices)
        -1.0, -1.0, -1.0, 1.0	// Node 0
        -1.0,  1.0, -1.0, 1.0	// Node 1
        1.0,  1.0, -1.0, 1.0	// Node 2
        1.0, -1.0, -1.0, 1.0	// Node 3

        1.0,  1.0,  1.0, 1.0	// Node 4
        -1.0,  1.0,  1.0, 1.0	// Node 5
        -1.0, -1.0,  1.0, 1.0	// Node 6
        1.0, -1.0,  1.0, 1.0	// Node 7

        3.0, 0.0, 0.0, 1.0  // Node 8
        -3.0, 0.0, 0.0, 1.0  // Node 9
        0.0, 3.0, 0.0, 1.0  // Node 10
        0.0, -3.0, 0.0, 1.0  // Node 11
        0.0, 0.0, 3.0, 1.0  // Node 12
        0.0, 0.0, -3.0, 1.0  // Node 13
        */
        // Face 15: +x face: RED
        1.0, -1.0, -1.0,		Norm15[0],     Norm15[1],     Norm15[2],// Node 3
        1.0,  1.0, -1.0,		Norm15[0],     Norm15[1],     Norm15[2],// Node 2
        1.0,  1.0,  1.0,	  Norm15[0],     Norm15[1],     Norm15[2],  // Node 4
        // Face15_1
        1.0,  1.0,  1.0,	 Norm15_1[0],     Norm15_1[1],     Norm15_1[2],	// Node 4
        1.0, -1.0,  1.0,	 Norm15_1[0],     Norm15_1[1],     Norm15_1[2],	// Node 7
        1.0, -1.0, -1.0,	 Norm15_1[0],     Norm15_1[1],     Norm15_1[2],	// Node 3

        // Face 16: +y face: GREEN
        -1.0,  1.0, -1.0,	  Norm16[0],     Norm16[1],     Norm16[2],	// Node 1
        -1.0,  1.0,  1.0,	  Norm16[0],     Norm16[1],     Norm16[2],	// Node 5
        1.0,  1.0,  1.0,    Norm16[0],     Norm16[1],     Norm16[2],	// Node 4
        // Face16_1
        1.0,  1.0,  1.0,   Norm16_1[0],     Norm16_1[1],     Norm16_1[2],// Node 4
        1.0,  1.0, -1.0,   Norm16_1[0],     Norm16_1[1],     Norm16_1[2],// Node 2 
        -1.0,  1.0, -1.0,	 Norm16_1[0],     Norm16_1[1],     Norm16_1[2],	// Node 1

        // Face 17: +z face: BLUE
        -1.0,  1.0,  1.0,	  Norm17[0],     Norm17[1],     Norm17[2],	// Node 5
        -1.0, -1.0,  1.0,	  Norm17[0],     Norm17[1],     Norm17[2],	// Node 6
        1.0, -1.0,  1.0,    Norm17[0],     Norm17[1],     Norm17[2],	// Node 7
        // Face17_1
        1.0, -1.0,  1.0,   Norm17_1[0],     Norm17_1[1],     Norm17_1[2],// Node 7
        1.0,  1.0,  1.0,   Norm17_1[0],     Norm17_1[1],     Norm17_1[2],// Node 4
        -1.0,  1.0,  1.0,	 Norm17_1[0],     Norm17_1[1],     Norm17_1[2],	// Node 5

        // Face 18: -x face: CYAN
        -1.0, -1.0,  1.0,  Norm18[0],     Norm18[1],     Norm18[2],	// Node 6	
        -1.0,  1.0,  1.0,  Norm18[0],     Norm18[1],     Norm18[2],	// Node 5 
        -1.0,  1.0, -1.0,  Norm18[0],     Norm18[1],     Norm18[2],	// Node 1
        // Face18_1
        -1.0,  1.0, -1.0,  Norm18_1[0],     Norm18_1[1],     Norm18_1[2],	// Node 1
        -1.0, -1.0, -1.0,  Norm18_1[0],     Norm18_1[1],     Norm18_1[2],	// Node 0  
        -1.0, -1.0,  1.0,  Norm18_1[0],     Norm18_1[1],     Norm18_1[2],	// Node 6  

        // Face 19: -y face: MAGENTA
        1.0, -1.0, -1.0,   Norm19[0],     Norm19[1],     Norm19[2],// Node 3
        1.0, -1.0,  1.0,   Norm19[0],     Norm19[1],     Norm19[2],// Node 7
        -1.0, -1.0,  1.0,	 Norm19[0],     Norm19[1],     Norm19[2],	// Node 6
        // Face19_1
        -1.0, -1.0,  1.0,	  Norm19_1[0],     Norm19_1[1],     Norm19_1[2],	// Node 6
        -1.0, -1.0, -1.0,	  Norm19_1[0],     Norm19_1[1],     Norm19_1[2],	// Node 0
        1.0, -1.0, -1.0,    Norm19_1[0],     Norm19_1[1],     Norm19_1[2],	// Node 3

        // Face 20: -z face: YELLOW
        1.0,  1.0, -1.0,   Norm20[0],     Norm20[1],     Norm20[2],// Node 2
        1.0, -1.0, -1.0,   Norm20[0],     Norm20[1],     Norm20[2],// Node 3
        -1.0, -1.0, -1.0,	 Norm20[0],     Norm20[1],     Norm20[2],	// Node 0		

        // wings
        // Face 21:
        -1.0, -1.0, -1.0,	  Norm21[0],     Norm21[1],     Norm21[2],	// Node 0
        -1.0,  1.0, -1.0,	  Norm21[0],     Norm21[1],     Norm21[2],	// Node 1
        1.0,  1.0, -1.0,    Norm21[0],     Norm21[1],     Norm21[2],	// Node 2
        // Face 22:
        -1.0, -1.0, -1.0,	    Norm22[0],     Norm22[1],     Norm22[2],	// Node 0  
        -1.0,  1.0, -1.0,	    Norm22[0],     Norm22[1],     Norm22[2],	// Node 1
        -3.0,   0.0, 0.0,     Norm22[0],     Norm22[1],     Norm22[2],// Node 9
        // Face 23:
        -1.0,  1.0,  1.0,	    Norm23[0],     Norm23[1],     Norm23[2],	// Node 5
        -1.0, -1.0,  1.0,	    Norm23[0],     Norm23[1],     Norm23[2],	// Node 6  
        0.0,    0.0, 3.0,     Norm23[0],     Norm23[1],     Norm23[2],// Node 12
        // Face 24:
        1.0,  1.0,  1.0,      Norm24[0],     Norm24[1],     Norm24[2],	// Node 4
        1.0, -1.0,  1.0,      Norm24[0],     Norm24[1],     Norm24[2],	// Node 7
        3.0,    0.0, 0.0,     Norm24[0],     Norm24[1],     Norm24[2],// Node 8
        // Face 25:
        1.0,  1.0, -1.0,    Norm25[0],     Norm25[1],     Norm25[2],	// Node 2
        1.0, -1.0, -1.0,    Norm25[0],     Norm25[1],     Norm25[2],	// Node 3
        0.0,   0.0, -3.0,   Norm25[0],     Norm25[1],     Norm25[2],   // Node 13
        // Face 26:
        1.0,  1.0,  1.0,    Norm26[0],     Norm26[1],     Norm26[2],	// Node 4
        -1.0,  1.0,  1.0,	  Norm26[0],     Norm26[1],     Norm26[2],	// Node 5
        0.0,   3.0, 0.0,    Norm26[0],     Norm26[1],     Norm26[2],  // Node 10
        // Face 27:
        -1.0, -1.0, -1.0,	  Norm27[0],     Norm27[1],     Norm27[2],	// Node 0
        1.0,  -1.0, -1.0,	  Norm27[0],     Norm27[1],     Norm27[2],	// Node 3  
        0.0,  -3.0, 0.0,    Norm27[0],     Norm27[1],     Norm27[2],// Node 11

        // Triangle nodes
        // Face 28: (left side)
        0.0,     0.0,     sq2/2,    Norm28[0],     Norm28[1],     Norm28[2], // Node 0'
        c30,    -0.5,     0.0,      Norm28[0],     Norm28[1],     Norm28[2], // Node 1
        0.0,     1.0,     0.0,      Norm28[0],     Norm28[1],     Norm28[2], // Node 2
        // Face 29: (right side)
        0.0,     0.0,     sq2/2,    Norm29[0],     Norm29[1],     Norm29[2], // Node 0'
        0.0,     1.0,     0.0,      Norm29[0],     Norm29[1],     Norm29[2], // Node 2
        -c30,   -0.5,     0.0,      Norm29[0],     Norm29[1],     Norm29[2], // Node 3
        // Face 30: (lower side)
        0.0,     0.0,     sq2/2,    Norm30[0],     Norm30[1],     Norm30[2], // Node 0'
        -c30,	  -0.5,     0.0,      Norm30[0],     Norm30[1],     Norm30[2], // Node 3
        c30,    -0.5,     0.0,      Norm30[0],     Norm30[1],     Norm30[2], // Node 1
        // Face 31: (base side)
        -c30,	  -0.5,     0.0,      Norm31[0],     Norm31[1],     Norm31[2], // Node 3 
        0.0,     1.0,     0.0,      Norm31[0],     Norm31[1],     Norm31[2], // Node 2
        c30,	  -0.5,     0.0,      Norm31[0],     Norm31[1],     Norm31[2], // Node 1
  ]);
}

function makeGroundGrid() {

    var xcount = 40;			// # of lines to draw in x,y to make the grid.
    var ycount = 40;		
    var xymax	= 10.0;			// grid size; extends to cover +/-xymax in x and y.
    var xColr = new Float32Array([1.0, 1.0, 0.3]); // bright yellow
    var yColr = new Float32Array([0.5, 1.0, 0.5]); // bright green.
     
    // Create an (global) array to hold this ground-plane's vertices:
    gndVerts = new Float32Array(floatsPerVertex*2*(xcount+ycount));
 
    var xgap = xymax/(xcount-1);		// HALF-spacing between lines in x,y;
    var ygap = xymax/(ycount-1);		// (why half? because v==(0line number/2))

    for(v=0, j=0; v<2*xcount; v++, j+= floatsPerVertex) {
      if(v%2==0) {	// put even-numbered vertices at (xnow, -xymax, 0)
        gndVerts[j  ] = -xymax + (v  )*xgap;	// x
        gndVerts[j+1] = -xymax;								// y
        gndVerts[j+2] = 0.0;									// z
      }
      else {				// put odd-numbered vertices at (xnow, +xymax, 0).
        gndVerts[j  ] = -xymax + (v-1)*xgap;	// x
        gndVerts[j+1] = xymax;								// y
        gndVerts[j+2] = 0.0;									// z
      }
      gndVerts[j+3] = xColr[0];			// red
      gndVerts[j+4] = xColr[1];			// grn
      gndVerts[j+5] = xColr[2];			// blu
    }
    // Second, step thru y values as wqe make horizontal lines of constant-y:
    // (don't re-initialize j--we're adding more vertices to the array)
    for(v=0; v<2*ycount; v++, j+= floatsPerVertex) {
      if(v%2==0) {		// put even-numbered vertices at (-xymax, ynow, 0)
        gndVerts[j  ] = -xymax;								// x
        gndVerts[j+1] = -xymax + (v  )*ygap;	// y
        gndVerts[j+2] = 0.0;									// z
      }
      else {					// put odd-numbered vertices at (+xymax, ynow, 0).
        gndVerts[j  ] = xymax;								// x
        gndVerts[j+1] = -xymax + (v-1)*ygap;	// y
        gndVerts[j+2] = 0.0;									// z
      }
      gndVerts[j+3] = yColr[0];			// red
      gndVerts[j+4] = yColr[1];			// grn
      gndVerts[j+5] = yColr[2];			// blu
    }
}

function makeSphere() {
  var slices = 17;		// # of slices of the sphere along the z axis. >=3 req'd
  var sliceVerts = 17;	// # of vertices around the top edge of the slice
  var sliceAngle = Math.PI / slices;	// lattitude angle spanned by one slice.
  sphVerts = new Float32Array(((slices * 2 * sliceVerts) - 2) * floatsPerVertex);
  var cos0 = 0.0;					// sines,cosines of slice's top, bottom edge.
  var sin0 = 0.0;
  var cos1 = 0.0;
  var sin1 = 0.0;
  var j = 0;							// initialize our array index
  var isLast = 0;
  var isFirst = 1;
  for (s = 0; s < slices; s++) {	// for each slice of the sphere,
      // find sines & cosines for top and bottom of this slice
      if (s == 0) {
          isFirst = 1;	// skip 1st vertex of 1st slice.
          cos0 = 1.0; 	// initialize: start at north pole.
          sin0 = 0.0;
      }
      else {					// otherwise, new top edge == old bottom edge
          isFirst = 0;
          cos0 = cos1;
          sin0 = sin1;
      }								// & compute sine,cosine for new bottom edge.
      cos1 = Math.cos((s + 1) * sliceAngle);
      sin1 = Math.sin((s + 1) * sliceAngle);
      if (s == slices - 1) isLast = 1;	// skip last vertex of last slice.
      for (v = isFirst; v < 2 * sliceVerts - isLast; v++, j += floatsPerVertex) {
          if (v % 2 == 0) {				// put even# vertices at the the slice's top edge
              sphVerts[j] = sin0 * Math.cos(Math.PI * (v) / sliceVerts);
              sphVerts[j + 1] = sin0 * Math.sin(Math.PI * (v) / sliceVerts);
              sphVerts[j + 2] = cos0;
          }
          else { 
              sphVerts[j] = sin1 * Math.cos(Math.PI * (v - 1) / sliceVerts);		// x
              sphVerts[j + 1] = sin1 * Math.sin(Math.PI * (v - 1) / sliceVerts);		// y
              sphVerts[j + 2] = cos1;			
          }
          if (s == 0) {	// finally, set some interesting colors for vertices:

              sphVerts[j + 3] = sin1 * Math.cos(Math.PI * (v - 1) / sliceVerts);
              sphVerts[j + 4] = sin1 * Math.sin(Math.PI * (v - 1) / sliceVerts);
              sphVerts[j + 5] = cos1;
          }
          else if (s == slices - 1) {
              sphVerts[j + 3] = sin1 * Math.cos(Math.PI * (v - 1) / sliceVerts);
              sphVerts[j + 4] = sin1 * Math.sin(Math.PI * (v - 1) / sliceVerts);
              sphVerts[j + 5] = cos1;
          }
          else {
              sphVerts[j + 3] = sin1 * Math.cos(Math.PI * (v - 1) / sliceVerts);
              sphVerts[j + 4] = sin1 * Math.sin(Math.PI * (v - 1) / sliceVerts);
              sphVerts[j + 5] = cos1;
          }

      }
  }
}


function VBObox0() {
	this.VERT_SRC =	//--------------------- VERTEX SHADER source code 
  'precision highp float;\n' +				// req'd in OpenGL ES if we use 'float'
  'uniform mat4 u_ModelMat0;\n' +
  'attribute vec4 a_Pos0;\n' +
  'attribute vec3 a_Colr0;\n'+
  'varying vec3 v_Colr0;\n' +
  //
  'void main() {\n' +
  '  gl_Position = u_ModelMat0 * a_Pos0;\n' +
  '	 v_Colr0 = a_Colr0;\n' +
  ' }\n';

	this.FRAG_SRC = //---------------------- FRAGMENT SHADER source code 
  'precision mediump float;\n' +
  'varying vec3 v_Colr0;\n' +
  'void main() {\n' +
  '  gl_FragColor = vec4(v_Colr0, 1.0);\n' + 
  '}\n';

  this.axisVerts = new Float32Array([
    0.0,     0.0,   0.0,    1.0,    0,    0, //  Red X axis line
    5.0,    0.0,    0.0,    1.0,    0,     0, //

    0.0,    0.0,    0.0,    0,    1.0,    0, //  Green Y axis line
    0.0,    5.0,    0.0,    0,    1.0,    0, //

    0.0,    0.0,    0.0,    0,    0,    1.0, // Blue Z axis line
    0.0,    0.0,    5.0,    0,    0,    1.0
  ]);
  
  makeGroundGrid();

  this.mySiz = gndVerts.length + this.axisVerts.length;

  this.vboContents = new Float32Array(this.mySiz);

  this.gndStart = 0;
  for (i = 0, j = 0; j < gndVerts.length; i++, j++) {
    this.vboContents[i] = gndVerts[j];
  }
  this.axisStart = i;
  for (j = 0; j < this.axisVerts.length; i++, j++) {
    this.vboContents[i] = this.axisVerts[j];
  }

	this.vboVerts = this.vboContents.length / floatsPerVertex;						// # of vertices held in 'vboContents' array
	this.FSIZE = this.vboContents.BYTES_PER_ELEMENT;
  this.vboBytes = this.vboContents.length * this.FSIZE;               
	this.vboStride = this.vboBytes / this.vboVerts; 
  this.vboFcount_a_Pos0 =  3;    // # of floats in the VBO needed to store the
                                // attribute named a_Pos0. (4: x,y,z,w values)
  this.vboFcount_a_Colr0 = 3;   // # of floats for this attrib (r,g,b values) 
  console.assert((this.vboFcount_a_Pos0 +     // check the size of each and
                  this.vboFcount_a_Colr0) *   // every attribute in our VBO
                  this.FSIZE == this.vboStride, // for agreeement with'stride'
                  "Uh oh! VBObox0.vboStride disagrees with attribute-size values!");
	this.vboOffset_a_Pos0 = 0;    // # of bytes from START of vbo to the START
  this.vboOffset_a_Colr0 = this.vboFcount_a_Pos0 * this.FSIZE;    
	this.vboLoc;									// GPU Location for Vertex Buffer Object, 
	this.shaderLoc;								// GPU Location for compiled Shader-program  
	this.a_PosLoc;								// GPU location for 'a_Pos0' attribute
	this.a_ColrLoc;								// GPU location for 'a_Colr0' attribute
	this.ModelMat = new Matrix4();	// Transforms CVV axes to model axes.
	this.u_ModelMatLoc;							// GPU location for u_ModelMat uniform
}

VBObox0.prototype.init = function() {
	this.shaderLoc = createProgram(gl, this.VERT_SRC, this.FRAG_SRC);
	if (!this.shaderLoc) {
    console.log(this.constructor.name + 
    						'.init() failed to create executable Shaders on the GPU. Bye!');
    return;
  }

	gl.program = this.shaderLoc;		// (to match cuon-utils.js -- initShaders())

// b) Create VBO on GPU, fill it------------------------------------------------
	this.vboLoc = gl.createBuffer();	
  if (!this.vboLoc) {
    console.log(this.constructor.name + 
    						'.init() failed to create VBO in GPU. Bye!'); 
    return;
  }

  gl.bindBuffer(gl.ARRAY_BUFFER,	      // GLenum 'target' for this GPU buffer 
  								this.vboLoc);				  // the ID# the GPU uses for this buffer.

  gl.bufferData(gl.ARRAY_BUFFER, 			  // GLenum target(same as 'bindBuffer()')
 					 				this.vboContents, 		// JavaScript Float32Array
  							 	gl.STATIC_DRAW);			// Usage hint.

  this.a_PosLoc = gl.getAttribLocation(this.shaderLoc, 'a_Pos0');
  if(this.a_PosLoc < 0) {
    console.log(this.constructor.name + 
    						'.init() Failed to get GPU location of attribute a_Pos0');
    return -1;	// error exit.
  }
 	this.a_ColrLoc = gl.getAttribLocation(this.shaderLoc, 'a_Colr0');
  if(this.a_ColrLoc < 0) {
    console.log(this.constructor.name + 
    						'.init() failed to get the GPU location of attribute a_Colr0');
    return -1;	// error exit.
  }
  // c2) Find All Uniforms:-----------------------------------------------------
  //Get GPU storage location for each uniform var used in our shader programs: 
	this.u_ModelMatLoc = gl.getUniformLocation(this.shaderLoc, 'u_ModelMat0');
  if (!this.u_ModelMatLoc) { 
    console.log(this.constructor.name + 
    						'.init() failed to get GPU location for u_ModelMat1 uniform');
    return;
  }  
}

VBObox0.prototype.switchToMe = function() {

  gl.useProgram(this.shaderLoc);	
	gl.bindBuffer(gl.ARRAY_BUFFER,	        // GLenum 'target' for this GPU buffer 
										this.vboLoc);			    // the ID# the GPU uses for our VBO.
  gl.vertexAttribPointer(
		this.a_PosLoc,//index == ID# for the attribute var in your GLSL shader pgm;
		this.vboFcount_a_Pos0,// # of floats used by this attribute: 1,2,3 or 4?
		gl.FLOAT,			// type == what data type did we use for those numbers?
		false,				// isNormalized == are these fixed-point values that we need
									//									normalize before use? true or false
		this.vboStride,// Stride == #bytes we must skip in the VBO to move from the
		this.vboOffset_a_Pos0);						
  gl.vertexAttribPointer(this.a_ColrLoc, this.vboFcount_a_Colr0, 
                        gl.FLOAT, false, 
                        this.vboStride, this.vboOffset_a_Colr0);
  							
// --Enable this assignment of each of these attributes to its' VBO source:
  gl.enableVertexAttribArray(this.a_PosLoc);
  gl.enableVertexAttribArray(this.a_ColrLoc);
}

VBObox0.prototype.isReady = function() {
  var isOK = true;

    if(gl.getParameter(gl.CURRENT_PROGRAM) != this.shaderLoc)  {
      console.log(this.constructor.name + 
                  '.isReady() false: shader program at this.shaderLoc not in use!');
      isOK = false;
    }
    if(gl.getParameter(gl.ARRAY_BUFFER_BINDING) != this.vboLoc) {
        console.log(this.constructor.name + 
                '.isReady() false: vbo at this.vboLoc not in use!');
      isOK = false;
    }
    return isOK;
  }

VBObox0.prototype.adjust = function() {
//==============================================================================
// Update the GPU to newer, current values we now store for 'uniform' vars on 
// the GPU; and (if needed) update each attribute's stride and offset in VBO.

  // check: was WebGL context set to use our VBO & shader program?
  if(this.isReady()==false) {
        console.log('ERROR! before' + this.constructor.name + 
  						'.adjust() call you needed to call this.switchToMe()!!');
  }  
  // Adjust values for our uniforms
  this.ModelMat.setIdentity(); // sanity check: clear modelMatrix
  this.ModelMat.set(g_worldMatrix); // use global camera 

  //this.ModelMat.translate(0.4, -0.4, 0.0);
  //this.ModelMat.scale(0.1, 0.1, 0.1)

  //  Transfer new uniforms' values to the GPU:-------------
  // Send  new 'ModelMat' values to the GPU's 'u_ModelMat1' uniform: 
  gl.uniformMatrix4fv(this.u_ModelMatLoc,	// GPU location of the uniform
  										false, 				// use matrix transpose instead?
  										this.ModelMat.elements);	// send data from Javascript.
  // Adjust the attributes' stride and offset (if necessary)
  // (use gl.vertexAttribPointer() calls and gl.enableVertexAttribArray() calls)
}

VBObox0.prototype.draw = function() {
//=============================================================================
// Render current VBObox contents.

  // check: was WebGL context set to use our VBO & shader program?
  if(this.isReady()==false) {
        console.log('ERROR! before' + this.constructor.name + 
  						'.draw() call you needed to call this.switchToMe()!!');
  }  
  // ----------------------------Draw the contents of the currently-bound VBO:
  // gl.drawArrays(gl.LINES, 	    // select the drawing primitive to draw,
  //                 // choices: gl.POINTS, gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP, 
  //                 //          gl.TRIANGLES, gl.TRIANGLE_STRIP, ...
  // 								0, 								// location of 1st vertex to draw;
  // 								this.vboVerts);		// number of vertices to draw on-screen.

  gl.drawArrays(
    gl.LINES, // select the drawing primitive to draw,
    // choices: gl.POINTS, gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP,
    //          gl.TRIANGLES, gl.TRIANGLE_STRIP, ...
    this.gndStart / floatsPerVertex, // location of 1st vertex to draw;
    gndVerts.length / floatsPerVertex
  ); // number of vertices to draw on-screen.
  gl.drawArrays(
    gl.LINES, // use this drawing primitive, and
    gndVerts.length / floatsPerVertex, // start at this vertex number, and
    this.axisVerts.length / floatsPerVertex
  );
}

VBObox0.prototype.reload = function() {
 gl.bufferSubData(gl.ARRAY_BUFFER, 	// GLenum target(same as 'bindBuffer()')
                  0,                  // byte offset to where data replacement
                                      // begins in the VBO.
 					 				this.vboContents);   // the JS source-data array used to fill VBO

}


const glsl = x => x;

function VBObox1() { 
	this.VERT_SRC =	//--------------------- VERTEX SHADER source code 
  glsl` 
  precision highp float;
  precision highp int;

  uniform bool u_isBlinn;
  attribute vec4 a_Pos1;
  attribute vec4 a_Normal;
  varying vec4 v_Position;
  varying vec4 v_Color;
  varying vec3 v_Kd;
  varying vec3 v_Normal;
  uniform vec3 u_eyePosWorld;

  struct LampT {
    vec3 pos;
    vec3 ambi; 
    vec3 diff; 
    vec3 spec; 
  };

  struct MatlT {
    vec3 emit; 
    vec3 ambi; 
    vec3 diff; 
    vec3 spec; 
    int shiny; 
  };

  uniform LampT u_LampSet[1];
  uniform MatlT u_MatlSet[1];
  uniform mat4 u_ModelMatrix, u_NormalMatrix, u_MvpMatrix;  

  void main() {
    gl_Position = u_MvpMatrix * a_Pos1;
    v_Position = u_ModelMatrix * a_Pos1;
    
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    v_Kd = u_MatlSet[0].diff;


    vec3 lightDirection = normalize(u_LampSet[0].pos - v_Position.xyz);
    vec3 eyeDirection = normalize(u_eyePosWorld - v_Position.xyz);
    float nDotL = max(dot(lightDirection, v_Normal), 0.0);
    float spec = 0.0;  

    if(!u_isBlinn) {
      vec3 R = reflect(-lightDirection, v_Normal);
      float specAngle = max(dot(R, eyeDirection), 0.0);
      spec = pow(specAngle, float(u_MatlSet[0].shiny));
    } else {
      vec3 H = normalize(lightDirection + eyeDirection);
      float nDotH = max(dot(H, v_Normal), 0.0);
      spec = pow(nDotH, float(u_MatlSet[0].shiny));
    }
    vec3 emissive = u_MatlSet[0].emit;
    vec3 ambient = u_LampSet[0].ambi * u_MatlSet[0].ambi;
    vec3 diffuse = u_LampSet[0].diff * v_Kd * nDotL;
    vec3 speculr = u_LampSet[0].spec * u_MatlSet[0].spec * spec;

  	v_Color = vec4(emissive + ambient + diffuse + speculr, 1.0);
   }`;

 // SHADED, sphere-like dots:
  this.FRAG_SRC = //---------------------- FRAGMENT SHADER source code 
  glsl`
  #ifdef GL_ES 
  precision mediump float;
  #endif
  varying vec4 v_Color;
  void main() {
    gl_FragColor = v_Color; 
  }`;
  
  makeSphere();
  makeProjBItems();
  
  var mySize = sphVerts.length + projBVerts.length;

  this.vboContents = new Float32Array(mySize);
  sphStart = 0;
  for(i = 0, j = 0; j < sphVerts.length; i++, j++) {
    this.vboContents[i] = sphVerts[j];
  }
  projBStart = i;
  for(j = 0; j < projBVerts.length; i++, j++) {
    this.vboContents[i] = projBVerts[j];
  }
  
	this.vboVerts = this.vboContents.length / floatsPerVertex;							// # of vertices held in 'vboContents' array;
	this.FSIZE = this.vboContents.BYTES_PER_ELEMENT;  
  this.vboBytes = this.vboContents.length * this.FSIZE;               
	this.vboStride = this.vboBytes / this.vboVerts;     
  this.vboFcount_a_Pos1 =  3;    // # of floats in the VBO needed to store the
                                // attribute named a_Pos1. (4: x,y,z,w values)
  this.vboFcount_a_normal = 3;  // # of floats for this attrib (just one!)   
  console.assert(((this.vboFcount_a_Pos1 +     // check the size of each and 
                  this.vboFcount_a_normal) *   // every attribute in our VBO
                  this.FSIZE == this.vboStride), // for agreeement with'stride'
                  "Uh oh! VBObox1.vboStride disagrees with attribute-size values!");
                  
              //----------------------Attribute offsets
	this.vboOffset_a_Pos1 = 0;    //# of bytes from START of vbo to the START
  this.vboOffset_a_Colr1 = (this.vboFcount_a_Pos1) * this.FSIZE;                                
	this.vboLoc;									// GPU Location for Vertex Buffer Object, 
	this.shaderLoc;								// GPU Location for compiled Shader-program  
	this.a_PosLoc;							  // GPU location: shader 'a_Pos1' attribute
  this.a_Normal;              // GPU location: shader 'a_Normal' attribute
  
  this.ModelMatrix = new Matrix4();	// Transforms CVV axes to model axes.
  this.NormalMatrix = new Matrix4();
  this.MvpMatrix = new Matrix4();

  this.u_NormalMatrixLoc;           // GPU location for u_NormalMatrix uniform
  this.u_ModelMatrixLoc;						// GPU location for u_ModelMatrix uniform
  this.u_MvpMatrixLoc;              // GPU location for u_MvpMatrixLoc uniform
  this.u_eyePosWorldLoc;            // GPU location for u_eyePosWorldLoc uniform
  this.u_isBlinnLoc;                // GPU location for u_isBlinnLoc uniform

  this.lamp1 = new LightsT();
  this.matl1 = new Material();
};

VBObox1.prototype.init = function() {
	this.shaderLoc = createProgram(gl, this.VERT_SRC, this.FRAG_SRC);
	if (!this.shaderLoc) {
    console.log(this.constructor.name + 
    						'.init() failed to create executable Shaders on the GPU. Bye!');
    return;
  }
  gl.program = this.shaderLoc;		// (to match cuon-utils.js -- initShaders())
  
// b) Create VBO on GPU, fill it------------------------------------------------
	this.vboLoc = gl.createBuffer();	
  if (!this.vboLoc) {
    console.log(this.constructor.name + 
    						'.init() failed to create VBO in GPU. Bye!'); 
    return;
  }

  gl.bindBuffer(gl.ARRAY_BUFFER,	      // GLenum 'target' for this GPU buffer 
  								this.vboLoc);				  // the ID# the GPU uses for this buffer.

  gl.bufferData(gl.ARRAY_BUFFER, 			  // GLenum target(same as 'bindBuffer()')
 					 				this.vboContents, 		// JavaScript Float32Array
  							 	gl.STATIC_DRAW);			// Usage hint.  

  this.a_PosLoc = gl.getAttribLocation(this.shaderLoc, 'a_Pos1');
  this.a_Normal = gl.getAttribLocation(this.shaderLoc, 'a_Normal');
  // c2) Find All Uniforms:-----------------------------------------------------
  //Get GPU storage location for each uniform var used in our shader programs: 
  this.u_eyePosWorldLoc = gl.getUniformLocation(this.shaderLoc, 'u_eyePosWorld');
  this.u_MvpMatrixLoc = gl.getUniformLocation(this.shaderLoc, 'u_MvpMatrix');
  this.u_ModelMatrixLoc = gl.getUniformLocation(this.shaderLoc, 'u_ModelMatrix');
  this.u_NormalMatrixLoc = gl.getUniformLocation(this.shaderLoc, 'u_NormalMatrix');
  this.u_isBlinnLoc = gl.getUniformLocation(this.shaderLoc, 'u_isBlinn');

  if (!this.u_ModelMatrixLoc || !this.u_MvpMatrixLoc 
  || !this.u_NormalMatrixLoc || !this.u_eyePosWorldLoc) {
    console.log(this.constructor.name + ' failed to get one or more \'matrix\' uniform locations');
  }

  this.lamp1.u_pos = gl.getUniformLocation(this.shaderLoc,  'u_LampSet[0].pos');
  this.lamp1.u_diff = gl.getUniformLocation(this.shaderLoc, 'u_LampSet[0].diff');
  this.lamp1.u_ambi = gl.getUniformLocation(this.shaderLoc, 'u_LampSet[0].ambi');
  this.lamp1.u_spec = gl.getUniformLocation(this.shaderLoc, 'u_LampSet[0].spec');

  if( !this.lamp1.u_pos || !this.lamp1.u_diff 
  || !this.lamp1.u_ambi || !this.lamp1.u_spec) {
    console.log(this.constructor.name + ' failed to get one or more lighting uniform storage locations.');
    return;
  }

  this.matl1.uLoc_Ke = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].emit');
  this.matl1.uLoc_Ka = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].ambi');
  this.matl1.uLoc_Kd = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].diff');
  this.matl1.uLoc_Ks = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].spec');
  this.matl1.uLoc_Kshiny = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].shiny');
  if(!this.matl1.uLoc_Ke || !this.matl1.uLoc_Ka || !this.matl1.uLoc_Kd|| !this.matl1.uLoc_Kshiny) {
    console.log('Failed to get one or more reflectance storage locations');
    return;
  }  
}

VBObox1.prototype.switchToMe = function () {
  gl.useProgram(this.shaderLoc);	

	gl.bindBuffer(gl.ARRAY_BUFFER,	    // GLenum 'target' for this GPU buffer 
										this.vboLoc);			// the ID# the GPU uses for our VBO.

  gl.vertexAttribPointer(
		this.a_PosLoc,//index == ID# for the attribute var in GLSL shader pgm;
		this.vboFcount_a_Pos1, // # of floats used by this attribute: 1,2,3 or 4?
		gl.FLOAT,		  // type == what data type did we use for those numbers?
		false,				// isNormalized == are these fixed-point values that we need
		this.vboStride,// Stride == #bytes we must skip in the VBO to move from the
		this.vboOffset_a_Pos1);						
  gl.vertexAttribPointer(this.a_Normal,this.vboFcount_a_normal, 
                         gl.FLOAT, false, 
							           this.vboStride,	this.vboOffset_a_Colr1);	

  gl.enableVertexAttribArray(this.a_PosLoc);
  gl.enableVertexAttribArray(this.a_Normal);
}

VBObox1.prototype.isReady = function() {
var isOK = true;
  if(gl.getParameter(gl.CURRENT_PROGRAM) != this.shaderLoc)  {
    console.log(this.constructor.name + 
    						'.isReady() false: shader program at this.shaderLoc not in use!');
    isOK = false;
  }
  if(gl.getParameter(gl.ARRAY_BUFFER_BINDING) != this.vboLoc) {
      console.log(this.constructor.name + 
  						'.isReady() false: vbo at this.vboLoc not in use!');
    isOK = false;
  }
  return isOK;
}

VBObox1.prototype.adjust = function() {
  //==============================================================================
  // Update the GPU to newer, current values we now store for 'uniform' vars on 
  // the GPU; and (if needed) update each attribute's stride and offset in VBO.
  
    // check: was WebGL context set to use our VBO & shader program?
    if(this.isReady()==false) {
      console.log('ERROR! before' + this.constructor.name + 
            '.adjust() call you needed to call this.switchToMe()!!');
  }
  
  gl.uniform3f(this.matl1.uLoc_Ke, matlSelect.K_emit[0], matlSelect.K_emit[1], matlSelect.K_emit[2]); 
  gl.uniform3f(this.matl1.uLoc_Ka, matlSelect.K_ambi[0], matlSelect.K_ambi[1], matlSelect.K_ambi[2]); 
  gl.uniform3f(this.matl1.uLoc_Kd, matlSelect.K_diff[0], matlSelect.K_diff[1], matlSelect.K_diff[2]);
  gl.uniform3f(this.matl1.uLoc_Ks, matlSelect.K_spec[0], matlSelect.K_spec[1], matlSelect.K_spec[2]);
  gl.uniform1i(this.matl1.uLoc_Kshiny,  matlSelect.K_shiny); 

  gl.uniform3f(this.lamp1.u_pos,  g_lightPosX, g_lightPosY, g_lightPosZ);
  gl.uniform3f(this.lamp1.u_ambi, g_ambientR, g_ambientG, g_ambientB);
  gl.uniform3f(this.lamp1.u_diff, g_diffuseR, g_diffuseG, g_diffuseB);
  gl.uniform3f(this.lamp1.u_spec, g_specularR, g_specularG, g_specularB);

  gl.uniform1i(this.u_isBlinnLoc, g_isBlinn);
  gl.uniform3f(this.u_eyePosWorldLoc, g_camX, g_camY, g_camZ);
}

VBObox1.prototype.draw = function() {
//=============================================================================
// Send commands to GPU to select and render current VBObox contents.

  // check: was WebGL context set to use our VBO & shader program?
  if(this.isReady()==false) {
        console.log('ERROR! before' + this.constructor.name + 
  						'.draw() call you needed to call this.switchToMe()!!');
  }
  
  // ----------------------------Draw the contents of the currently-bound VBO:
  // draw sphere
  this.MvpMatrix.setIdentity();
  this.ModelMatrix.setIdentity();  
  this.ModelMatrix.setTranslate(3, 0, 1);	
  this.ModelMatrix.rotate(45, 1, 1, 0);
  this.ModelMatrix.rotate(g_angleSphere,0,0,1);	
  this.NormalMatrix.setInverseOf(this.ModelMatrix);  
  this.NormalMatrix.transpose();
  this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
  gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
  gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
  gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements)							
  gl.drawArrays(gl.TRIANGLE_STRIP, sphStart / floatsPerVertex, sphVerts.length / floatsPerVertex);

  // draw windmill/star
  this.MvpMatrix.setIdentity();
  this.ModelMatrix.setIdentity();  
  this.ModelMatrix.setTranslate(3, 3, 1);	
  this.ModelMatrix.rotate(60, 1, 0, 0);
  this.ModelMatrix.rotate(g_angleSphere,0,0,1);	
  this.ModelMatrix.scale(0.3, 0.3, 0.3);  
  this.NormalMatrix.setInverseOf(this.ModelMatrix);  
  this.NormalMatrix.transpose();
  this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
  gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
  gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
  gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements)							
  gl.drawArrays(gl.TRIANGLE_STRIP, projBStart / floatsPerVertex + 42, 54);

  // draw rocketHeadAndBody
  this.MvpMatrix.setIdentity();
  this.ModelMatrix.setIdentity();
  this.ModelMatrix.translate(-2.5, -4.0, 1.0);
	this.ModelMatrix.rotate(-20, 1, 0, 0);
	this.ModelMatrix.rotate(g_angleSphere, 0, 1, 0); 
  this.ModelMatrix.scale(1, 1, 1);  
  this.ModelMatrix.rotate(40, 1, 0, 0);
  this.ModelMatrix.scale(0.5, 0.5, 0.5); 
  this.NormalMatrix.setInverseOf(this.ModelMatrix);
  this.NormalMatrix.transpose();
  this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
  gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
  gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
  gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements)
  gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex, 30);

  // draw rocketEngines
  var c30 = Math.sqrt(0.75); // == cos(30deg) == sqrt(3) / 2
	var sq2 = Math.sqrt(2.0);

    this.ModelMatrix.translate(0, 0, -4.9); 
		this.ModelMatrix.rotate(90, 1, 0, 0);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0); 
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
		gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -1.8, 0); 
    this.ModelMatrix.scale(0.8, 0.8, 0.8);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -1.8, 0); 
    this.ModelMatrix.scale(0.8, 0.8, 0.8);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -1.8, 0); 
    this.ModelMatrix.scale(0.8, 0.8, 0.8);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -2 - sq2, 0); 
    this.ModelMatrix.scale(2, 2, 2);
    this.ModelMatrix.rotate(90, 1, 0, 0);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 0, 1);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 0, 12);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 30, 12);
}


VBObox1.prototype.reload = function() {

 gl.bufferSubData(gl.ARRAY_BUFFER, 	// GLenum target(same as 'bindBuffer()')
                  0,                  // byte offset to where data replacement
                                      // begins in the VBO.
 					 				this.vboContents);   // the JS source-data array used to fill VBO
}


function VBObox2() {
    this.VERT_SRC =	//--------------------- VERTEX SHADER source code 
    glsl` 
    precision highp float;
    precision highp int;

    attribute vec4 a_Pos1;
    attribute vec4 a_Normal;
    varying vec3 v_Kd;
    varying vec4 v_Position;
    varying vec3 v_Normal;
    
    struct MatlT {
      vec3 emit; 
      vec3 ambi; 
      vec3 diff; 
      vec3 spec; 
      int shiny; 
    };    
    
    uniform MatlT u_MatlSet[1];
    uniform mat4 u_ModelMatrix, u_NormalMatrix, u_MvpMatrix;
    
    void main() {
      gl_Position = u_MvpMatrix * a_Pos1;
      v_Position = u_ModelMatrix * a_Pos1;
      v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
      v_Kd = u_MatlSet[0].diff;
    }`;
 
    this.FRAG_SRC = //---------------------- FRAGMENT SHADER source code 
    glsl`
    #ifdef GL_ES 
    precision highp float;
    precision highp int;
    #endif
    
    uniform bool u_isBlinn;    
    varying vec4 v_Position;    
    varying vec3 v_Normal;
    varying vec3 v_Kd;
    uniform vec3 u_eyePosWorld;

    struct LampT {
      vec3 pos;
      vec3 ambi; 
      vec3 diff; 
      vec3 spec; 
    };    
    struct MatlT {
      vec3 emit; 
      vec3 ambi; 
      vec3 diff; 
      vec3 spec; 
      int shiny; 
    };
    uniform LampT u_LampSet[1];
    uniform MatlT u_MatlSet[1];  

    void main() {
      vec3 normal = normalize(v_Normal);
      vec3 lightDirection = normalize(u_LampSet[0].pos - v_Position.xyz);
      vec3 eyeDirection = normalize(u_eyePosWorld - v_Position.xyz);
      
      float nDotL = max(dot(lightDirection, normal), 0.0);
      vec3 H = normalize(lightDirection + eyeDirection);
      float spec = 0.0;

      if(!u_isBlinn) {
        vec3 R = reflect(-lightDirection, normal);
        float specAngle = max(dot(R, eyeDirection), 0.0);
        spec = pow(specAngle, float(u_MatlSet[0].shiny));
      } else {
        float nDotH = max(dot(H, normal), 0.0);
        spec = pow(nDotH, float(u_MatlSet[0].shiny));
      }    
      vec3 emissive = u_MatlSet[0].emit;
      vec3 ambient = u_LampSet[0].ambi * u_MatlSet[0].ambi;
      vec3 diffuse = u_LampSet[0].diff * v_Kd * nDotL;
      vec3 speculr = u_LampSet[0].spec * u_MatlSet[0].spec * spec;
      gl_FragColor = vec4(emissive + ambient + diffuse + speculr, 1.0);
    }`;
    
    makeSphere();
    makeProjBItems();
    
    var mySize = sphVerts.length + projBVerts.length;

    this.vboContents = new Float32Array(mySize);
    sphStart = 0;
    for(i = 0, j = 0; j < sphVerts.length; i++, j++) {
      this.vboContents[i] = sphVerts[j];
    }
    projBStart = i;
    for(j = 0; j < projBVerts.length; i++, j++) {
      this.vboContents[i] = projBVerts[j];
    }  

    this.vboVerts = this.vboContents.length / floatsPerVertex;							// # of vertices held in 'vboContents' array;
    this.FSIZE = this.vboContents.BYTES_PER_ELEMENT;  
    this.vboBytes = this.vboContents.length * this.FSIZE;               
    this.vboStride = this.vboBytes / this.vboVerts;     
    this.vboFcount_a_Pos1 =  3;    // # of floats in the VBO needed to store the
    this.vboFcount_a_normal = 3;  // # of floats for this attrib (just one!)   
    console.assert(((this.vboFcount_a_Pos1 +     // check the size of each and 
                    this.vboFcount_a_normal) *   // every attribute in our VBO
                    this.FSIZE == this.vboStride), // for agreeement with'stride'
                    "Uh oh! VBObox1.vboStride disagrees with attribute-size values!");
    this.vboOffset_a_Pos1 = 0;    //# of bytes from START of vbo to the START
    this.vboOffset_a_Colr1 = (this.vboFcount_a_Pos1) * this.FSIZE;    
    this.vboOffset_a_normal =(this.vboFcount_a_Pos1 +
                                this.vboFcount_a_Colr1) * this.FSIZE;                              
    this.vboLoc;									// GPU Location for Vertex Buffer Object, 
    this.shaderLoc;								// GPU Location for compiled Shader-program
    this.a_Pos1Loc;							  // GPU location: shader 'a_Pos1' attribute
    this.a_Normal;              // GPU location: shader 'a_Normal' attribute
  
    this.ModelMatrix = new Matrix4();	// Transforms CVV axes to model axes.
    this.NormalMatrix = new Matrix4();
    this.MvpMatrix = new Matrix4();

    this.u_NormalMatrixLoc;           // GPU location for u_NormalMatrix uniform
    this.u_ModelMatrixLoc;						// GPU location for u_ModelMatrix uniform
    this.u_MvpMatrixLoc;              // GPU location for u_MvpMatrixLoc uniform
    this.u_eyePosWorldLoc;            // GPU location for u_eyePosWorldLoc uniform
    this.u_isBlinnLoc;                // GPU location for u_isBlinnLoc uniform
    
    this.lamp2 = new LightsT();
    this.matl2 = new Material();   
  };

  
  VBObox2.prototype.init = function() {
    this.shaderLoc = createProgram(gl, this.VERT_SRC, this.FRAG_SRC);
    if (!this.shaderLoc) {
      console.log(this.constructor.name + 
                  '.init() failed to create executable Shaders on the GPU. Bye!');
      return;
    }
    gl.program = this.shaderLoc;		// (to match cuon-utils.js -- initShaders())
    this.vboLoc = gl.createBuffer();	
    if (!this.vboLoc) {
      console.log(this.constructor.name + 
                  '.init() failed to create VBO in GPU. Bye!'); 
      return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,	      // GLenum 'target' for this GPU buffer 
                    this.vboLoc);				  // the ID# the GPU uses for this buffer.
    gl.bufferData(gl.ARRAY_BUFFER, 			  // GLenum target(same as 'bindBuffer()')
                    this.vboContents, 		// JavaScript Float32Array
                    gl.STATIC_DRAW);			// Usage hint.
                     
                     
    this.a_Pos1Loc = gl.getAttribLocation(this.shaderLoc, 'a_Pos1');
    if(this.a_Pos1Loc < 0) {
      console.log(this.constructor.name + 
                  '.init() Failed to get GPU location of attribute a_Pos1');
      return -1;	// error exit.
    }


    this.a_Normal = gl.getAttribLocation(this.shaderLoc, 'a_Normal');
    if(this.a_Normal < 0) {
      console.log(this.constructor.name + 
                  '.init() failed to get the GPU location of attribute a_Normal');
      return -1;	// error exit.
    }
    
    // c2) Find All Uniforms:-----------------------------------------------------
    //Get GPU storage location for each uniform var used in our shader programs:    
    this.u_ModelMatrixLoc = gl.getUniformLocation(this.shaderLoc, 'u_ModelMatrix'); 
    this.u_NormalMatrixLoc = gl.getUniformLocation(this.shaderLoc, 'u_NormalMatrix');
    this.u_MvpMatrixLoc = gl.getUniformLocation(this.shaderLoc, 'u_MvpMatrix'); 
    this.u_isBlinnLoc = gl.getUniformLocation(this.shaderLoc, 'u_isBlinn');
    this.u_eyePosWorldLoc = gl.getUniformLocation(this.shaderLoc, 'u_eyePosWorld');

    if (!this.u_ModelMatrixLoc || !this.u_MvpMatrixLoc 
    || !this.u_NormalMatrixLoc || !this.u_eyePosWorldLoc) {
      console.log(this.constructor.name + ' failed to get one or more \'matrix\' uniform locations');
    }
  
    this.lamp2.u_pos = gl.getUniformLocation(this.shaderLoc,  'u_LampSet[0].pos');
    this.lamp2.u_diff = gl.getUniformLocation(this.shaderLoc, 'u_LampSet[0].diff');
    this.lamp2.u_ambi = gl.getUniformLocation(this.shaderLoc, 'u_LampSet[0].ambi');
    this.lamp2.u_spec = gl.getUniformLocation(this.shaderLoc, 'u_LampSet[0].spec');
    if( !this.lamp2.u_pos || !this.lamp2.u_diff 
    || !this.lamp2.u_ambi || !this.lamp2.u_spec) {
      console.log(this.constructor.name + ' failed to get one or more lighting uniform storage locations.');
      return;
    }
  
    this.matl2.uLoc_Ke = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].emit');
    this.matl2.uLoc_Ka = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].ambi');
    this.matl2.uLoc_Kd = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].diff');
    this.matl2.uLoc_Ks = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].spec');
    this.matl2.uLoc_Kshiny = gl.getUniformLocation(this.shaderLoc, 'u_MatlSet[0].shiny');
    if(!this.matl2.uLoc_Ke || !this.matl2.uLoc_Ka || !this.matl2.uLoc_Kd|| !this.matl2.uLoc_Kshiny) {
      console.log('Failed to get one or more reflectance storage locations');
      return;
    }  
  }
  
   
  VBObox2.prototype.switchToMe = function () {
  gl.useProgram(this.shaderLoc);	

  gl.bindBuffer(gl.ARRAY_BUFFER,	    // GLenum 'target' for this GPU buffer 
                      this.vboLoc);			// the ID# the GPU uses for our VBO.

  gl.vertexAttribPointer(
  		this.a_Pos1Loc,//index == ID# for the attribute var in GLSL shader pgm;
  		this.vboFcount_a_Pos1, // # of floats used by this attribute: 1,2,3 or 4?
  		gl.FLOAT,		  // type == what data type did we use for those numbers?
  		false,				// isNormalized == are these fixed-point values that we need
  									//									normalize before use? true or false
  		this.vboStride,// Stride == #bytes we must skip in the VBO to move from the
  		              // stored attrib for this vertex to the same stored attrib
  		              //  for the next vertex in our VBO.  This is usually the 
  									// number of bytes used to store one complete vertex.  If set 
  									// to zero, the GPU gets attribute values sequentially from 
  									// VBO, starting at 'Offset'.	
  									// (Our vertex size in bytes: 4 floats for pos + 3 for color)
  		this.vboOffset_a_Pos1);						
  		              // Offset == how many bytes from START of buffer to the first
    								// value we will actually use?  (we start with position).
    gl.vertexAttribPointer(this.a_Normal,this.vboFcount_a_normal, 
                           gl.FLOAT, false, 
  							           this.vboStride,	this.vboOffset_a_Colr1);	
    //-- Enable this assignment of the attribute to its' VBO source:
    gl.enableVertexAttribArray(this.a_Pos1Loc);
    gl.enableVertexAttribArray(this.a_Normal);
  }
  
  VBObox2.prototype.isReady = function() {
  var isOK = true;
  
    if(gl.getParameter(gl.CURRENT_PROGRAM) != this.shaderLoc)  {
      console.log(this.constructor.name + 
                  '.isReady() false: shader program at this.shaderLoc not in use!');
      isOK = false;
    }
    if(gl.getParameter(gl.ARRAY_BUFFER_BINDING) != this.vboLoc) {
        console.log(this.constructor.name + 
                '.isReady() false: vbo at this.vboLoc not in use!');
      isOK = false;
    }
    return isOK;
  }
  
  VBObox2.prototype.adjust = function() {
  //==============================================================================
  // Update the GPU to newer, current values we now store for 'uniform' vars on 
  // the GPU; and (if needed) update each attribute's stride and offset in VBO.
  
    // check: was WebGL context set to use our VBO & shader program?
    if(this.isReady()==false) {
      console.log('ERROR! before' + this.constructor.name + 
            '.adjust() call you needed to call this.switchToMe()!!');
  }

  gl.uniform3f(this.matl2.uLoc_Ke, matlSelect.K_emit[0], matlSelect.K_emit[1], matlSelect.K_emit[2]); 
  gl.uniform3f(this.matl2.uLoc_Ka, matlSelect.K_ambi[0], matlSelect.K_ambi[1], matlSelect.K_ambi[2]); 
  gl.uniform3f(this.matl2.uLoc_Kd, matlSelect.K_diff[0], matlSelect.K_diff[1], matlSelect.K_diff[2]);
  gl.uniform3f(this.matl2.uLoc_Ks, matlSelect.K_spec[0], matlSelect.K_spec[1], matlSelect.K_spec[2]);
  gl.uniform1i(this.matl2.uLoc_Kshiny,  matlSelect.K_shiny); 

  gl.uniform3f(this.lamp2.u_pos,  g_lightPosX, g_lightPosY, g_lightPosZ);
  gl.uniform3f(this.lamp2.u_ambi, g_ambientR, g_ambientG, g_ambientB);
  gl.uniform3f(this.lamp2.u_diff, g_diffuseR, g_diffuseG, g_diffuseB);
  gl.uniform3f(this.lamp2.u_spec, g_specularR, g_specularG, g_specularB);
  
  gl.uniform1i(this.u_isBlinnLoc, g_isBlinn);
  gl.uniform3f(this.u_eyePosWorldLoc, g_camX, g_camY, g_camZ);
   
}
  
  VBObox2.prototype.draw = function() {
  //=============================================================================
  // Send commands to GPU to select and render current VBObox contents.
    if(this.isReady()==false) {
          console.log('ERROR! before' + this.constructor.name + 
                '.draw() call you needed to call this.switchToMe()!!');
    }
    
  // ----------------------------Draw the contents of the currently-bound VBO:
  // draw sphere
  this.MvpMatrix.setIdentity();
  this.ModelMatrix.setIdentity();  
  this.ModelMatrix.setTranslate(3, 0, 1);	
  this.ModelMatrix.rotate(45, 1, 1, 0);
  this.ModelMatrix.rotate(g_angleSphere,0,0,1);	
  this.NormalMatrix.setInverseOf(this.ModelMatrix);  
  this.NormalMatrix.transpose();
  this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
  gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
  gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
  gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements)							
  gl.drawArrays(gl.TRIANGLE_STRIP, sphStart / floatsPerVertex, sphVerts.length / floatsPerVertex);

  // draw windmill/star
  this.MvpMatrix.setIdentity();
  this.ModelMatrix.setIdentity();  
  this.ModelMatrix.setTranslate(3, 3, 1);	
  this.ModelMatrix.rotate(60, 1, 0, 0);
  this.ModelMatrix.rotate(g_angleSphere,0,0,1);	
  this.ModelMatrix.scale(0.3, 0.3, 0.3);  
  this.NormalMatrix.setInverseOf(this.ModelMatrix);  
  this.NormalMatrix.transpose();
  this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
  gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
  gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
  gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements)							
  gl.drawArrays(gl.TRIANGLE_STRIP, projBStart / floatsPerVertex + 42, 54);

  // draw rocketHeadAndBody
  this.MvpMatrix.setIdentity();
  this.ModelMatrix.setIdentity();
  this.ModelMatrix.translate(-2.5, -4.0, 1.0);
	this.ModelMatrix.rotate(-20, 1, 0, 0);
	this.ModelMatrix.rotate(g_angleSphere, 0, 1, 0); 
  this.ModelMatrix.scale(1, 1, 1);  
  this.ModelMatrix.rotate(40, 1, 0, 0);
  this.ModelMatrix.scale(0.5, 0.5, 0.5); 
  this.NormalMatrix.setInverseOf(this.ModelMatrix);
  this.NormalMatrix.transpose();
  this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
  gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
  gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
  gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements)
  gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex, 30);

  // draw rocketEngines
  var c30 = Math.sqrt(0.75); // == cos(30deg) == sqrt(3) / 2
	var sq2 = Math.sqrt(2.0);

    this.ModelMatrix.translate(0, 0, -4.9); 
		this.ModelMatrix.rotate(90, 1, 0, 0);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0); 
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
		gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -1.8, 0); 
    this.ModelMatrix.scale(0.8, 0.8, 0.8);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -1.8, 0); 
    this.ModelMatrix.scale(0.8, 0.8, 0.8);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -1.8, 0); 
    this.ModelMatrix.scale(0.8, 0.8, 0.8);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 1, 0);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 42, 48);

    this.ModelMatrix.translate(2.0, -2 - sq2, 0); 
    this.ModelMatrix.scale(2, 2, 2);
    this.ModelMatrix.rotate(90, 1, 0, 0);
    this.ModelMatrix.rotate(g_angleSphere * 10, 0, 0, 1);
    this.NormalMatrix.setInverseOf(this.ModelMatrix);
    this.NormalMatrix.transpose();
    this.MvpMatrix.set(g_worldMatrix).multiply(this.ModelMatrix);
    gl.uniformMatrix4fv(this.u_ModelMatrixLoc, false, this.ModelMatrix.elements);
    gl.uniformMatrix4fv(this.u_NormalMatrixLoc, false, this.NormalMatrix.elements);
    gl.uniformMatrix4fv(this.u_MvpMatrixLoc, false, this.MvpMatrix.elements);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 0, 12);
    gl.drawArrays(gl.TRIANGLES, projBStart / floatsPerVertex + 30, 12);
  }
  
  
  VBObox2.prototype.reload = function() {
  //=============================================================================
  // Over-write current values in the GPU for our already-created VBO: use 
  // gl.bufferSubData() call to re-transfer some or all of our Float32Array 
  // contents to our VBO without changing any GPU memory allocations.
  
   gl.bufferSubData(gl.ARRAY_BUFFER, 	// GLenum target(same as 'bindBuffer()')
                    0,                  // byte offset to where data replacement
                                        // begins in the VBO.
                      this.vboContents);   // the JS source-data array used to fill VBO
  }
  
