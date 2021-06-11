import express from "express";
import models from "../../db/index.js";
const Review = models.Review;
const Product = models.Product;

const productsRouter = express.Router();

//---------------ROUTES----------- //

// create/POST product
productsRouter.post("/", async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get all products
productsRouter.get("/", async (req, res, next) => {
  try {
    const data = await Product.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// get single product
productsRouter.get("/:id", async (req, res, next) => {
  try {
    const data = await Product.findAll({ where: { _id: req.params.id } });
    if (data){
      res.send(data);
    }else{
      res.status(404).send({ message: `product with ${req.params.id} not found` });
    // next(creatError(404, `product with ${req.params.id} not found`));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// DELETE product
productsRouter.delete("/:id", async (req, res, next) => {
  try {
    // const book = await booksSchemaModel.findByIdAndDelete(req.params.id);
    // if (book) {
    //   res.status(204).send("deleted");
    // } else {
    //   next(creatError(404, `book with ${req.params.id} not found`));
    // }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// update/PUT product
productsRouter.put("/:id", async (req, res, next) => {
  try {
    // const book = await booksSchemaModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });
    // res.send(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.get("/:id/comments", async (req, res, next) => {
  try {
    // const comments = await booksSchemaModel.findById(req.params.id, { comments: 1 });
    // if (comments) {
    //   res.send(comments);
    // } else {
    //   next(creatError(404, `book with ${req.params.id} not found`));
    // }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.post("/:id/comments", async (req, res, next) => {
  try {
    // const singleBook = await booksSchemaModel.findById(req.params.id);
    // console.log(singleBook);
    // const newComment = { ...req.body, date: new Date() };
    // console.log(newComment);
    // const singleBook = await booksSchemaModel.findByIdAndUpdate(req.params.id, { $push: { comments: newComment } }, { runValidators: true, new: true });
    // if (newComment) {
    //   res.send(singleBook);
    // }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default productsRouter;
