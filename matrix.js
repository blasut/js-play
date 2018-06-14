function checkEq(m1, m2) {
  // LOL
  var eq = JSON.stringify(m1)===JSON.stringify(m2);
  console.log("does m1:", m1, "equal m2?", m2, "answer:", eq);
  return eq;
}
// https://www.varsitytutors.com/hotmath/hotmath_help/topics/scalar-multiplication-of-matrices.html
function dilateMatrix(cols, rows, matrix, scaleFactor) {
  var new_matrix = Array(cols);
  for (var i = 0; i < cols; i++) {
    new_matrix[i] = Array(rows);
    for (var y = 0; y < rows; y++) {
      console.log("find matrix:", i,y);
      console.log("calc new x:", matrix[i][y].x, "*", scaleFactor);
      console.log("calc new y:", matrix[i][y].y, "*", scaleFactor);
      new_matrix[i][y] = {x: matrix[i][y].x * scaleFactor,
                          y: matrix[i][y].y * scaleFactor};
    }
  }

  return new_matrix;
}

// example from: https://www.varsitytutors.com/hotmath/hotmath_help/topics/scalar-multiplication-of-matrices.html
var scaleFactor = 4;
var smallMatrix = [
  [{x: 2, y: 1},
   {x: 3, y: -2}],
];

dilateMatrix(1, 2, smallMatrix, scaleFactor);

dilateMatrix(1,2, smallMatrix, 4)[0][0].x == 8
dilateMatrix(1,2, smallMatrix, 4)[0][0].y == 4
dilateMatrix(1,2, smallMatrix, 4)[0][1].x == 12
dilateMatrix(1,2, smallMatrix, 4)[0][1].y == -8

checkEq(dilateMatrix(1,2, smallMatrix, 4), [
  [{x: 8, y: 4},
   {x: 12, y: -8}],
]);

// https://www.varsitytutors.com/hotmath/hotmath_help/topics/transformation-of-graphs-using-matrices-dilation
var scaleFactor = 2;
var semiSmallMatrix = [
  [{x: 2, y: 1},
   {x: -1, y: 3},
   {x: -3, y: -2}],
];
dilateMatrix(1,3,semiSmallMatrix,2);
checkEq(dilateMatrix(1,3,semiSmallMatrix,2), [
  [{x: 4, y: 2},
   {x: -2, y: 6},
   {x: -6, y: -4}],
]);


var scaleFactor = 2;
var matrix = [
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

dilateMatrix(3,3,matrix,scaleFactor);
dilateMatrix(3,3,matrix,scaleFactor + 1);
dilateMatrix(3,3,matrix,scaleFactor + 2);
dilateMatrix(3,3,matrix,scaleFactor + 3);
dilateMatrix(3,3,matrix,scaleFactor + 4);
