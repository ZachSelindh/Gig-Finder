const Sequelize = require("sequelize");
const db = require("../config/connection");

const Gig = db.define("gig", {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

Gig.sync({ force: true });

module.exports = Gig;
