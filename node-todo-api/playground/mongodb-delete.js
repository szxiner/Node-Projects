//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to Mongodb server');
  }
  console.log('Mongodb server connected!');
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result)=>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Dinner'}).then((result)=>{
  //   console.log(result);
  // })

  //findOneAndDelete: Get back and delete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // })

  //db.close();
});
