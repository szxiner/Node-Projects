//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to Mongodb server');
  }
  console.log('Mongodb server connected!');
  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to ionsert todo!');;
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('User').insertOne({
  //   name: 'Xiner',
  //   age: 24,
  //   location: 'Bloomington'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
});
