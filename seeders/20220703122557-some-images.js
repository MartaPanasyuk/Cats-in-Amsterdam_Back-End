"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          url: "https://i.pinimg.com/564x/0a/61/b5/0a61b586d48da75d864e71deb7fad020.jpg",
          userId: 3,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://i.pinimg.com/564x/71/35/0d/71350d99ecc66e00659f010fc867d579.jpg",
          userId: 4,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://i.pinimg.com/564x/cc/65/eb/cc65eb75d3f21da17cedd16db59b588b.jpg",
          userId: 2,
          catId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
