const express = require('express');
const app = express();
const path = require('path');
// app.use(express.json());
app.use(express.json({limit: '50mb'}));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) => {
    res.render(
        path.join(__dirname, '../static/index.html'), 
        { client_id : process.env.client_id})
    });

app.use('/api/reviews', require('./api/reviews'));
app.use('/api/auth', require('./api/auth'));
app.use('/api/orders', require('./api/orders'));
app.use('/api/menu', require('./api/drinks'));
app.use('/api/merches', require('./api/merches'));
app.use('/api/fighters', require('./api/fighter'));
app.use('/api/assessments', require('./api/assessments'));
app.use('/api/messages', require('./api/messages'));
app.use('/api/stocks', require('./api/stocks'));
app.use('/api/transactions', require('./api/transactions'));
app.use('/api/friends', require('./api/friends'));
app.use('/api/hypes', require('./api/hypes'));
app.use('/api/happyNotes', require('./api/happyNotes'));

const socketMap = require('./socketMap')
const { isLoggedIn } = require('./api/middleware');
const { User } = require('./db');

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/index.html')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/datepicker-css')));


app.get('/api/messages', isLoggedIn, async(req, res,next)=> {
    try {
      res.send(await req.user.messagesForUser());
    }
    catch(ex){
      next(ex);
    }
});

app.get('/api/friends', isLoggedIn, async(req, res,next)=> {
    try {
      res.send(await req.user.friendRequestsForUser());
    }
    catch(ex){
      next(ex);
    }
});

app.get('/api/hypes', isLoggedIn, async(req, res,next)=> {
    try {
      res.send(await req.user.hypesForUser());
    }
    catch(ex){
      next(ex);
    }
});

app.get('/api/onlineUsers', (req, res, next)=> {
    try {
        res.send(Object.values(socketMap).map(value => {
            return { id: value.user.id, username: value.user.username }
        }))
    } catch (error) {
        next(error)
    }
})

app.get('/api/users',  async (req, res, next)=> {
    try {
        res.send( await User.findAll())
    } catch (error) {
        next(error)
    }
})

module.exports = app;

