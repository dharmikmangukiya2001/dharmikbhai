const express=require('express');
const routes=express.Router();
const controller=require('../controller/usercontroller');
const upload=require('../cloud/multer');


routes.get('/',controller.dashboard);
routes.get('/forms',controller.forms);
routes.get('/table',controller.table);
routes.get('/login',controller.login);
routes.get('/register',controller.register);
routes.get('/forgotpassword',controller.forgotpassword);



module.exports=routes;