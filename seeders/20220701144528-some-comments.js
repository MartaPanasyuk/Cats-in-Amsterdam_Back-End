"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          text: "Was there yesterday, this guy was really monitoring the situation on the street all the time. ",
          userId: 1,
          catId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Caught this princess the other day. It was hard to let her go, she's too pretty.",
          userId: 3,
          catId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
