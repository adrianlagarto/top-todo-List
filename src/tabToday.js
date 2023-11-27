

const tabToday = () => {
  const main = document.querySelector('#main');
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');
  pageContent.textContent = 'Today Tab??';
  console.log('today');
  main.appendChild(pageContent);
}

export default tabToday;