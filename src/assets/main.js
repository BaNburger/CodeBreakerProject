let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer === "" OR attempt === "") {
      setHiddenFields();
    }
}

//implement new functions here

function setHiddenFields() {
  let attempt.value = 0;
  answer.value = Math.floor(Math.random()*10000).toString();
  while (answer.length < 4) {
    answer.value = "0" + answer.value;
  }
}

function setMessage(label) {
  let message.innerHTML = label;
}
