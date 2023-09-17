const express = require('express');
const app = express.Router();
const { Message } = require('../db');
const { isLoggedIn } = require('./middleware');


app.post('/', isLoggedIn , async(req, res, next)=> {
    try {
      res.send(await req.user.sendMessage(req.body));
    }
    catch(ex){
      next(ex);
    }
  });
  
  module.exports = app;