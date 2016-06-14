
  var tileWidth = 0;
          var w = 0;
          var h = 0;
          var x = 0;
          var y = 0;


//clear checked statues
function uncheckAll(){
            $("input[type='checkbox']:checked").prop("checked",false)
            }

var c5 = $('#c1').is(':checked') == true && $('#c2').is(':checked') == true;
var c6 = $('#c2').is(':checked') == true && $('#c3').is(':checked') == true;
var c7 = $('#c3').is(':checked') == true && $('#c3').is(':checked') == true;





    	//
    $(document).ready(function(){
    




      $('#c1, #c2, #c3, #c4').click(function(){
    
//all
          if($('#c1').is(':checked') == true && $('#c2').is(':checked') == true && $('#c3').is(':checked') == true && $('#c4').is(':checked') == true){
          $('#chairs15, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14').css('display', 'none');
          //$('.m-x, #about_btn').css('display','block');
          //$('.m-sub').text('All');
          $('#citem_results').html('24 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    var tileWidth = 150;
                    var w = 4;
                    var h = 6;
                    var x = 1;
                    var y = 24;
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
                        .css ('width','150px')
                        .css ('height','130px')
                        .css ('background-size','400%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);
        }

//3clicks 
          else  if ($('#c1').is(':checked') == true && $('#c2').is(':checked') == true && $('#c3').is(':checked') == true){
          $('#chairs11, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs10, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
          //$('.m-x, #about_btn').css('display','block');
          // $('.m-sub').html('$1&mdash;60');
          $('#citem_results').html('20 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    var tileWidth = 150;
                    var w = 4;
                    var h = 5;
                    var x = 1;
                    var y = 20;
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
                        .css ('width','150px')
                        .css ('height','156px')
                        .css ('background-size','400%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);
        } else if($('#c1').is(':checked') == true && $('#c2').is(':checked') == true && $('#c4').is(':checked') == true){
          $('#chairs12, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs10, #chairs11, #chairs13, #chairs14, #chairs15').css('display', 'none');
          //$('.m-x, #about_btn').css('display','block');
          //$('.m-sub').html('$1&mdash;30,$60&mdash;');
          $('#citem_results').html('22 chairs found.');
        } else if($('#c1').is(':checked') == true && $('#c3').is(':checked') == true && $('#c4').is(':checked') == true){
          $('#chairs13, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs12, #chairs14, #chairs15').css('display', 'none');
          //$('.m-x, #about_btn').css('display','block');
          //$('.m-sub').html('$1&mdash;10,$30&mdash;');
          $('#citem_results').html('14 chairs found.');
        } else if($('#c2').is(':checked') == true &&  $('#c3').is(':checked') == true && $('#c4').is(':checked') == true){
          $('#chairs14, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
          //$('.m-sub').html('$11&mdash;');
          $('#citem_results').html('12 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    var tileWidth = 200;
                    var w = 3;
                    var h = 4;
                    var x = 13;
                    var y = 24;
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
                        .css ('width','200px')
                        .css ('height','200px')
                        .css ('background-size','300%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);
          

            
//2clicks
          }  else if($('#c1').is(':checked') == true && $('#c2').is(':checked') == true) {
          $('#chairs5, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
          //$('.m-x, #about_btn').css('display','block');
          //$('.m-sub').text('$1—30');
          $('#citem_results').html('18 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    var tileWidth = 200;
                    var w = 3;
                    var h = 6;
                    var x = 1;
                    var y = 18;
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
                        .css ('width','200px')
                        .css ('height','130px')
                        .css ('background-size','300%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);
        } else if($('#c2').is(':checked') == true && $('#c3').is(':checked') == true) {
          $('#chairs6, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
          //$('.m-x, #about_btn').css('display','block');
          //$('.m-sub').text('$11—60');
          $('#citem_results').html('8 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    var tileWidth = 300;
                    var w = 2;
                    var h = 4;
                    var x = 13;
                    var y = 20;
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
                        .css ('width','300px')
                        .css ('height','195px')
                        .css ('background-size','200%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);

        } else if($('#c3').is(':checked') == true && $('#c4').is(':checked') == true) {
          $('#chairs7, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
          //$('.m-sub').html('$30&mdash;');
          $('#citem_results').html('6 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    var tileWidth = 300;
                    var w = 2;
                    var h = 3;
                    var x = 19;
                    var y = 24;
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
                        .css ('width','300px')
                        .css ('height','260px')
                        .css ('background-size','200%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);


        } else if($('#c1').is(':checked') == true && $('#c3').is(':checked') == true) {
          $('#chairs8, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
          $('#citem_results').html('14 chairs found.');
         // $('.m-sub').html('$1&mdash;10, <br>$30&mdash;60');
        } else if($('#c1').is(':checked') == true && $('#c4').is(':checked') == true) {
          $('#chairs9, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
         // $('.m-sub').html('$1&mdash;10, <br>$60&mdash;');
         $('#citem_results').html('16 chairs found.');
        } else if($('#c2').is(':checked') == true && $('#c4').is(':checked') == true) {
          $('#chairs10, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
         // $('.m-sub').html('$11&mdash;30, <br>$60&mdash;');
         $('#citem_results').html('10 chairs found.');
        } 


//1clicks
            else if ($('#c1').is(':checked') == true) {
          $('#chairs1, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14,#chairs15' ).css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
          //$('.m-sub').text('$1—10');
          $('#citem_results').html('12 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    var tileWidth = 200;
                    var w = 3;
                    var h = 4;
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
                        .css ('width','200px')
                        .css ('height','200px')
                        .css ('background-size','300%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    var timesRun = 0;
                    mychair = setInterval(function(){
                      timesRun +=1;
                      
                      }, 100);

                    mychair2 = setInterval (getNextPermutation, 100);
                    //print
                    $('#view_btn2').click(function(){
                        $(".folio_img").html('<img src="images_print_frame/12.png" width="23px;">');
                       $('.folio_order').html( timesRun +"&nbsp;" + "/ 479001600");
                      window.print();
                      });


                    
        } else if ($('#c2').is(':checked') == true) {
          $('#chairs2, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14,#chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
         // $('.m-sub').text('$11—30');
         $('#citem_results').html('6 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    var tileWidth = 300;
                    var w = 2;
                    var h = 3;
                    var x = 13;
                    var y = 18;
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
                        .css ('width','300px')
                        .css ('height','260px')
                        .css ('background-size','200%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);

                        $('#view_btn2').click(function(){

                           $('.folio_order').html( p.length +"/ all");
                          window.print();
                          });


        } else if ($('#c3').is(':checked') == true){
          $('#chairs3, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
         // $('.m-sub').text('$30—60');
         $('#citem_results').html('2 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    var tileWidth = 600;
                    var w = 1;
                    var h = 2;
                    var x = 19;
                    var y = 20;
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
                        .css ('width','600px')
                        .css ('height','400px')
                        .css ('background-size','100%')
                        .appendTo($container);
                        
                    }

                    var $tiles = $('.container .tile');

                     var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);

                    //var perm = Combinatorics.permutation(files, w*h);
                    //var timeout = 1000;
                    //var getNextPermutation = function loop() {
                    //  if(p = perm.next()) {
                    //    console.log(p);
                    //    for(var i = 0; i < 4; i++) {
                    //      $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                    //    }

                    //     if(i++ > p.length) {
                    //      console.log("done");
                    //      i = 0;
                    //    }
                       
                        

                    //  }
                     

                   // };

                   // mychair = setInterval(getNextPermutation, 100);
                   // getNextPermutation();
                        
                
                   
                 





        } else if ($('#c4').is(':checked') == true){
          $('#chairs4, .container, .caption, #citem_results, #citem_clear, #citem_resize, #view').css('display', 'block');
          $('#intro, #about, .caption0, #x_btn, #chairs1, #chairs2, #chairs3, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
         // $('.m-x, #about_btn').css('display','block');
         // $('.m-sub').text('$60— ');
         $('#citem_results').html('4 chairs found.');
                    $('.container').detach();
                    $('.tile').detach();
                    var tileWidth = 300;
                    var w = 2;
                    var h = 2;
                    var x = 21;
                    var y = 24;
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
                        .css ('width','300px')
                        .css ('height','400px')
                        .css ('background-size','200%')
                        .appendTo($container);
                    }

                    var $tiles = $('.container .tile');

                    var perm = Combinatorics.permutation(files, w*h);
                    var getNextPermutation = function() {
                      if(p = perm.next()) {
                        console.log(p);
                        for(var i = 0; i < p.length; i++) {
                          $tiles.eq(i).css('background-image', 'url(imgs_selected/' + p[i] + '.jpg)');
                        }
                      }
                    };
                    mychair = setInterval(getNextPermutation, 100);
        } else {

          $('.caption0, #citem_results, #citem_resize').css('display','block');
          $('#x_btn, #citem_clear,  #chairs1, #chairs2, #view, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15, .container').css('display', 'none');
          $('.m-x').css('display','none');
       //   $('#about_btn').css('display','block');
        //  $('.m-sub').text('Search');
         $('#citem_results').html('No chairs found.');
           $('input:checkbox, #c1, #c2, #c3, #c4').attr('checked',false);
                    clearInterval(mychair);
                    clearInterval(mychair2);
                    mychair=0;
                    $( ".container" ).detach();

        }
      });


      $('#about_btn').click(function(){
        $('#about').css('display','block');
        $('#about_btn a').css('color','#a3a3a3');
        $('#menu, .linkli1, .linkli2').css('color','black');
        $('#intro, #l_book, #l_v, #view, .caption0, .caption, #citem_results, #citem_clear, #citem_resize, .caption0, #m-cbox, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13').css('display', 'none');
         $('input:checkbox, #c1, #c2, #c3, #c4').attr('checked',false);
            clearInterval(mychair);
            clearInterval(mychair2);
                    mychair=0;
                    $( ".container" ).detach();

      });

      $('.linkli1').click(function(){
        $('#l_book').css('display','block');
        $('.linkli1').css('color','#a3a3a3');
        $('#about_btn, #menu, .link2').css('color','black');
       // $('.m-sub').text('Search');
        $('#about, #m-cbox, #l_v, #intro, .caption, .caption0, #citem_results, #citem_clear, #citem_resize, #view, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
        $('input:checkbox, #c1, #c2, #c3, #c4').attr('checked',false);
            clearInterval(mychair);
            clearInterval(mychair2);
                    mychair=0;
                    $( ".container" ).detach();

      });

      $('.linkli2').click(function(){
        $('#l_v').css('display','block');
        $('#menu, #about_btn, .linkli1').css('background','none');
       // $('.m-sub').text('Search');
        $('#about, #m-cbox, #l_book, #intro, .caption, .caption0, #citem_results, #citem_clear, #citem_resize, #view, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
        $('input:checkbox, #c1, #c2, #c3, #c4').attr('checked',false);
            clearInterval(mychair);
            clearInterval(mychair2);
                    mychair=0;
                    $( ".container" ).detach();

      });

      $('#citem_clear, #citem_resize').click(function(){
        $('input:checkbox, #c1, #c2, #c3, #c4').attr('checked',false);
        $('.caption0, #citem_results').css('display','block');
        $('#citem_results').html('No chairs found.');
        $('#about, #view, #citem_clear, #citem_resize, #intro, #chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13, #chairs14, #chairs15').css('display', 'none');
      
           clearInterval(mychair);
           clearInterval(mychair2);
                    mychair=0;
                    $( ".container" ).detach();

      });

//pause & play
        


//var clickCount =0;

 //     $('#view_btn1').on('click', function(){
        
 //   clickCount = (clickCount == 2)? 0:clickCount;
        
 //       if(clickCount==0){
 //         clearInterval(mychair);

  //      } else if (clickCount==1){


  //                  mychair = setInterval(getNextPermutation, 100);
         
  //      }

  //      clickCount++;
  //    });








 /*     $('#x_btn').click(function(){
        $('#c1, #c2, #c3, #c4').is(':checked', false);
        $('.m-x').css('display','none');
        $('#about').css('display','none');
        $('#about_btn').css('display','block');
        $('#x_btn').c ss('display','none');
        $('#chairs1, #chairs2, #chairs3, #chairs4, #chairs5, #chairs6, #chairs7, #chairs8, #chairs9, #chairs10, #chairs11, #chairs12, #chairs13').css('display', 'none');
      });
*/

var clickCount =0;

      $('#menu').on('click', function(){
        
    clickCount = (clickCount == 2)? 0:clickCount;
        
        if(clickCount==0){
          $('#m-cbox').css('display','block');
          $('.caption0, #citem_results,  #citem_resize').css('display','block');
          $('#about, #intro, #l_book, #l_v, #citem_clear, #view').css('display','none');
          $('#menu').css('color','#a3a3a3');
          $('#about_btn, .linkli1, .linkli2').css('color','black');
            $('#citem_results').html('No chairs found.');

            //$('.m-arrow').html('<img src="images/dropdown_arrow.png">');
        } else if (clickCount==1){
          $('#m-cbox').css('display','block');
          $('.caption0, #citem_results, #citem_clear, #citem_resize').css('display', 'block');
          $('#about, #intro, #l_book, #l_v, #citem_clear, #view').css('display','none');
          $('#citem_results').html('No chairs found.');
          $('#menu').css('color','#a3a3a3');
          $('#about_btn, .linkli1, .linkli2').css('color','black');
        //   $('#menu').css('background','url("images/bullet_b.svg") no-repeat');
        //  $('#menu').css('background-position','center 15%');
        //  $('#menu').css('background-size','6px 6px');
         //  $('#about_btn, .linkli1, .linkli2').css('background','none');
          //$('.m-arrow').html('<img src="images/dropdown_arrow.png">');
        }

        clickCount++;
      });

    });



//Permutation


