import express from "express";
import restaurantController from "../controllers/restaurant.controller.js";

const restaurantRouter = express.Router();

// Like nhà hàng
restaurantRouter.post("/like", restaurantController.like);

// Unlike nhà hàng
restaurantRouter.delete("/unlike", restaurantController.unlike);

// Lấy danh sách like theo nhà hàng
restaurantRouter.get("/likes/res/:res_id", restaurantController.listLikeByRes);

// Lấy danh sách like theo user
restaurantRouter.get(
  "/likes/user/:user_id",
  restaurantController.listLikeByUser
);

// Thêm đánh giá
restaurantRouter.post("/rate", restaurantController.addRate);

// Lấy danh sách đánh giá theo nhà hàng
restaurantRouter.get("/rates/res/:res_id", restaurantController.listRateByRes);

// Lấy danh sách đánh giá theo user
restaurantRouter.get(
  "/rates/user/:user_id",
  restaurantController.listRateByUser
);

// Thêm order
restaurantRouter.post("/order", restaurantController.addOrder);

export default restaurantRouter;
