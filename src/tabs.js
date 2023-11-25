

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

  allBtn.innerText = 'All';
  todayBtn.innerText = 'Today';
  projectBtn.innerText = 'Project';
  notesBtn.innerText = 'Notes';

  sidebar.appendChild(allBtn);
  sidebar.appendChild(todayBtn);
  sidebar.appendChild(projectBtn);
  sidebar.appendChild(notesBtn);

  container.appendChild(sidebar);

  console.log('tabs')
}

export default tabs;