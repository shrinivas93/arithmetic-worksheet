$(document).ready(function() {

  $('#generate').click(function() {
    var num1digits = $('#num1').val();
    var num2digits = $('#num2').val();
    var operator = $("input[name='operator']:checked").val();
    var forLabel = $('input:radio:checked').attr("id");
    var operation = $("label[for='" + forLabel + "']").text();
    var printOnGenerate = $('#printOnGenerate').is(":checked");
    $('#title').html(operation + " ({" + num1digits + "} " + operator + " {" + num2digits + "})");
    var problems = $('#problems');
    var problem = $('#problem');
    problems.empty();
    for (var i = 1; i <= 20; i++) {
      var currentProblem = problem.clone().removeAttr("id");
      currentProblem.find('.problemNo').html(i + ")");
      currentProblem.find('.operator').html(operator);
	  var currNum1 = parseInt(getRandomNumber(num1digits));
	  var currNum2 = parseInt(getRandomNumber(num2digits));
	  if(currNum1 < currNum2) {
		  var temp = currNum1;
		  currNum1 = currNum2;
		  currNum2 = temp;
	  }
      currentProblem.find('.num1').html(currNum1);
      currentProblem.find('.num2').html(currNum2);
      currentProblem.appendTo(problems);
      currentProblem.show();
    }
    if (printOnGenerate) {
      print();
    }
  });

  $('#print').click(function() {
    print();
  });

  function getRandomNumber(length) {
    var random = (parseInt(Math.random() * 8) + 1).toString();
    for (var i = 1; i < length; i++) {
      random += parseInt(Math.random() * 9).toString();
    }
    return random;
  }
});