import models from "../common/sequenlize/init.sequenlize.js";

const { like_res, rate_res, orders } = models;

const restaurantService = {
  // Like nhà hàng
  like: async (req) => {
    const { user_id, res_id } = req.body;
    const like = await like_res.create({ user_id, res_id });
    return like;
  },

  // Unlike nhà hàng
  unlike: async (req) => {
    const { user_id, res_id } = req.body;
    const unLike = await like_res.destroy({ where: { user_id, res_id } });
    if (unLike == 0) {
      throw new Error();
    }
    return unLike;
  },

  // Lấy danh sách like theo nhà hàng
  listLikeByRes: async (req) => {
    const { res_id } = req.params;

    const listLikeByRes = await like_res.findAll({ where: { res_id } });

    if (!listLikeByRes || listLikeByRes.length === 0) {
      throw new Error();
    }
    return listLikeByRes;
  },

  // Lấy danh sách like theo user
  listLikeByUser: async (req) => {
    const { user_id } = req.params;
    const listLikeByUser = await like_res.findAll({ where: { user_id } });

    if (!listLikeByUser || listLikeByUser.length === 0) {
      throw new Error();
    }
    return listLikeByUser;
  },

  // Thêm đánh giá
  addRate: async (req) => {
    const { user_id, res_id, amount } = req.body;

    if (!user_id || !res_id || !amount) {
      throw new Error("Thiếu thông tin đánh giá");
    }

    if (isNaN(amount) || amount <= 0) {
      throw new Error("Số lượng đánh giá không hợp lệ");
    }

    const addRate = await rate_res.create({ user_id, res_id, amount });

    return addRate;
  },

  // Lấy danh sách đánh giá theo nhà hàng
  listRateByRes: async (req) => {
    const { res_id } = req.params;

    if (!res_id) {
      throw new Error("res_id không được cung cấp");
    }
    const listRateByRes = await rate_res.findAll({ where: { res_id } });

    if (!listRateByRes || listRateByRes.length === 0) {
      throw new Error("Không tìm thấy đánh giá cho nhà hàng này");
    }
    return listRateByRes;
  },

  // Lấy danh sách đánh giá theo user
  listRateByUser: async (req) => {
    const { user_id } = req.params;

    if (!user_id) {
      throw new Error("user_id không được cung cấp");
    }

    const listRateByUser = await rate_res.findAll({ where: { user_id } });

    // Nếu danh sách rỗng
    if (!listRateByUser || listRateByUser.length === 0) {
      throw new Error("Không tìm thấy đánh giá cho user này");
    }

    return listRateByUser;
  },

  // Thêm order
  addOrder: async (req) => {
    const { user_id, food_id, amount, code } = req.body;
    // Kiểm tra xem các trường cần thiết có được cung cấp không
    if (!user_id || !food_id || !amount) {
      throw new Error(
        "Thiếu thông tin cần thiết: user_id, food_id hoặc amount"
      );
    }

    // Kiểm tra xem amount có phải số dương không
    if (amount <= 0) {
      throw new Error("Số lượng (amount) phải lớn hơn 0");
    }

    // (Tuỳ chọn) Kiểm tra tính hợp lệ của mã code (nếu có)
    if (code && typeof code !== "string") {
      throw new Error("Mã code không hợp lệ");
    }

    const addOrder = await orders.create({ user_id, food_id, amount, code });
    return addOrder;
  },
};

export default restaurantService;
