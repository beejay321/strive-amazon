const reviews = (sequelize, DataTypes) => {
  const reviews = sequelize.define("review", {
    _id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    comment: { type: DataTypes.TEXT, allowNull: false },
    rate: { type: DataTypes.INTEGER, allowNull: false },
  });
  return reviews;
};
export default reviews;
