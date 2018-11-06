var models_schema = require('../Models/setqst_Schema');
var singup_schema = require('../Models/singup');
var jwt = require('jsonwebtoken');

exports.test = (req,res)=>{
    console.log("get method connected");
    res.send("get method connected");
}
// singup
exports.singup = (req,res)=>{
var username=req.body.username;
var password = req.body.password;
var token = jwt.sign(username,password);
    
     var singup_setdata = new singup_schema({

        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        password:token,
        status:req.body.status,
        userid:req.body.userid
    });
    // save
    singup_setdata.save().then(data=>{
            //    console.log(res);    
                 console.log("success");
                 res.json(data);
                //  res.end("successfully")
             }).catch(err=>{
                 console.log("Not inserted");
                 res.json(err);
             })



    //     if(err)
    //     {
    //         console.log(err);
    //         res.json(err);
    //     }
    //     if(result)
    //     {
    //     //  res.send(result);
    //     res.json("true");
    //      console.log(result);
    //     }
    // })
    // .then(data=>{
    // //    console.log(res);    
    //      console.log("success");
    //      res.send(data);
    //     //  res.end("successfully")
    //  }).catch(err=>{
    //      console.log("Not inserted");
    //  })
    // exports.loginusers = (req, res) => {
    //     var username=req.body.username;
    //     var userpwdpassword = req.body.password;
    //     singup_schema.findOne({"username":username},function(err,result){
    //         if(err)
    //     {
    //         console.log(err);
    //         res.send("false");
    //     }
    //     if(result)
    //     {
    //      var check = jwt.verify(result.password,userpwdpassword);
    //         if(check==userpwdpassword)
    //         {
    //             console.log("matched")
    //             res.send("success");
    //         }
    //         else{
    //             console.log("unmatched")
    //         }
    //      console.log(result);
    //     }
    //     })
    // }
    }
    // login

    exports.loginusers = (req, res) => {
        var username=req.body.username;
        var userpwdpassword = req.body.password;
        singup_schema.findOne({"username":username})
        .then(data => {
         console.log(data);
            // console.log(data.password);
            var check = jwt.verify(data.password,userpwdpassword);
            if(check==userpwdpassword)
            {
                console.log("matched")
                res.json("success");
            }
        }).catch(err => {
            
            console.log(err);
            res.json(err);
        });
    }

    // see users
exports.seeusers = (req, res) => {
    singup_schema.find()
    .then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.json(err);
    });
}
// update users


exports.updateusers = (req, res) => {
var updateusername = req.body.username;
var updatepassword = req.body.password;
    var updatetoken = jwt.sign(updateusername,updatepassword);
    singup_schema.findOneAndUpdate({"username":updateusername},{$set:{password:updatetoken}},function(err, result){
        if(err){
            res.json(err);
            console.log(err)
        }
        if(result)
        {
            res.json("update_success");
            var a = jwt.decode(updatetoken,updatepassword)

            console.log("updated user"+a);
        }
    })
   
}
// delete users
exports.deleteusers = (req, res) => {
    singup_schema.findOneAndDelete(req.body.userid)
    .then(data => {
        res.json("deleted_success"+data);
        console.log("deleted");
    }).catch(err => {
    
         console.log(err);
         res.json("not deleted or null "+err);
    });
}


exports.qst = (req,res)=>{

// bodyparser
 var qst = new models_schema({
    question_id:2,
    question:req.body.question,
    option1:req.body.option1,
    option2:req.body.option2,
    option3:req.body.option3,
    option4:req.body.option4,
    keyAnswer:req.body.keyAnswer
});
// save
 qst.save().then(data=>{
     console.log("success");
     res.json("success"+data);
 }).catch(err=>{
     console.log("Not inserted");
     res.json(err);
 })
}

// get question
exports.getquestion = (req, res) => {
    models_schema.find()
    .then(data => {
        res.json(data);
        console.log(data);
    }).catch(err => {
        
        console.log(err);
        res.json(err);
    });
}

// delete question
exports.deletequestion = (req, res) => {
    models_schema.findOneAndDelete(req.body.question_id)
    .then(data => {
        res.json("deleted");
        console.log("deleted");
    }).catch(err => {
    
         console.log(err);
         res.json(err);
    });
}

// update question


exports.updatequestion = (req, res) => {
    models_schema.findOneAndUpdate(req.body.question_id,{$set:{question:req.body.question,option1:req.body.option1,option2:req.body.option2,option3:req.body.option3,option4:req.body.option4,keyAnswer:req.body.keyAnswer}},function(err, result){
        if(err){
            res.json(err);
            console.log(err)
        }
        if(result)
        {
            res.json("updated");
            console.log("updated");
        }
    })
   
}