import express from 'express';
import models from "../../db/index.js";
const Review = models.Review
const Product = models.Product
const reviewsRouter = express.Router();

//---------------ROUTES----------- //

reviewsRouter.get('/', async (req, res, next) => {
  try {
   
  } catch (error) {
    next(error);
  }
});
reviewsRouter.get('/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    console.log(error);
    next(error);
  }
});
reviewsRouter.post('/',  async (req, res, next) => {
  try {
  
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.put('/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
});

reviewsRouter.delete('/:id', async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
});

export default reviewsRouter;
