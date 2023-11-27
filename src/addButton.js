


function addButton (menu) {
  //task name, details, date, priority
  const popUpBox = document.createElement('div');
  const title = document.createElement('input');
  const details = document.createElement('input');
  const priority = document.createElement('input');
  const date = document.createElement('input');
  const confirm = document.createElement('button');
  const exit = document.createElement('button');

  popUpBox.setAttribute('id', 'pop-up-box');

    if(menu === 'all'){
      console.log('all');
      title.placeholder = 'Title';
      details.placeholder = 'Details';
      details.type = 'range';


      popUpBox.appendChild(title);
      popUpBox.appendChild(details);
      popUpBox.appendChild(priority);
      popUpBox.appendChild(date);
      popUpBox.appendChild(confirm);
      popUpBox.appendChild(exit);
    }
}

function allTask (){
  //makes the pop up for the task


}









/*menu = tast for All/today, project, notes */

export default addButton;