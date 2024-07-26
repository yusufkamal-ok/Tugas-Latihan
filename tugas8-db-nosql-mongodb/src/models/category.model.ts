import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Category_schema = new Schema(
    {nameCategori: {
      type: String,
      required: true,
    }
  },
    {
      timestamps: true,
  });

const CategoryModel = mongoose.model("Category",Category_schema);
export default CategoryModel;
