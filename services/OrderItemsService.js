const prisma = require("../lib/prisma");

const updateItems = async (params) => {
  const order = await prisma.order_Items.update({
    where: {
      id: params.id,
    },
    data: {
      is_reviewed: true,
    },
  });

  return order;
};

module.exports = { updateItems };
