import { errorMessages, successMessages } from "../constants/message.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const getProducts = async (req, res, next) => {
  try {
    const data = await Product.find().populate("category");
    if (data && data.length > 0) {
      return res.status(200).json({
        message: "Get all product successfully!",
        data,
      });
    }
    return res.status(404).json({ message: "Not found!" });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    const updateCategory = await Category.findByIdAndUpdate(
      data.category,
      {
        $push: { products: data._id },
      },
      { new: true }
    );

    if (!data || !updateCategory) {
      return res.status(400).json({ message: "Create product false!" });
    }
    return res.status(201).json({
      message: "Create product successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const data = await Product.findById(req.params.id).populate("category");
    if (!data) {
      return res.status(400).json({ message: "Get product false!" });
    }
    return res.status(201).json({
      message: "Update product successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndUpdate(`${req.params.id}`, req.body, {
      new: true,
    });
    const updateCategory = await Category.findByIdAndUpdate(
      data.category,
      {
        $push: { products: data._id },
      },
      { new: true }
    );
    if (!data || !updateCategory) {
      return res.status(400).json({ message: errorMessages.UPDATE_FAIL });
    }
    return res.status(201).json({
      message: successMessages.UPDATE_PRODUCT_SUCCESS,
      data,
    });
  } catch (error) {
    next(error);
  }
};

// ! Xoá cứng! Không dùng
export const removeProductById = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).json({
        message: successMessages.DELETE_PRODUCT_SUCCESS,
        data,
      });
    }
    return res.status(400).json({ message: errorMessages.DELETE_FAIL });
  } catch (error) {
    next(error);
  }
};

// ! Xoá mềm
export const softRemoveProductById = async (req, res, next) => {
  try {
    const data = await Product.findByIdAndUpdate(
      `${req.params.id}`,
      {
        hide: true,
      },
      {
        new: true,
      }
    );
    //! findByIdAndUpdate !== findByIdAndRemove
    if (!data) {
      return res.status(400).json({ message: "Update product false!" });
    }
    return res.status(201).json({
      message: "Updated product successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};
