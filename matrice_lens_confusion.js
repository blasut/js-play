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

// helpers
const pipe = (fn,...fns) => (...args) => fns.reduce( (acc, f) => f(acc), fn(...args));
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
var prop = (prop) => (obj) => { return obj[prop]; }
var assoc = (prop) => (value, obj) => { return Object.assign({}, obj, {[prop]: value})}
prop('x', {x: 'a'})
assoc('x', 'b', {x: 'a'})

var makePoint = (x,y) => { return {x: x, y: y}}

var lens = (getter, setter) => {
  return ({
    get: obj => getter(obj),
    set: (val, obj) => setter(val, obj),
  })
}
var view = (lens, obj) => { return lens.get(obj) }
//var set = (lens, val, obj) => { return lens.set(val, obj) }
var set = (lens) => (val) => (obj) => { return lens.set(val, obj) }

var xLens = lens(prop('x'), assoc('x'))
var yLens = lens(prop('y'), assoc('y'))

var assocIndex = (index) => (value, obj) => { return obj.map((item, i) => { if(i == index) { return value; } return item }) };


var lensIndex = (index) => lens(prop(index), assoc(index));
var matriceLens = (r,c) => lens(
  (obj) => prop(c)(prop(r)(obj)),
  (val, obj) => assocIndex(r)(assocIndex(c)(val, prop(r)(obj)), obj),
);

var updatePoint = (x,y) => () => {return {x: x, y: y}}
var point = (x,y) => {return {x: x, y: y}}
var over = lens => fn => obj => set(lens)(fn(view(lens, obj)))(obj)


var dilatePoint = (scaleFactor) => (point) => { return {x: point.x * scaleFactor,
                                                        y: point.y * scaleFactor}}

const map = fn => list => list.map(fn);

map(
  // over each array, map over each array and call dilatePoint on it
  map(dilatePoint(2))
)(matrice)


var scaleFactor = 4;
var smallMatrice = [
  [{x: 2, y: 1},
   {x: 3, y: -2}],
];
// over each array, map over each array and call dilatePoint on it

var dilateMatrice = (matrice, factor) => {
  return map(map(dilatePoint(factor)))(matrice)
}

checkEq(dilateMatrice(smallMatrice, 4), [
  [{x: 8, y: 4},
   {x: 12, y: -8}],
]);






















//// DEBUG

var col = lensIndex(0);
var coordinate = matriceLens(1,1)

var new_matrice = over(coordinate)(updatePoint(0,0))(matrice)
console.log(
  set(coordinate)(updatePoint(0,0))(matrice),
  set(coordinate)(makePoint(0,0))(matrice),
  set(coordinate)(updatePoint(0,0)(view(coordinate, matrice)))(matrice),
  over(coordinate)(updatePoint(5,5))(new_matrice),
)

compose(
  over(matriceLens(0,0))(updatePoint(3,3)),
  over(matriceLens(1,1))(updatePoint(6,6)),
  over(matriceLens(1,1))(updatePoint(5,5)),
  over(matriceLens(2,2))(updatePoint(6,6)),
)(matrice)

compose(
  over(matriceLens(0,0))(updatePoint(3,3)),
  over(matriceLens(1,1))(updatePoint(4,4)),
  over(matriceLens(1,1))(updatePoint(9,9)),
  over(matriceLens(2,2))(updatePoint(5,5)),
  over(matriceLens(2,1))(updatePoint(5,4)),
  over(matriceLens(2,0))(updatePoint(5,3)),
)(matrice)

over(matriceLens(2,1))(updatePoint(4,4))(matrice)

console.log(
  view(col, matrice),
  view(coordinate, matrice),
  updatePoint(0,0),
  set(coordinate)(makePoint(0,0))(matrice),
  over(coordinate)(updatePoint(0,0))(matrice),
)

var log = fn => (val) => { console.log("val", val); return fn(val); }

compose(
  compose(over(matriceLens(1,0))(updatePoint(0,0))),
  compose(over(matriceLens(2,0))(updatePoint(0,0))),
)(matrice)


console.log(
  "all positions",
  view(matriceLens(0,0), matrice),
  view(matriceLens(0,1), matrice),
  view(matriceLens(0,2), matrice),
  view(matriceLens(1,0), matrice),
  view(matriceLens(1,1), matrice),
  view(matriceLens(1,2), matrice),
  view(matriceLens(2,0), matrice),
  view(matriceLens(2,1), matrice),
  view(matriceLens(2,2), matrice),
)

// works
over(matriceLens(2,2))(updatePoint(5,5))( over(coordinate)(updatePoint(0,0))(matrice) )

console.log(
  view(matriceLens(0,1), matrice),
  view(matriceLens(1,1), matrice),
  view(matriceLens(2,1), matrice),
  view(matriceLens(1,2), matrice),
  over(matriceLens(2,1))(updatePoint(5,5))(matrice),
  over(matriceLens(1,2))(updatePoint(5,5))(matrice),
)

