

function addButton (menu) {
  //task name, details, date, priority
    
  const container = document.querySelector('#container');

  const popUpBox = document.createElement('div');
  const title = document.createElement('input');
  const details = document.createElement('textarea');
  const priority = document.createElement('div');
  const date = document.createElement('input');
  const confirm = document.createElement('button');
  const exit = document.createElement('button');

  popUpBox.setAttribute('class', 'pop-up-box');
  popUpBox.setAttribute('id', 'pop-up-box-1');
  title.setAttribute('id', 'title');
  details.setAttribute('id', 'details');
  priority.setAttribute('id', 'priority');
  date.setAttribute('id', 'date');
  confirm.setAttribute('id', 'confirm');
  exit.setAttribute('id', 'exit');

  title.placeholder = 'Title';
  details.placeholder = 'Details';
  details.rows = '6';
  details.cols = '50';


  date.type = 'date';
  confirm.textContent = 'Confirm';
  confirm.type = 'submit';
  confirm.value = 'Add Book';
  exit.textContent = 'Exit';


    if(menu === 'all'){
      console.log('all');

      const form = document.createElement('form');
      const priorityLow = document.createElement('input');
      const priorityMedium = document.createElement('input');
      const priorityHigh = document.createElement('input');
      const low = document.createElement('label');
      const medium = document.createElement('label');
      const high = document.createElement('label');

      priorityLow.type = 'radio';
      priorityMedium.type = 'radio';
      priorityHigh.type = 'radio';
      priorityLow.name = 'priority';
      priorityMedium.name = 'priority';
      priorityHigh.name = 'priority';
      low.textContent = 'low';
      medium.textContent = 'medium';
      high.textContent = 'high';

      

      priorityLow.setAttribute('id', 'low-input');
      priorityMedium.setAttribute('id', 'medium-input');
      priorityHigh.setAttribute('id', 'high-input');

      title.setAttribute('class', 'info-input');
      details.setAttribute('class', 'info-input');
      priority.setAttribute('class', 'info-input');
      date.setAttribute('class', 'info-input');
      priorityLow.setAttribute('class', 'info-input');
      priorityMedium.setAttribute('class', 'info-input');
      priorityHigh.setAttribute('class', 'info-input');

      priorityLow.value = 'low';
      priorityMedium.value = 'medium';
      priorityHigh.value = 'high';

      low.setAttribute('id', 'low');
      medium.setAttribute('id', 'medium');
      high.setAttribute('id', 'high');


      form.appendChild(low);
      form.appendChild(priorityLow);
      form.appendChild(medium);
      form.appendChild(priorityMedium);
      form.appendChild(high);
      form.appendChild(priorityHigh);

      form.appendChild(title);
      form.appendChild(details);
      form.appendChild(date);
      popUpBox.appendChild(confirm);
      popUpBox.appendChild(exit);

      popUpBox.appendChild(form)
      container.appendChild(popUpBox)
      console.log(form)
    }
}

//function allTask (){
  //makes the pop up for the task


//}

/*menu = task for All/today, project, notes */

export default addButton;