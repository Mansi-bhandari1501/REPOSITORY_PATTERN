'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static userIssueAssociation
    static issueBookAssociation
    static associate(models) {
      // define association here
      this.userIssueAssociation = Issue.belongsTo(models.User,{
        foreignKey:"userId",
        targetKey: 'id',
        // as: 'user'
      })
      this.issueBookAssociation=Issue.belongsTo(models.Books,{
        foreignKey:"bookId",
        targetKey: 'id',
        as: 'book'
      })
    }
    }
  Issue.init({
   
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'User',
        key:'id'
      } 
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'Books',
        key:'id'
      } 
    },
    issueDate: DataTypes.DATE,
    dueDate: {
      type:DataTypes.DATE,
    }
    ,
    returnDate: DataTypes.DATE,
    status:{
      type: DataTypes.ENUM('issued', 'returned',"pending"),
      allowNull: true,
      defaultValue:"pending" ,
    }
  }, {
    sequelize,
    modelName: 'Issue',
  });
  return Issue;
};