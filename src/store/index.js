import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
// import register from './register';
import drinks from './drinks'
import merches from './merches'
import reviews from './reviews'
import fighters from './fighters';
import assessments from './assessments';
import onlineUsers from './onlineUsers';
import users from './users';
import messages from './messages';
import portfolio from './portfolio';
import stocks from './stocks';
import transactions from './transactions';
import friends from './friends';
import hypes from './hypes';
import happyNotes from './happyNotes'

const reducer = combineReducers({
  auth,
  cart,
  drinks,
  merches,
  reviews,
  fighters,
  onlineUsers,
  users,
  assessments,
  messages,
  portfolio,
  stocks,
  transactions,
  friends,
  hypes,
  happyNotes
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './cart';
// export * from './register';
export * from './drinks';
export * from './merches';
export * from './reviews';
export * from './fighters';
export * from './assessments';
export * from './onlineUsers';
export * from './messages';
export * from './portfolio';
export * from './stocks';
export * from './users';
export * from './transactions';
export * from './friends';
export * from './hypes';
export * from './happyNotes';