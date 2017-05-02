/**
 * Created by chao on 2017/1/13.
 */


  var uuid=require('uuid');
module.exports = {

  tableName: 'User',

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function () {
        return uuid.v4();
      }
    },
    userName:{
      type: 'string',
      unique: true,
    },
    password:{
      type: 'string',
      unique: true,
    }
  }

}
