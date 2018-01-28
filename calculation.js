var answer = 0;
var values = 0;

function getValues() {
  values = [parseInt($("select#first").val()), parseInt($("select#second").val())];
}

function updateResult() {
  document.getElementById("result").innerHTML=String(answer);
}

function add() {
  getValues();
  answer = values[0] + values[1];
  updateResult();
}

function multiply() {
  getValues();
  answer = values[0] * values[1];
  updateResult();
}