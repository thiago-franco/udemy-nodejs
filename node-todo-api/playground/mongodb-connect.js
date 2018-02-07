const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client)=> {
    if(error) {
        console.log('Unable to connet to MongoDB server: ' + error);
        return;
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Study to the test',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         console.log('Unable to insert todo', err);
    //         return;
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Thiago',
    //     age: 22,
    //     location: 'Nova Friburgo'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user document', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
})