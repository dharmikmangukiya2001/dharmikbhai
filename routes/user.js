const express=require('express');
const routes=express.Router();
const controller=require('../controller/usercontroller');


routes.get('/',controller.register);
routes.post('/datafrom',controller.registerdata);   
routes.get('/home',controller.home);
routes.get('/show/:id',controller.show);
routes.post('/dataenter',controller.homedetails);
routes.get('/customerdetails',controller.customerdetails);
routes.get('/update/:id',controller.updatepage);
routes.get('/delete/:id',controller.deletes);
routes.post('/update/:id',controller.update);



module.exports=routes;