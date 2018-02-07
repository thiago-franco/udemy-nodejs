const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany | deleteOne | findOneAndDelete
    db.collection('Users').deleteOne({name: 'Thiago'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').deleteMany({name: 'Franco'});

    db.collection('Users').findOneAndDelete({name: 'Cler'}).then((result) => {
        console.log(result);
    })

    client.close();
});