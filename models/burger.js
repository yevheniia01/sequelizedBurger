module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
      burger_name:{
          type: DataTypes.STRING,
          allowNull: false,
          //defaultValue: false,
          validate: {
            len: [1, 160]
          }
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  });
  return Burger;
}
