const fs = require('fs');

const getNotes = () => 'note thing';

const addNote = (title, body) => {
        // load parsed object from file
        const notes = loadNotes();
        const duplicateNotes = notes.filter(note => note.title === title);
        if (duplicateNotes.length === 0) {
                notes.push({
                        title,
                        body,
                });
                saveNotes(notes);
        } else {
                console.log('note title exists');
        }
};

// load file, if no file create an empty array
const loadNotes = () => {
        try {
                // get JSON notes file and convert to string
                const dataJSON = fs.readFileSync('notes.json').toString();
                // parse JSON file
                return JSON.parse(dataJSON);
        } catch (err) {
                return [];
        }
};

const saveNotes = notes => {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
};

module.exports = {
        getNotes,
        addNote,
};
