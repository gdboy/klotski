var Klotski = require('./klotski');
var games = require('./games.json');

var klotski = new Klotski();
var result = klotski.solve(games[0].heroes);

console.log(result);
