const prisma = require('../lib/prisma');

const findProvinces = async () => {
  try {
    const data = await prisma.provinces.findMany();
    return data;
  } catch (err) {
    throw err;
  }
};

const findAll = async (params) => {
  try {
    const data = await prisma.cities.findMany({
      where: params.province_id ? { province_id: +params.province_id } : {},
      include: {
        province: {
          select: {
            name: true,
          },
        },
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

const findOne = async (params) => {
  try {
    const data = await prisma.cities.findUnique({
      where: {
        id: params,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findProvinces,
  findAll,
  findOne,
};
