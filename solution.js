﻿function squaresOfMax(a, b, c) {
  // Write a function that takes three numbers and returns
  // sum of squares of two largest
var res;
if(a>=b && c>=b) res =( a*a) + (c*c);
if(b>=a && c>=a) res = (b*b) + (c*c);
if(a>=c && b>=c) res = (a*a) + (b*b);
return res;
}

//---------------------------------------------------------------------------//
function drawTriangle() {
  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######

 var x = "";
  for(var i=0;i<7;i++){
    x = x +"#";
    console.log(x);
  }
}

function fizzBuzz() {
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
        var n1 = 1;
        var n2 = 100;
        for( var i = n1; i <= n2; i++){
          if ( i % 3 == 0 && i % 5 ==0){
            console.log("FizzBuzz");
          }
          else if (i % 3 == 0){
            console.log("Fizz");
          }

          else if ( i % 5 == 0){
            console.log("Buzz");
          }else{
            console.log(i);
          }
        }

}

function chessBoard(size) {
  // Write a program that returns a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.

  var arr = [];
   for (i = 1; i <= size; i++) {
    var a = Array(size + 1).join((i % 2 !== 0) ? " #" : "# ").slice(0, size);
    arr.push(a);
  }
   return arr.join('\n');
 }


module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
