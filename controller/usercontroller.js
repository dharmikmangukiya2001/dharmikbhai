const express = require('express');
const customer = require('../model/customermodel')
const user =require('../model/usermodel')
module.exports.register = (req, res) => {

    try {
        res.render('register');
    } catch (error) {
        console.log(err);
    }

}
module.exports.registerdata = async (req, res) => {

    try {
        console.log(req.body);
        var name = req.body.name
        var email = req.body.email
        var password = req.body.password
        var admindata = await user.create({
            name,
            email,
            password
        });
        res.redirect('/user/home');
    } catch (err) {
        console.log(err);
    }

}

module.exports.home = async (req, res) => {
    try {
        var obj = await user.find({});
        var database=await customer.find({});
        res.render('home', {
            obj,
            database
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports.show = async (req, res) => {
      
    console.log(req.params);
    var d =await customer.find({_id:req.params.id});
    // var d=[b]

     return res.render('show',{
        d
    })

}

module.exports.homedetails = async (req, res) => {

    try {
        console.log(req.body);
        var name = req.body.name
        var number = req.body.number
        var email = req.body.email
        var address = req.body.address
        var customerid = req.body.customerid
        var servics = req.body.servics
        var otherservics = req.body.otherservics
        var date = req.body.date
        var pcnumber = req.body.pcnumber
        var reference = req.body.reference
        var work = req.body.work
        var cd = await customer.create({ 
            name,
            number,
            email,
            address,
            customerid,
            servics,
            otherservics,
            date,
            pcnumber,
            reference,
            work
        });

        res.redirect('/user/customerdetails');
    } catch (err) {
        console.log(err);
    }

}
module.exports.customerdetails =async (req, res) => {

    try {
        var search = '';
        if(req.query.search){
            search = req.query.search;
        }
        var cus = await customer.find({
            $or:[
                {name:{$regex:'.*'+search+'.*'}}
            ]
        })
        console.log(cus)
        res.render('customerdetails',{
            cus,
        });

    } catch (err) {
        console.log(err);
    }
}

module.exports.deletes=async(req,res)=>{

    console.log(req.params)

    var cd=await customer.findByIdAndDelete(req.params.id)
    if(cd) {
        console.log('data deleted successfully')
        res.redirect('back');
    } else{
        console.log('data not deleted')
    }
}


module.exports.updatepage=async(req,res)=>{

    
    console.log(req.params);
    var data=await customer.find({_id:req.params.id});
    var lax=data[0]
    res.render('update',{lax});

}

module.exports.update=async(req,res)=>{

        console.log(req.body);

    var update=await customer.findByIdAndUpdate(req.params.id,req.body);
    if(update) {
        console.log("data updated successfully");
        res.redirect('/user/customerdetails');
    }
    else{
        console.log('data not updated')
    }


}