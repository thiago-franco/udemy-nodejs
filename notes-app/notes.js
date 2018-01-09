const fs = require('fs');

var logNote = note => {
    console.log(`Title: ${note.title} Body: ${note.body}`);
}

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (error) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter(note => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);    
        saveNotes(notes);
        return note;
    }
};

var removeNote = title => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length; //Check if a note was actually removed
};

var getNote = title => {
    var notes = fetchNotes();
    noteFound = notes.filter(note => note.title === title);
    return noteFound[0];
};

var getAll = () => {
    return fetchNotes();
};

module.exports = {
    logNote,
    addNote,
    removeNote,
    getNote,
    getAll
};

