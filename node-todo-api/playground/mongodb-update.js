//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to Mongodb server');
  }
  console.log('Mongodb server connected!');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59c7fb3d6c94157afd274908")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59c7f71f6c94157afd2747df")
  },{
    $inc:{
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  //db.close();
});
