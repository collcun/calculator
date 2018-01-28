var answer = 0;
var values = [0,0];
var operator = "add";
var calculated = false;

var input = 0;

$(document).ready(function() {
  
  $('#operations').children().prop('disabled', true);

  $('#numbers :input').click(function() {
    
    if (calculated == true) {
      $('#viewer').text('');
      calculated = false;
    }

    $('#viewer').append($(this).val());
    $(this).siblings().addBack().prop('disabled', true);
    
    if ( $('#viewer').text().length < 3 ) {
      values[0] = parseInt($(this).val());
      $('#operations').children().prop('disabled', false); 
    } else {
      values[1] = parseInt($(this).val());
    }

  });
  
  $('#operations :input').click(function() {
    
    operator = $(this).val();
    $('#viewer').append($(this).text());
    $(this).siblings().addBack().prop('disabled', true);
    $('#numbers').children().prop('disabled', false);

  });
});

function calculate() {
  switch (operator) {
    case "add":
      answer = values[0] + values[1];
      break;
    case "multiply":
      answer = values[0] * values[1];
      break;
  }

  $('#viewer').text(answer);
  calculated = true;

  $('#numbers').children().prop('disabled', false);
  answer = 0;
  values = [0,0];
}
// function getValues() {
//   values = [parseInt($("select#first").val()), parseInt($("select#second").val())];
// }

// function updateResult() {
//   document.getElementById("viewer").innerHTML=String(answer);
// }

// function add() {
//   getValues();
//   answer = values[0] + values[1];
//   updateResult();
// }

// function multiply() {
//   getValues();
//   answer = values[0] * values[1];
//   updateResult();
// }