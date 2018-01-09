console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var result = notes.add(15,-5);
console.log('Result: ' + result);

// let user = os.userInfo();
// //console.log(user);
// //fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
