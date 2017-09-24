//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to Mongodb server');
  }
  console.log('Mongodb server connected!');
  // db.collection('Todos').find({
  //   _id:new ObjectID('59c7efaecef6ae0c2380180b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   //console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  db.collection('User').find({name:'Xiner'}).toArray().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
  })
  //db.close();
});
