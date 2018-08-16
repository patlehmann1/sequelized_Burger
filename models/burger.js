module.exports = function (sequelize, DataTypes) {
  const Burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  },
    {
      timestamps: false
    });
  return Burger;
};
