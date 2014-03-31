var Sequelize = require('sequelize')
  , models = require(APP_ROOT+'/app/models');

var sequelize = new Sequelize(process.env.DATABASE_URL);

var Model1 = sequelize.define('Model1', models.model1)
  , Model2 = sequelize.define('Model2', models.model2)
  , User = sequelize.define('User', models.user);

Model1.hasOne(Model2);
Model2.belongsTo(Model1);

module.exports = {
  sequelize: sequelize,
  Model1: Model1,
  Model2: Model2,
  User: User
};
