import addButton from "./addButton";

const allTab = () => {
  const allTaskList = [];
  const main = document.querySelector('#main');
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');
  pageContent.textContent = 'All Tab!!!';
  console.log('works');

  /*Add task button pop-up*/
  const addBtn = document.createElement('button');
  addBtn.textContent = '+'
  pageContent.appendChild(addBtn)
  addBtn.addEventListener('click', () => {
    addButton('all');
  })

  main.appendChild(pageContent);
}


  const pressConfirm = document.querySelector('#confirm');
  const pressExit = document.querySelector('#exit');

  pressConfirm.addEventListener('click', () => {
    //gather the input data 
  })

  pressExit.addEventListener('click', () => {
    //exit the pop up box
  })
  

/*shows All the task for the project date sorted*/

export default allTab;
