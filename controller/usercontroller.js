const express = require('express');

module.exports.register = (req, res) => {

    try {
        res.render('register');
    } catch (error) {
        console.log(err);
    }

}
module.exports.login = (req, res) => {

    try {
        res.render('login');
    } catch (error) {
        console.log(err);
    }

}
module.exports.forgotpassword = (req, res) => {

    try {
        res.render('forgot-password');
    } catch (error) {
        console.log(err);
    }

}
module.exports.dashboard = (req, res) => {

    try {
        res.render('dashboard');
    } catch (error) {
        console.log(err);
    }

}
module.exports.forms= (req, res) => {

    try {
        res.render('forms-input');
    } catch (error) {
        console.log(err);
    }

}
module.exports.table= (req, res) => {

    try {
        res.render('tables-basic');
    } catch (error) {
        console.log(err);
    }

}
