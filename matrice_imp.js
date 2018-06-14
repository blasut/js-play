function checkEq(m1, m2) {
  // LOL
  var eq = JSON.stringify(m1)===JSON.stringify(m2);
  console.log("does m1:", m1, "equal m2?", m2, "answer:", eq);
  return eq;
}

function dilateMatrice(cols, rows, matrice, scaleFactor) {
  var new_matrice = Array(cols);
  for (var c = 0; c < cols; c++) {
    new_matrice[c] = Array(rows);
    for (var r = 0; r < rows; r++) {
      console.log("find matrice:", c,r);
      console.log("calc new x:", matrice[c][r].x, "*", scaleFactor);
      console.log("calc new r:", matrice[c][r].y, "*", scaleFactor);
      new_matrice[c][r] = {x: matrice[c][r].x * scaleFactor,
                          y: matrice[c][r].y * scaleFactor};
    }
  }

  return new_matrice;
}

// example from: https://www.varsitytutors.com/hotmath/hotmath_help/topics/scalar-multiplication-of-matrices.html
var scaleFactor = 4;
var smallMatrice = [
  [{x: 2, y: 1},
   {x: 3, y: -2}],
];

dilateMatrice(1, 2, smallMatrice, scaleFactor);

dilateMatrice(1,2, smallMatrice, 4)[0][0].x == 8
dilateMatrice(1,2, smallMatrice, 4)[0][0].y == 4
dilateMatrice(1,2, smallMatrice, 4)[0][1].x == 12
dilateMatrice(1,2, smallMatrice, 4)[0][1].y == -8

checkEq(dilateMatrice(1,2, smallMatrice, 4), [
                                          [{x: 8, y: 4},
                                           {x: 12, y: -8}],
                                        ]);

                                        // https://www.varsitytutors.com/hotmath/hotmath_help/topics/transformation-of-graphs-using-matrices-dilation
                                        var scaleFactor = 2;
var semiSmallMatrice = [
  [{x: 2, y: 1},
   {x: -1, y: 3},
   {x: -3, y: -2}],
];
dilateMatrice(1,3,semiSmallMatrice,2);
checkEq(dilateMatrice(1,3,semiSmallMatrice,2), [
  [{x: 4, y: 2},
   {x: -2, y: 6},
   {x: -6, y: -4}],
]);


var scaleFactor = 2;
var matrice = [
  [{x: 0, y: 0},
   {x: 0, y: 1},
   {x: 0, y: 2}],
  [{x: 1, y: 0},
   {x: 1, y: 1},
   {x: 1, y: 2}],
  [{x: 2, y: 0},
   {x: 2, y: 1},
   {x: 2, y: 2}],
];

dilateMatrice(3,3,matrice,scaleFactor);
dilateMatrice(3,3,matrice,scaleFactor + 1);
dilateMatrice(3,3,matrice,scaleFactor + 2);
dilateMatrice(3,3,matrice,scaleFactor + 3);
dilateMatrice(3,3,matrice,scaleFactor + 4);
