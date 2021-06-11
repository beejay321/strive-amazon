const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      required: true,
    },
  });
  /*  User.associate = (models) => {
       User.belongsToMany(models.Product, {through:{model:models.Cart, unique:false} })
     User.hasMany(models.Cart)
        } */
  return Users;
};
export default Users;
