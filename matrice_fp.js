function checkEq(m1, m2) {
  // LOL
  var eq = JSON.stringify(m1)===JSON.stringify(m2);
  console.log("does m1:", m1, "equal m2?", m2, "answer:", eq);
  return eq;
}
// https://www.varsitytutors.com/hotmath/hotmath_help/topics/scalar-multiplication-of-matrices.html
var matrice = [
  [{x: 'A', y: 'A'},
   {x: 'A', y: 'A'},
   {x: 'A', y: 'A'}],
  [{x: 'B', y: 'B'},
   {x: 'B', y: 'B'},
   {x: 'B', y: 'B'}],
  [{x: 'C', y: 'C'},
   {x: 'C', y: 'C'},
   {x: 'C', y: 'C'}],
];
var matrice = [
  [{x: '0', y: '0'},
   {x: '0', y: '1'},
   {x: '0', y: '2'}],
  [{x: '1', y: '0'},
   {x: '1', y: '1'},
   {x: '1', y: '2'}],
  [{x: '2', y: '0'},
   {x: '2', y: '1'},
   {x: '2', y: '2'}],
];


var dilatePoint = (scaleFactor) => (point) => { return {x: point.x * scaleFactor,
                                                        y: point.y * scaleFactor}}

const map = fn => list => list.map(fn);

map(
  // over each array, map over each array and call dilatePoint on it
  map(dilatePoint(2))
)(matrice)

var dilateMatrice = (matrice, factor) => {
  return map(map(dilatePoint(factor)))(matrice)
}

checkEq(dilateMatrice(smallMatrice, 4), [
  [{x: 8, y: 4},
   {x: 12, y: -8}],
]);
