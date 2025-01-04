import express from "express";
import restaurantRouter from "./restaurant.router.js";

const rootRouter = express.Router();

rootRouter.get(`/`, (request, response, next) => {
  response.json(`ok`);
});

rootRouter.use(`/restaurant`, restaurantRouter);

export default rootRouter;
