var answer = 0;
var values = parseInt($("select#first").val()) + parseInt($("select#second").val());
var operation = $("select#function").val();

function calculate() {
  values = [parseInt($("select#first").val()), parseInt($("select#second").val())];
  operation = $("select#function").val();
  switch (operation) {
    case "sum":
      answer = values[0] + values[1];
      break;
    case "product":
      answer = values[0] * values[1];
      break;
  }
  document.getElementById("calculation").innerHTML=String(answer);
}