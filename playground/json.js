// var obj = {
//     name:'David'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof  stringObj);
// console.log(stringObj);
//
// var personstring = '{"name":"David","age":25}';
//
// obj = JSON.parse(personstring);
//
// console.log(typeof obj);
// console.log(obj);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);