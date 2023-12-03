const mysql = require('mysql2/promise');
require("dotenv").config()

let my_local_host = process.env.MY_LOCAL_HOST
let my_local_database = process.env.MY_LOCAL_DATABASE
let my_local_user = process.env.MY_LOCAL_USER
let my_local_pass = process.env.MY_LOCAL_PASS

const conLocal = mysql.createPool({
    host: my_local_host,
    user: my_local_user,
    password: my_local_pass,
    database: my_local_database,
    min: 5,
    max: 30
  });

async function executaQryLocal(qry) {
    let resposta;
    let connection = await conLocal.getConnection();
    try {
      let [rows, fields] = await connection.execute(qry);
  
      resposta = { dados: rows, msg: "" };
    } catch (e) {
      resposta = { dados: null, msg: "erro" };
      console.log(e.message);
    } finally {
      connection.release();
    }
  
    return resposta;
  }

  module.exports = {executaQryLocal};


