let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == "" || attempt.value == "") {
      setHiddenFields();
    }

    if (validateInput(input.value)) {
      attempt.value += 1;
    } else {
      return false;
    }

    if (getResults(input.value)) {
      //winning condition
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } else if (input.value > 9) {
      //loosing condition
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    } else {
      //continue condition
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here

function setHiddenFields() {
  attempt.value = 0;
  answer.value = Math.floor(Math.random()*10000).toString();
  while (answer.value.length < 4) {
    answer.value = "0" + answer.value;
  }
}

function setMessage(label) {
  document.getElementById("message").innerHTML = label;
}

function validateInput(input) {
  if (input.length == 4) {
    return true;
  } else {
    setMessage("guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  let htmlResult = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (i=0; i<input.length; i++) {
    if (input.charAt(i) === answer.value.charAt(i)) {
      htmlResult += '<span class="glyphicon glyphicon-ok"></span>';
      isCorrect += 1;
    } else if (answer.value.indexOf(input.charAt(i)) > -1) {
      htmlResult += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      htmlResult += '<span class="glyphicon glyphicon-remove"></span>';
    }
    htmlResult += "</div></div>";
    document.getElementById("results").innerHTML = htmlResult;
  }
  if (input === answer.value) {
    return true;
  } else {
    return false;
  }
}

function showAnswer(input) {
  let code = document.getElementById("code");
  code.innerHTML = answer.value;
  if (input === true) {
    code.className += " success";
  } else if (input === false) {
    code.className += " failure";
  }
}

function showReplay() {
  document.getElementById("guessing-div").style.display = " none";
  document.getElementById("replay-div").style.display = " block";
}
