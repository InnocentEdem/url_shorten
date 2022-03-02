'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  url.init({
    urlin: {
      type:DataTypes.STRING,
      allowNull:false,
      isUrl: true
    },
    urlout: {
      type:DataTypes.STRING,
      allowNull:false
    },
    date_created: {
      type:DataTypes.DATE,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'url',
  });
  return url;
};