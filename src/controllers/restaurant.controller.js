import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import restaurantService from "../services/restaurant.service.js";

const restaurantController = {
  // Like nhà hàng
  like: async (req, res) => {
    try {
      const like = await restaurantService.like(req);
      const resData = responseSuccess(like, "Tạo like thành công", 201);
      res.status(resData.code).json(resData);
      //   res.status(201).json(like);
    } catch (error) {
      const errData = responseError("Tạo like Thất Bại", 500);
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Unlike nhà hàng
  unlike: async (req, res) => {
    try {
      const result = await restaurantService.unlike(req);
      const resData = responseSuccess(result, "Unlike thành công", 200);
      res.status(resData.code).json(resData);

      //   res.status(200).json({ message: "Unlike thành công", result });
    } catch (error) {
      const errData = responseError("Unlike Thất Bại", 500);
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Lấy danh sách like theo nhà hàng
  listLikeByRes: async (req, res) => {
    try {
      const likes = await restaurantService.listLikeByRes(req);
      const resData = responseSuccess(
        likes,
        "Lấy danh sách like theo nhà hàng thành công",
        200
      );
      res.status(resData.code).json(resData);

      //   res.status(200).json(likes);
    } catch (error) {
      const errData = responseError(
        "Lấy danh sách like theo nhà hàng Thất Bại",
        500
      );
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Lấy danh sách like theo user
  listLikeByUser: async (req, res) => {
    try {
      const likes = await restaurantService.listLikeByUser(req);
      const resData = responseSuccess(
        likes,
        "Lấy danh sách like theo user thành công",
        200
      );
      res.status(resData.code).json(resData);
      //   res.status(200).json(likes);
    } catch (error) {
      const errData = responseError(
        "Lấy danh sách like theo user Thất Bại",
        500
      );
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Thêm đánh giá
  addRate: async (req, res) => {
    try {
      const rate = await restaurantService.addRate(req);
      const resData = responseSuccess(rate, "Thêm đánh giá thành công", 201);
      res.status(resData.code).json(resData);
      //   res.status(201).json(rate);
    } catch (error) {
      const errData = responseError("Thêm đánh giá Thất Bại", 500);
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Lấy danh sách đánh giá theo nhà hàng
  listRateByRes: async (req, res) => {
    try {
      const rates = await restaurantService.listRateByRes(req);
      const resData = responseSuccess(
        rates,
        "Lấy danh sách đánh giá theo nhà hàng thành công",
        200
      );
      res.status(resData.code).json(resData);
      //   res.status(200).json(rates);
    } catch (error) {
      const errData = responseError(
        "Lấy danh sách đánh giá theo nhà hàng Thất Bại",
        500
      );
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Lấy danh sách đánh giá theo user
  listRateByUser: async (req, res) => {
    try {
      const rates = await restaurantService.listRateByUser(req);
      const resData = responseSuccess(
        rates,
        "Lấy danh sách đánh giá theo user thành công",
        200
      );
      res.status(resData.code).json(resData);
      //   res.status(200).json(rates);
    } catch (error) {
      const errData = responseError(
        "Lấy danh sách đánh giá theo user Thất Bại",
        500
      );
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },

  // Thêm order
  addOrder: async (req, res) => {
    try {
      const order = await restaurantService.addOrder(req);
      const resData = responseSuccess(order, "Thêm order thành công", 201);
      res.status(resData.code).json(resData);
      //   res.status(201).json(order);
    } catch (error) {
      const errData = responseError("Thêm order Thất Bại", 500);
      res.status(errData.code).json(errData);
      //   res.status(500).json({ error: error.message });
    }
  },
};

export default restaurantController;
