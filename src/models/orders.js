import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class orders extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false, // Không cho phép null
          primaryKey: true, // Đặt làm khóa chính
          references: {
            model: "users",
            key: "user_id",
          },
        },
        food_id: {
          type: DataTypes.INTEGER,
          allowNull: false, // Không cho phép null
          primaryKey: true, // Đặt làm khóa chính
          references: {
            model: "food",
            key: "food_id",
          },
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        ar_sub_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "orders",
        timestamps: false,
        indexes: [
          {
            name: "user_id",
            using: "BTREE",
            fields: [{ name: "user_id" }],
          },
          {
            name: "food_id",
            using: "BTREE",
            fields: [{ name: "food_id" }],
          },
        ],
      }
    );
  }
}
