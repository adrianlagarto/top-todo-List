import task from "./Task";

function noteConfirm () {
  //query the input.value
  let popUpBox = document.querySelector('div').value;
  let title = document.querySelector('input').value;
  let details = document.querySelector('textarea').value;
  let priority = document.querySelector('div').value;
  let date = document.querySelector('input').value;
  let confirm = document.querySelector('button').value;
  let exit = document.querySelector('button').value;

  let newTask = new task(title, details, priority, date)

}

