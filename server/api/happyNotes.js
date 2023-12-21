const express = require('express');
const app = express.Router();
const { HappyNote } = require('../db');

const { isLoggedIn } = require('./middleware.js');

module.exports = app;

// prefix is /api/happyNotes
app.get('/', async(req, res, next)=> {
  try {
    res.send(await HappyNote.findAll()); 
  }
  catch(ex){
    next(ex);
  }
});

app.post('/', async (req, res, next) => {
    try {
      res.status(201).send(await HappyNote.create({ ...req.body}))
    } 
    catch (ex) {
      next(ex);
    }
  });


app.put('/:id', async(req, res, next) => {
  try {
    const happyNote = await HappyNote.findByPk(req.params.id)
    res.send(await happyNote.update(req.body))
  } catch (error) {
    next(error)
  }
})

app.delete('/:id', async(req, res, next) => {
    try {
        const happyNote = await HappyNote.findByPk(req.params.id);
        await happyNote.destroy();
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})