console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Thiago'));

var filteredArray = _.uniq(['Thiago', 'Cler', 'Cler', 'Franco', 'Thiago']);
console.log(filteredArray);

// var result = notes.add(15,-5);
// console.log('Result: ' + result);

// let user = os.userInfo();
// //console.log(user);
// //fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
