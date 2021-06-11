const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("product", {
    _id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    brand: { type: DataTypes.TEXT, allowNull: false },
    ImageUrl: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    category: { type: DataTypes.TEXT, allowNull: false },
  });
  return Products;
};
export default Products;

