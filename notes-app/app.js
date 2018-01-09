const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs: ', argv);
switch(command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note) {
            console.log('Note added.');
            notes.logNote(note);
        }
        else {
            console.log('Adition failed. Note title may already be in use.');
        }
    break;
    case 'list': 
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} notes`);
        allNotes.forEach(note => {
            notes.logNote(note);
        });
    break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note successfuly removed.' : 'No note was removed.';
        console.log(message);
    break;
    case 'read':
        var note = notes.getNote(argv.title);
        if(note) {
            console.log('Note read.');
            notes.logNote(note);
        } 
        else {
            console.log('Note not found');
        }
    break;
    default: console.log('Command not recognized');
}