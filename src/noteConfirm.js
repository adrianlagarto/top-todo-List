import task from "./Task";

function noteConfirm () {
  //query the input.value
  let popUpBox = document.querySelector('#pop-up-box-1').value;
  let title = document.querySelector('#title').value;
  let details = document.querySelector('#details').value;
  let priority = document.querySelector('#priority').value;
  let date = document.querySelector('#date').value;
  let confirm = document.querySelector('#confirm').value;

  let newTask = new task(title, details, priority, date)

  console.log('qwerty');


}

export default noteConfirm;