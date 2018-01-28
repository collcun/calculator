function calculate() {
  let answer = parseInt($("select#first").val()) + parseInt($("select#second").val());
  document.getElementById("calculation").innerHTML=String(answer);
}