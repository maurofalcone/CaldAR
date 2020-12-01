const mongoose = require("mongoose");
const appointmentsSchemas = require("./appointments")(mongoose);
const boilersSchemas = require("./boilers")(mongoose);
const buildingsSchemas = require("./buildings")(mongoose);
const customersSchemas = require("./customers")(mongoose);
const techniciansSchemas = require("./technicians")(mongoose);
const boilerTypesSchemas = require("./boiler-types")(mongoose);

module.exports = {
  mongoose: mongoose,

  url: process.env.DB_CONNECTION_URL,

  appointments: appointmentsSchemas,
  boilers: boilersSchemas,
  buildings: buildingsSchemas,
  customers: customersSchemas,
  technicians: techniciansSchemas,
  boilerTypes: boilerTypesSchemas,
};
