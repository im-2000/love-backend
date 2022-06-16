"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          name: "Nick",
          age: 30,
          gender: "male",
          imageUrl:
            "https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait.jpg",
          about:
            "I love programming, it's like magic for me. I have taken a few courses of ZTM. And I love the creativity of bringing out new and exciting things which actually defines programming as a magic. Andrei helps in every way he can so that a person can have a better future, get help and make him/her professional.",
          language: "Java",
          location: "Amsterdam",
          githubUrl: "https://github.com/",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amely",
          age: 30,
          gender: "female",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAgxc-HVlsb2nxuifrHdbdjoRvJHKoXPs1g&usqp=CAU",
          about:
            "HEY MAN! I'm a very happy and jolly girl, live a very healthy live, I take really good care of my body, also I'm a hard worker, I love to work and dance and keep my self useful, love to travel, and I'm a sucker for NetFlix series, so that would be a perfect date, you and me cuddling under a blanket watching NetFlix and eating popcorn with ice cream, are you up for it?:fearful::eyes: ",
          language: "JavaScript",
          location: "Rotterdam",
          githubUrl: "https://github.com/",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phobe",
          age: 40,
          gender: "Female",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg",
          about:
            "I am a developer with 6 years experience. Besides, I play music while the rest of my friends loaf, lounge, and whine. I have values! I believe in animal rights and have a deliberately pacifistic worldview. All in all, I have character. I have an air of agency, maturity, and capable independence",
          language: "JavaScript",
          location: "Utrecht",
          githubUrl: "https://github.com/",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ross",
          age: 20,
          gender: "Male",
          imageUrl:
            "https://www.looper.com/img/gallery/the-friends-fan-theory-that-will-have-you-looking-twice-at-ross/intro-1643549733.jpg",
          about:
            "I am a developer for 12 years. Also, karate – I pronounce it “kar-aa-tay”– which also draws grief from my friends. I am baffled by my friends’ mockery. I also have a passion for rocks, occasionally sports, and even dancing.",
          language: "Java",
          location: "Haarlem",
          githubUrl: "https://github.com/",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mark",
          age: 30,
          gender: "male",
          imageUrl:
            "http://upload.wikimedia.org/wikipedia/commons/4/4e/Jacob_Mark_p%C3%A5_ChrBorg_NOV_2018_Foto_William_Vest-Lillesoe_WEB-9_%28cropped%29.jpg",
          about:
            "Python developer with 8 years of experience in finance and fintech. Well-acquainted with database engineering, data warehouses, and data processing. Knowledgeable in Python frameworks related to data such as SciPy, NumPy, Matplotlib. Cloudera certified Data analyst, PCPP-1 certification and Spark/Hadoop developer certification.",
          language: "Python",
          location: "Amsterdam",
          githubUrl: "https://github.com/",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daniella",
          age: 25,
          gender: "female",
          imageUrl:
            "https://iglives.tv/wp-content/uploads/2020/03/daniellamonet_mar4.jpg",
          about:
            "Around 5 years of experience on Cross Platform Web/Client-Server applications design and development using Java, J2EE and application server technologies. Expertise in Core Java concepts such as Multi-Threading, Generics, Exception Handling, Collections Framework, etc.",
          language: "Javascript",
          location: "Rotterdam",
          githubUrl: "https://github.com/",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roberta",
          age: 35,
          gender: "female",
          imageUrl:
            "https://images.boardriders.com/globalGrey/billabong-products/all/default/hi-res/x3st24bimu_billabong,w_0748_frt1.jpg",
          about:
            "Around 5 years of experience on Cross Platform Web/Client-Server applications design and development using Java, J2EE and application server technologies. Expertise in Core Java concepts such as Multi-Threading, Generics, Exception Handling, Collections Framework, etc.",
          language: "Phyton",
          location: "Amsterdam",
          githubUrl: "https://github.com/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "David",
          age: 30,
          gender: "male",
          imageUrl:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
          about:
            "Around 5 years of experience on Cross Platform Web/Client-Server applications design and development using Java, J2EE and application server technologies. Expertise in Core Java concepts such as Multi-Threading, Generics, Exception Handling, Collections Framework, etc.",
          language: "Java",
          location: "Amsterdam",
          githubUrl: "https://github.com/",
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
