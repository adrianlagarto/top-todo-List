import addButton from "./addButton";
import task from "./Task";

let allTaskList = [];

const allTab = () => {
  const main = document.querySelector('#main');
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');
  pageContent.textContent = 'All Tab!!!';


  //renderAll();

  /*Add task button pop-up*/
  const addBtn = document.createElement('button');
  addBtn.textContent = '+'
  pageContent.appendChild(addBtn)
  addBtn.addEventListener('click', () => {
    addButton('all');
    
    const pressConfirm = document.querySelector('#confirm');
    const pressExit = document.querySelector('#exit');
  
    pressConfirm.addEventListener('click', () => {
      //gather the input data, then remove the 
      //noteConfirm();
      
      const container = document.querySelector('#container');
      const popUpBox = document.querySelector('#pop-up-box-1');
      let title = (document.querySelector('#title')).value;
      let details = (document.querySelector('#details')).value;
      let date = (document.querySelector('#date')).value;
      let inputs = document.querySelectorAll('.info-input');

      if(title == '')return

      let newTask = new task(title, details, date)


        inputs.forEach(input => input.value = '');
        allTaskList.push(newTask);
        console.log(allTaskList)
        renderAll();
        
        container.removeChild(popUpBox);

      pageContent.appendChild(addBtn);

      //console.log(allTaskList)
      console.log('gathered input!!');
    })
  
    pressExit.addEventListener('click', () => {
      const container = document.querySelector('#container');
      const popUpBox = document.querySelector('.pop-up-box');
      container.removeChild(popUpBox)
    })
  })

  renderAll();

function renderAll(){


    pageContent.innerHTML = '';
    pageContent.appendChild(addBtn);
    console.log('rennnnnnnnn');

      main.appendChild(pageContent);
    for(let i = 0; i < allTaskList.length; i++){
      let todo = allTaskList[i];
      /*new task div */

      const cardContainer = document.createElement('div');

      const crossTask = document.createElement('input');//checkbox;
      const titleDiv = document.createElement('div');
      const detailsDiv = document.createElement('div');
      const dateDiv = document.createElement('div');
      const editIcon = document.createElement('div');
      const priorityIcon = document.createElement('div');
      const removeIcon = document.createElement('div');

      //attribute
      cardContainer.setAttribute('id', 'card-container')

      crossTask.type = 'checkbox'

      titleDiv.textContent = `${todo.title}`;
      detailsDiv.textContent = `${todo.details}`;
      dateDiv.textContent = `${todo.date}`


      /*all task list */
      cardContainer.appendChild(crossTask);
      cardContainer.appendChild(titleDiv);
      cardContainer.appendChild(detailsDiv);
      cardContainer.appendChild(dateDiv);
      cardContainer.appendChild(editIcon);
      cardContainer.appendChild(priorityIcon);
      cardContainer.appendChild(removeIcon);
      pageContent.appendChild(cardContainer);

      pageContent.appendChild(addBtn);
      console.log(cardContainer);

      main.appendChild(pageContent);
    }
  
  }
  //pageContent.appendChild(addBtn);
  console.log(allTaskList)
}



/*
function renderAll(array, addBtn) {
  let allTaskList = array;
  const main = document.querySelector('#main')
  const pageContent = document.querySelector('.page-content');
  console.log(allTaskList)
  console.log('workkkkkk')

  pageContent.innerHTML = '';
  for(let i = 0; i < allTaskList.length; i++){
    let allTaskList = array[i];
    console.log(allTaskList[i])

    /*new task div 
    pageContent

    const cardContainer = document.createElement('div');

    const crossTask = document.createElement('input');//checkbox;
    const titleDiv = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    const editIcon = document.createElement('div');
    const priorityIcon = document.createElement('div');
    const removeIcon = document.createElement('div');

    //attribute
    cardContainer.setAttribute('id', 'card-container')

    crossTask.type = 'checkbox'

    titleDiv.textContent = `${allTaskList.title}`;
    detailsDiv.textContent = `${allTaskList.details}`;


    /*all task list 
    cardContainer.appendChild(crossTask);
    cardContainer.appendChild(titleDiv);
    cardContainer.appendChild(detailsDiv);
    cardContainer.appendChild(dateDiv);
    cardContainer.appendChild(editIcon);
    cardContainer.appendChild(priorityIcon);
    cardContainer.appendChild(removeIcon);
    pageContent.appendChild(cardContainer);

    //pageContent.appendChild(addBtn);
    console.log('rennnnnnnnn');

  }
  console.log(pageContent);
}
*/
/*shows All the task for the project date sorted*/

export default allTab;
