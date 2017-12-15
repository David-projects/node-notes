console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
      title,
      body
  };

  try{
      var notesString = fs.readFileSync('notes-data.json');
      notes = JSON.parse(notesString);
  } catch(e) {

  }

var dupticaleNotes = notes.filter((note) => note.title === title);

  if(dupticaleNotes.length === 0) {
      notes.push(note);
      fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  } else {
      console.log('Note not saved dup note');
  }
};

var getAll = () => {
    console.log('Getting List');
};

var getNote = (title) => {
    console.log('Getting note ' + title);
};

var removeNote = (title) => {
    console.log('Removing note ' + title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};