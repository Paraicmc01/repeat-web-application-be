const {MongoClient, ObjectID} = require( 'mongodb' );
const repeatExam_db = 'AutumnRepeatExam'
const url = "mongodb://localhost:27017/AutumnRepeatExam";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client) {
      if(err){
        console.log(err)
      }
      _db  = client.db(repeatExam_db);
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  },
  ObjectID
};