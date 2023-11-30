

let notesArray = [];

const tabNotes = () => {
  const main = document.querySelector('#main');
  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content');
  pageContent.textContent = 'NotesssTab!!!';

  /*Create Notes */
  const addingNotes = document.createElement('button');
  addingNotes.textContent = 'Add Notes';

  addingNotes.addEventListener('click', () => {

    const noteContainer = document.createElement('div');
    const writeNote = document.createElement('textarea');
    const deleteNote = document.createElement('button');

    writeNote.textContent = 'exp'
    deleteNote.textContent = 'Delete'

    noteContainer.appendChild(writeNote);
    noteContainer.appendChild(deleteNote);
    pageContent.appendChild(noteContainer);
    
    notesArray.push(noteContainer);
    renderNotes();
    console.log(pageContent);
  });

  /*Rendering Notess */
  function renderNotes() {
    console.log('rendering Notes');

  }

  /*deleting Notes X 
  deletingNotes.addEventListener('click', () => {
    alert('delete notes!');
  })
  */





  pageContent.appendChild(addingNotes);
  

  /*Notess*/
  //function createNotes () {
    const noteContainer = document.createElement('div');
    const writeNote = document.createElement('textarea');
    const deleteNote = document.createElement('button');

    noteContainer.appendChild(writeNote);
    noteContainer.appendChild(deleteNote);
  


  main.appendChild(pageContent);

  /*function*/
}

export default tabNotes;