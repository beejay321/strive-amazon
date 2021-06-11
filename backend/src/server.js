import express from "express";
import db from "./db/index.js";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import reviewsRouter from "./services/reviews/index.js";
import productsRouter from "./services/products/index.js";
import { badRequestErrorHandler, notFoundErrorHandler, catchAllErrorHandler } from "./errorsHandler.js";

const server = express();
const port = process.env.PORT || 3001;


server.use(cors());
server.use(express.json());

server.use("/products",  productsRouter);
server.use("/reviews", reviewsRouter);
server.use(badRequestErrorHandler);
server.use(notFoundErrorHandler);
server.use(catchAllErrorHandler);



db.sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(port, () => console.log("server is running: " + port));
    server.on("error", (error) => console.info(" ❌ Server is not running due to : ", error));
  })
  .catch((e) => {
    console.log(e);
  });

