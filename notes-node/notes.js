console.log('starting notes');
const fs = require('fs');

var fetchNotes = () => {
  //incase no file
  try {
    //parse existing note
    var notesString = fs.readFileSync('notes_data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

//Adding notes
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0){
    //write new notes
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};
var getNote = (title) => {
  var notes = fetchNotes();
  var gettingNotes = notes.filter((note) => note.title  === title);
  return gettingNotes[0];

}
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title  !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}
var logNote = (note) => {
  console.log('-------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
