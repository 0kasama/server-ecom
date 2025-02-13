const reviewService = require("../services/ReviewService");

const findAll = async (req, res, next) => {
  try {
    const query = {};
    if (req.query.order_item_id) {
      query.order_item_id = parseInt(req.query.order_item_id);
    }
    if (req.query.product_id) {
      query.product_id = parseInt(req.query.product_id);
    }
    const review = await reviewService.findAll(query);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const review = await reviewService.findOne(req.params);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const params = {
      user_id: req.loggedUser.id,
      body: req.body,
    };
    const review = await reviewService.create(params);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const review = await reviewService.update({
      id: req.params.id,
      body: req.body,
    });
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const review = await reviewService.destroy(req.params);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
};
