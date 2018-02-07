const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectID('5a7b3b3038ce9c09b08dbb54')}, 
        {$set: {completed: true}}, 
        {returnOriginal: false}).then((result) => {
            console.log(result);
        });

    client.close();
});