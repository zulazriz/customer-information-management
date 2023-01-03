const Knex = require("knex");
// const mysql = require("mysql");

let database = "user_management";
const host = "localhost";
const user = "root";
const password = "";

const connection = {
  host,
  user,
  password,
  database,
};

// Create a connection
function execute() {
  return Knex({
    client: "mysql",
    connection,
  });
}

const connect = Knex({ client: "mysql", connection });

module.exports = { execute, connect };
