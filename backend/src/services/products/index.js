import express from "express";
import models from "../../db/index.js";
const Review = models.Review;
const Product = models.Product;
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

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
    const data = await Product.findAll({ include: [{ model: Review, attributes: ["comment", "rate"] }] });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Strive",
  },
});

const upload = multer({ storage: cloudinaryStorage }).single("image");

productsRouter.post("/:id/uploadCover", upload, async (req, res, next) => {
  try {
    console.log(req.file);
    const data = await Product.findAll();
    let updatedProduct = data.map((d) => {
      if (d._id === req.params.id) {
        d.ImageUrl = req.file.path;
        console.log(d.ImageUrl);
      }
      return d;
    });
    await Product.create(updatedProduct);
    res.send(req.file.path);
  } catch (error) {
    next(error);
  }
});

// get single product
productsRouter.get("/:id", async (req, res, next) => {
  try {
    const data = await Product.findByPk(req.params.id);
    if (data) {
      res.send(data);
    } else {
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
    const rows = await Product.destroy({ where: { _id: req.params.id } });
    if (rows > 0) {
      res.send("ok");
    } else {
      next(creatError(404, `product with ${req.params.id} not found`));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// update/PUT product
productsRouter.put("/:id", async (req, res, next) => {
  try {
    const data = await Product.update(req.body, { where: { _id: req.params.id }, returning: true });
    if (data) {
      res.send(data);
    } else {
      next(creatError(404, `product with ${req.params.id} not found`));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.get("/:id/reviews", async (req, res, next) => {
  try {
    const data = await Product.findOne({
      where: { _id: req.params.id },
      include: [{ model: Review }],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.post("/:id/reviews", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default productsRouter;
