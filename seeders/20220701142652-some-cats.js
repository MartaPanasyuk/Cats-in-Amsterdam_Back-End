"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cats",
      [
        {
          name: "Marko, amazing neighborhood cat",
          picture:
            "https://i.pinimg.com/564x/45/ce/81/45ce810d432d96eeb91e0fd241a80d4d.jpg",
          description:
            "This This guy is incredible. If you see him on the street, be careful. He won't let you go before you cuddle him.",
          seenTime: 1,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cat Boss",
          picture:
            "https://i.pinimg.com/564x/0f/0e/43/0f0e439528f1144f551c93cfc724afbd.jpg",
          description:
            "One of my friend, always welcoming me in the morning, when I am going for a work",
          seenTime: 1,
          lat: 3489,
          long: 564,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grey cat",
          picture:
            "https://i.pinimg.com/564x/96/17/a7/9617a73104fa6bd7addb8f2ea49f612b.jpg",
          description: "Super Fluffy and friendly, my kids adore her.",
          seenTime: 3,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orange cat",
          picture:
            "https://i.pinimg.com/564x/a0/ea/ea/a0eaea0f0936fc8a6d3b9273536dfaec.jpg",
          description:
            "We don't know the real name of this guy, but he always welcomes everyone who is going through his window.Maybe in his previous life, he was a policeman.",
          seenTime: 1,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shadow",
          picture:
            "https://i.pinimg.com/564x/46/c4/7a/46c47aaacdd80b2d77518e0902552bc0.jpg",
          description:
            "She is a bit scared of people but at the same time can't let you go without welcoming meeeow ",
          seenTime: 2,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orange",
          picture:
            "https://i.pinimg.com/564x/92/87/71/9287717fbd8f64a0352db09a9480c25b.jpg",
          description: "Hey, looks who was who got caught on tape.  ",
          seenTime: 2,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "William",
          picture:
            "https://i.pinimg.com/564x/79/78/62/797862c22444d13e3417a8eb572b4ac2.jpg",
          description:
            "It's my bro, who lives in a zoo shop near me. As I understand he is working there as a junior sales consultant:). If you go there, don't forget to bring some treats with you ",
          seenTime: 1,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luna",
          picture:
            "https://i.pinimg.com/564x/60/e4/5a/60e45a3d03c781fbcce4cecc2e86cf7c.jpg",
          description:
            "Be careful, if you see her on the street it means, that you will be stuck there for 30 min minimum. this little woman will be super persistent ask you to play with her. ",
          seenTime: 1,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Garry",
          picture:
            "https://i.pinimg.com/564x/be/21/c0/be21c02833e4e2e535e6571af42615b7.jpg",
          description:
            "This young man with a great manners will not forgive you, If you you will pass by and don't pet him or  at least his back. ",
          seenTime: 1,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cowboy marlboro",
          picture:
            "https://i.pinimg.com/originals/c4/7e/31/c47e31aa0a0fa501ac52b81b75f88fe2.jpg",
          description:
            "This brutal cat lives not far from my house. He won't let you touch him for free, but after some snaks, you have a chance to get a free cat-bodyguard",
          seenTime: 1,
          lat: 34,
          long: 56,
          ownerId: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cats", null, {});
  },
};
