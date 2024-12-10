const cityService = require('../services/CityService');

const findProvinces = async (req, res, next) => {
  try {
    const data = await cityService.findProvinces();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const findAll = async (req, res, next) => {
  try {
    const params = req.query;

    const data = await cityService.findAll(params);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const findOne = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await cityService.findOne(parseInt(id));
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findProvinces,
  findAll,
  findOne,
};
