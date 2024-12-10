const prisma = require('../lib/prisma');
const axios = require('axios');
const slugify = require('slugify');
const { hashPassword } = require('../lib/bcrypt.js');

const main = async () => {
  try {
    // Seeding Province
    const { data: provinceData } = await axios.get(
      'https://api.rajaongkir.com/starter/province',
      {
        headers: {
          key: process.env.RAJAONGKIR_API_KEY,
        },
      }
    );

    const provinces = provinceData.rajaongkir.results.map((item) => {
      return {
        id: +item.province_id,
        name: item.province,
      };
    });

    await prisma.provinces.createMany({
      data: provinces,
    });

    // Seeding City
    const { data: cityData } = await axios.get(
      'https://api.rajaongkir.com/starter/city',
      {
        headers: {
          key: process.env.RAJAONGKIR_API_KEY,
        },
      }
    );

    const cities = cityData.rajaongkir.results.map((item) => {
      return {
        id: +item.city_id,
        name: item.city_name,
        province_id: +item.province_id,
        postal_code: +item.postal_code,
      };
    });

    await prisma.cities.createMany({
      data: cities,
    });

    // Seeding User
    const users = [
      {
        fullname: 'developer',
        email: 'dev@mail.com',
        password: hashPassword('dev123'),
        phone_number: '62812091820938934',
        role: 'USER',
      },
      {
        fullname: 'admin',
        email: 'admin@mail.com',
        password: hashPassword('admin123'),
        phone_number: '62812091823434594',
        role: 'ADMIN',
      },
    ];

    await prisma.users.createMany({
      data: users,
    });

    // Seeding Categories
    const categories = [
      {
        name: "Mom's",
      },
      {
        name: "Baby's",
      },
      {
        name: 'Equipment',
      },
    ];

    await prisma.categories.createMany({
      data: categories,
    });

    // Seeding Stores
    const store = {
      city_id: 153,
      name: 'Baby Store',
      bank_name: 'BCA',
      bank_account: '123456789',
      street_address: 'Jl Example',
    };

    await prisma.stores.create({
      data: store,
    });

    // Seeding Products
    const products = [
      {
        name: 'Eve Maternity Pregnancy Belt',
        slug: slugify('Eve Maternity Pregnancy Belt', { lower: true }),
        sku: 'AA-101',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/pregnancy-belt-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 1,
      },
      {
        name: 'Eve Maternity Nursing Dress',
        slug: slugify('Eve Maternity Nursing Dress', { lower: true }),
        sku: 'AA-102',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/nursing-dress-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 1,
      },
      {
        name: 'Eve Maternity Pregnancy Legging',
        slug: slugify('Eve Maternity Pregnancy Legging', { lower: true }),
        sku: 'AA-103',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/pregnancy-legging-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 1,
      },
      {
        name: 'Fransisca Renaldy Toodler Shoes',
        slug: slugify('Fransisca Renaldy Toodler Shoes', { lower: true }),
        sku: 'BB-101',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/toodler-shoes-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 2,
      },
      {
        name: 'Cool Kids Baby Dress',
        slug: slugify('Cool Kids Baby Dress', { lower: true }),
        sku: 'BB-102',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/baby-dress-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 2,
      },
      {
        name: 'Banana Baby Jumper',
        slug: slugify('Banana Baby Jumper', { lower: true }),
        sku: 'BB-103',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/baby-jumper-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 2,
      },
      {
        name: 'Mooimom Hipseat',
        slug: slugify('Mooimom Hipseat', { lower: true }),
        sku: 'CC-101',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/hipseat-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 3,
      },
      {
        name: 'Maxi Cosi Stroller',
        slug: slugify('Maxi Cosi Stroller', { lower: true }),
        sku: 'CC-102',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/stroller-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 3,
      },
      {
        name: 'Playmat',
        slug: slugify('Playmat', { lower: true }),
        sku: 'CC-103',
        stock: 100,
        price: 100000,
        weight: 500,
        image: 'http://localhost:5000/api/v1/images/playmat-1.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis elit in iaculis faucibus. Integer laoreet maximus odio, ac gravida sapien bibendum vel. Nulla pulvinar.',
        category_id: 3,
      },
    ];

    await prisma.products.createMany({ data: products });

    // Seeding Address
    const addresses = [
      {
        title: 'Rumah',
        city_id: 153,
        street_address: 'Jl Senopati',
        user_id: 1,
      },
      {
        title: 'Kantor',
        city_id: 153,
        street_address: 'Jl Fatmawati',
        user_id: 1,
      },
    ];

    await prisma.addresses.createMany({ data: addresses });

    // Seeding Cart
    const carts = {
      user_id: 1,
      store_id: 1,
      total_price: 100000,
      courier: 'JNE',
      total_weight: 500,
      shipping_method: 'REGULER',
      shipping_cost: 30000,
      cart_items: {
        create: {
          product_id: 1,
          quantity: 1,
          price: 100000,
        },
      },
    };

    await prisma.carts.create({ data: carts });

    // Seeding Wishlists
    const wishlists = {
      user_id: 1,
      product_id: 1,
    };

    await prisma.wishlists.create({ data: wishlists });

    // Seeding Orders
    const orders = {
      user_id: 1,
      store_id: 1,
      shipping_cost: 30000,
      shipping_method: 'REGULER',
      courier: 'JNE',
      total_weight: 500,
      total_price: 100000,
      order_items: {
        create: {
          product_id: 1,
          quantity: 1,
          price: 100000,
        },
      },
    };

    await prisma.orders.create({ data: orders });

    const reviews = {
      user_id: 1,
      product_id: 1,
      rating: 5,
      comments: 'Mantabbbb',
    };

    await prisma.reviews.create({ data: reviews });
  } catch (err) {
    console.log(err);
  }
};

main();
