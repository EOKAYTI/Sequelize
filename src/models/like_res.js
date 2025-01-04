import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class like_res extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, // Đặt làm một phần của khóa chính
          references: {
            model: "users",
            key: "user_id",
          },
        },
        res_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, // Đặt làm một phần của khóa chính
          references: {
            model: "restaurant",
            key: "res_id",
          },
        },
        date_like: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), // Gán giá trị mặc định
        },
      },
      {
        sequelize,
        tableName: "like_res",
        timestamps: false,
        indexes: [
          {
            name: "user_id",
            using: "BTREE",
            fields: [{ name: "user_id" }],
          },
          {
            name: "res_id",
            using: "BTREE",
            fields: [{ name: "res_id" }],
          },
        ],
      }
    );
  }
}
