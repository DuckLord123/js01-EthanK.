document.getElementById("movingDuck1").onclick = function() {alert("You caught me!");};

/*
$("#showDuckButton").click( () => {
  $("#buttonDuck").show();
});
*/
$("#showDuckButton").click( function(){
  $("#buttonDuck").show();
});
/*
$("#hideDuckButton").click( () => {
  $("#buttonDuck").hide();
});
*/
$("#hideDuckButton").click( function(){
  $("#buttonDuck").hide();
});
// ------------------------------------

var iS = 7 //int Seven
var sS = "the number 7" //string Seven
var nSS = "7" //number String Seven

$("#variableButton").click( function(){
  console.log(iS + iS); //a
  console.log(iS + sS); //b
  console.log(iS + nSS); //c
  console.log(nSS + iS); //d
  console.log(iS + nSS + sS); //e
  console.log(iS + iS + sS); //f
  console.log(sS + iS + iS); //g
  console.log(iS - sS); //h
  console.log(iS - nSS); //i
  console.log(sS - nSS); //j
  console.log(iS == nSS); //k
  console.log(iS === nSS); //l
});
