var mongoose = require('mongoose');

var singup = mongoose.Schema(
    {
      
        fullname:String,
        username:String,
        email:String,
        password:String,
        status:Boolean,
        userid:Number
     
       }
     );
     
     var singup= mongoose.model('singup',singup);
     
     module.exports = singup;