import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "reactflow",
  'postgres',
  'admin12345678',
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export const catchAsync = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch((err) => {
      return next(err);
    });
  };
};
