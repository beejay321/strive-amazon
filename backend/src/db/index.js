import s from "sequelize";
import pg from "pg";
const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;
import ReviewModel from "./reviews.js"
import ProductModel from "./products.js";


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
  Product: ProductModel(sequelize, DataTypes),
  Review: ReviewModel(sequelize, DataTypes),
  sequelize: sequelize,
};



// models.Author.belongsToMany(models.Product, { through: { model: models.Review, unique: false, timestamps: false } });
// models.Product.belongsToMany(models.Author, { through: { model: models.Review, unique: false, timestamps: false } });

// models.Author.hasMany(models.Review);
// models.Review.belongsTo(models.Author);

models.Product.hasMany(models.Review);
models.Review.belongsTo(models.Product);

test();

export default models;
