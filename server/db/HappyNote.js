
const conn = require('./conn');
const { STRING, TEXT, UUID, UUIDV4, INTEGER } = conn.Sequelize;

const HappyNote = conn.define('happyNote', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  userId: {
    type: UUID,
    allowNull: false
  },
  subject: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: TEXT,
    required: true,
    allowNull: false
  }, 
  happies: {
    type: INTEGER,
    defaultValue: 0
  }
});

module.exports = HappyNote;
