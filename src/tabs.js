import tabAll from "./tabAll";
import tabToday from "./tabToday";


const tabs = () => {
  const container = document.querySelector('#container');
  const sidebar = document.createElement('div');
  
  sidebar.setAttribute('id', 'sidebar');
  const allBtn = document.createElement('button');
  const todayBtn = document.createElement('button');
  const projectBtn = document.createElement('button');
  const notesBtn = document.createElement('button');

  allBtn.setAttribute('id', 'all-btn');
  todayBtn.setAttribute('id', 'today-btn');
  projectBtn.setAttribute('id', 'project-btn');
  allBtn.setAttribute('id', 'all-btn');


  allBtn.textContent = 'All';
  todayBtn.textContent = 'Today';
  projectBtn.textContent = 'Project';
  notesBtn.textContent = 'Notes';

  sidebar.appendChild(allBtn);
  sidebar.appendChild(todayBtn);
  sidebar.appendChild(projectBtn);
  sidebar.appendChild(notesBtn);

  container.appendChild(sidebar);

  allBtn.addEventListener('click', () => {
    clearContent();
    tabAll();//render the page
  })

  todayBtn.addEventListener('click', () => {
    clearContent();
    tabToday();//render the page
  })

  projectBtn.addEventListener('click', () => {
    clearContent();
    createProject();//render the page
  })

  notesBtn.addEventListener('click', () => {
    clearContent();
    createNotes();//render the page
  })

  console.log('tabs')
}

function clearContent() {
  const main = document.querySelector('#main');
  const pageContent = document.querySelector('.page-content')
  if(pageContent){
  main.removeChild(pageContent)
  }
}

export default tabs;