// grid
var tileWidth = 200;
var w = 3;
var h = 4;

// range of files
// number of files has to be larger than number of tiles
var x = 1;
var y = 12;
var files = [];
for(var i = x; i <= y; i++)
	files.push(i);

var $container = $('<div class="container">').width(w*tileWidth).appendTo('body');
for(var i = 0; i < w*h; i++) {
	var xi = i%w;
	var yi = Math.floor(i/w);
	var pxi = (w < 2 ? 0 : (xi * 100/(w-1)).toPrecision(4)) + '%';
	var pyi = (h < 2 ? 0 : (yi * 100/(h-1)).toPrecision(4)) + '%';
	var bp = '' + pxi + ' ' + pyi;
	$('<div class="tile">')
		.css('background-position', bp)
		.appendTo($container);
}

var $tiles = $('.container .tile');

var perm = Combinatorics.permutation(files, w*h);

$('#c1').click(function() {

var getNextPermutation = function() {
	if(p = perm.next()) {
		console.log(p);
		for(var i = 0; i < p.length; i++) {
			$tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
		}
	}
}

setInterval(getNextPermutation, 1000);


});


//getNextPermutation();


//var w, h, x, y change based on checkbox

//if ($("input[name='1']")[0].checked) {
 //    var w = "3";
 //    var h = "3";
 //    var x = "1";
 //    var y = "9";
 //   }

//    if ($("input[name='2']")[0].checked) {
 //    var w = "2";
//     var h = "3";
 //    var x = "1";
 //    var y = "6";
 //   }

//    else {
 //    var x = "No";
 //   } 

