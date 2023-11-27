

const mainPage = () => {
  const container = document.querySelector('#container');

  const header = document.createElement('div');
  const sidebar = document.createElement('div');
  const main = document.createElement('div');

  //Header div
  header.setAttribute('id', 'header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'TO-DO';
  headerTitle.setAttribute('id','header-title');
  header.appendChild(headerTitle);

  //Side Bar div

  /*Main*/

  main.setAttribute('id', 'main')


  /* 
    side bar divs
    -All btn
    -Today btn
    -Projects div
    -Projects list btn
    -Notes btn
  */
  
  container.appendChild(header);
  container.appendChild(sidebar);
  container.appendChild(main);
  
  console.log('mainPages')
}


export default mainPage;