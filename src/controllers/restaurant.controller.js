import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper.js";
import restaurantService from "../services/restaurant.service.js";

const restaurantController = {
  like: async (req, res) => {
    try {
      const like = await restaurantService.like(req);
      res.status(201).json(responseSuccess(like, "Tạo like thành công", 201));
    } catch (error) {
      res
        .status(500)
        .json(responseError("Tạo like thất bại", 500, error.stack));
    }
  },

  unlike: async (req, res) => {
    try {
      const result = await restaurantService.unlike(req);
      res.status(200).json(responseSuccess(result, "Unlike thành công", 200));
    } catch (error) {
      res.status(500).json(responseError("Unlike thất bại", 500, error.stack));
    }
  },

  listLikeByRes: async (req, res) => {
    try {
      const likes = await restaurantService.listLikeByRes(req); // Truyền req.params
      res
        .status(200)
        .json(
          responseSuccess(
            likes,
            "Lấy danh sách like theo nhà hàng thành công",
            200
          )
        );
    } catch (error) {
      res
        .status(500)
        .json(
          responseError(
            "Lấy danh sách like theo nhà hàng thất bại",
            500,
            error.stack
          )
        );
    }
  },

  listLikeByUser: async (req, res) => {
    try {
      const likes = await restaurantService.listLikeByUser(req);
      res
        .status(200)
        .json(
          responseSuccess(likes, "Lấy danh sách like theo user thành công", 200)
        );
    } catch (error) {
      res
        .status(500)
        .json(
          responseError(
            "Lấy danh sách like theo user thất bại",
            500,
            error.stack
          )
        );
    }
  },

  addRate: async (req, res) => {
    try {
      const rate = await restaurantService.addRate(req);
      res
        .status(201)
        .json(responseSuccess(rate, "Thêm đánh giá thành công", 201));
    } catch (error) {
      res
        .status(500)
        .json(responseError("Thêm đánh giá thất bại", 500, error.stack));
    }
  },

  listRateByRes: async (req, res) => {
    try {
      const rates = await restaurantService.listRateByRes(req);
      res
        .status(200)
        .json(
          responseSuccess(
            rates,
            "Lấy danh sách đánh giá theo nhà hàng thành công",
            200
          )
        );
    } catch (error) {
      res
        .status(500)
        .json(
          responseError(
            "Lấy danh sách đánh giá theo nhà hàng thất bại",
            500,
            error.stack
          )
        );
    }
  },

  listRateByUser: async (req, res) => {
    try {
      const rates = await restaurantService.listRateByUser(req);
      res
        .status(200)
        .json(
          responseSuccess(
            rates,
            "Lấy danh sách đánh giá theo user thành công",
            200
          )
        );
    } catch (error) {
      res
        .status(500)
        .json(
          responseError(
            "Lấy danh sách đánh giá theo user thất bại",
            500,
            error.stack
          )
        );
    }
  },

  addOrder: async (req, res) => {
    try {
      const order = await restaurantService.addOrder(req);
      res
        .status(201)
        .json(responseSuccess(order, "Thêm order thành công", 201));
    } catch (error) {
      res
        .status(500)
        .json(responseError("Thêm order thất bại", 500, error.stack));
    }
  },
};

export default restaurantController;
