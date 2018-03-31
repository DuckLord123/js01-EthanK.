$("#movingDuck1").click( () => {
  alert("You caught me!");
});

$("#showDuckButton").click( () => {
  $("#buttonDuck").show();
});
/*
$("#showDuckButton").click( function(){
  $("#buttonDuck").show();
});
*/
$("#hideDuckButton").click( () => {
  $("#buttonDuck").hide();
});
/*
$("#hideDuckButton").click( function(){
  $("#buttonDuck").hide();
});
*/

$("#formBSubmit").click( () => {
  $("#favoriteBirdText").text($("#favoriteBird").val());
});
// ------------------------------------

var iS = 7 //integer Seven
var sS = "the number 7" //string Seven
var cS = "7" //character Seven

$("#variableButton").click( function(){
  console.log("int + int = " + iS + iS); //a
  console.log(iS + sS); //b
  console.log(iS + cS); //c
  console.log(cS + iS); //d
  console.log(iS + cS + sS); //e
  console.log(iS + iS + sS); //f
  console.log(sS + iS + iS); //g
  console.log(iS - sS); //h
  console.log(iS - cS); //i
  console.log(sS - cS); //j
  console.log(iS == cS); //k
  console.log(iS === cS); //l
});
