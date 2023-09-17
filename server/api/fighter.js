const express = require('express');
const app = express.Router();
const { Fighter } = require('../db');

module.exports = app;

// prefix is /api/fighters
app.get('/', async(req, res, next) => {
    try {
      res.send(await Fighter.findAll())
    } catch (error) {
      next(error)
    }
  })
