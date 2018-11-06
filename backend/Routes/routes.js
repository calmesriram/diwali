module.exports=(app)=>{
    var route_controllers = require('../Controllers/controller');
    // test purpose
    app.get('/',route_controllers.test);
    
    // create users
    app.post('/singup',route_controllers.singup);
    // view all users
    app.get('/seeusers',route_controllers.seeusers);
        // loginusers
    app.put('/loginusers',route_controllers.loginusers);

    // delete users
    app.delete('/deleteusers',route_controllers.deleteusers);
    // update users
    app.put('/updateusers',route_controllers.updateusers);

    // create question
    app.post('/createquestion',route_controllers.qst);

    // view all question
    app.get('/getquestion',route_controllers.getquestion);

    // delete one question
    app.delete('/deletequestion',route_controllers.deletequestion);

    // update one question
    app.put('/updatequestion',route_controllers.updatequestion);

}