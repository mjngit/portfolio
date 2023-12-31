const conn = require('./conn');
const { STRING, TEXT, UUID, UUIDV4, INTEGER } = conn.Sequelize;

const Review = conn.define('review', {
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
  },
  description: {
    type: TEXT,
    required: true,
  },
  rating: {
    type: INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
      max: 10
    },
  }   
});

module.exports = Review;
