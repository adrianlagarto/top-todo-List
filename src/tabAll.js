import addButton from "./addButton";

const allTab = () => {
  const main = document.querySelector('#main');
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');
  pageContent.textContent = 'All Tab!!!';
  console.log('works');

  /*Add task button */
  const addBtn = document.createElement('button');
  addBtn.textContent = '+'
  pageContent.appendChild(addBtn)
  addBtn.addEventListener('click', () => {
    addButton('all');
  })

  main.appendChild(pageContent);
}

/*shows All the task for the project date sorted*/

export default allTab;
