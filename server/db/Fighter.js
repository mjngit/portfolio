
const conn = require('./conn');
const { STRING, INTEGER } = conn.Sequelize;
// const {UFC_API_KEY}  = require('../../secrets');

const Fighter = conn.define("fighter", {
  name: {
    type: STRING,
  },
  defense: {
    type: STRING,
  },
  reach: {
    type: STRING,
  },
  strikesAbsorbedPerMin: {
    type: STRING
  },
  strikesLandedPerMin: {
    type: STRING
  },
  avgFightTime: {
    type: STRING
  },
  avgSubPer15: {
    type: STRING
  },
  takedownAcc: {
    type: STRING
  },
  takedownDef: {
    type: STRING
  },
  avgTakedownsPer15: {
    type: STRING
  },
  dob: {
    type: STRING
  },
  height: {
    type: STRING
  },
  id: {
    type: INTEGER,
    primaryKey: true
  },
  matchupId: {
    type: INTEGER
  },
  record: {
    type: STRING
  },
  moneyLine: {
    type: STRING
  }
});

module.exports = Fighter;


