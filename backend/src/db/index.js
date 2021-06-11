import s from "sequelize";
import pg from "pg";
const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;
import ReviewModel from "./reviews.js";
import ProductModel from "./products.js";
import CategoryModel from "./categories.js";
import User from "./users.js";

const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
});

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const models = {
  //   User: UserModel(sequelize, DataTypes),
  User: User(sequelize, DataTypes),

  Product: ProductModel(sequelize, DataTypes),
  Review: ReviewModel(sequelize, DataTypes),
  sequelize: sequelize,
};

// models.Author.belongsToMany(models.Product, { through: { model: models.Review, unique: false, timestamps: false } });
// models.Product.belongsToMany(models.Author, { through: { model: models.Review, unique: false, timestamps: false } });

models.Product.belongsToMany(models.User, { through: { model: "Cart", unique: false, timestamps: false } });
models.User.belongsToMany(models.Product, { through: { model: "Cart", unique: false, timestamps: false } });

models.Product.belongsToMany(models.User, { through: { model: models.Review, unique: false, timestamps: false } });
models.User.belongsToMany(models.Product, { through: { model: models.Review, unique: false, timestamps: false } });

models.Product.hasMany(models.Review);
models.Review.belongsTo(models.Product);

models.User.hasMany(models.Review);
models.Review.belongsTo(models.User);

// models.Category.hasMany(models.Product);
// models.Product.belongsTo(models.Category);

test();

export default models;
