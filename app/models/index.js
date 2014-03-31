var Sequelize = require('sequelize');

module.exports = {
  model1: {
    phone: {
      type: Sequelize.STRING,
      required: true
    },
    wantsMentor: Sequelize.INTEGER,
    reason: Sequelize.TEXT
  },
  model2: {
    name: Sequelize.STRING,
    phone: {
      type: Sequelize.STRING,
      required: true
    }
  },
  user: {
    email: Sequelize.STRING,
    password: Sequelize.STRING
  }
};
