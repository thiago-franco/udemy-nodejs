// var obj = {
//     name: 'Thiago'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Thiago", "age":"22"}';
// person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

fs = require('fs');

var originalNote = {
    title: "Password",
    body: "gdf96@#51529"
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
