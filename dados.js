const express = require("express");
const router = express.Router();
const {executaQryLocal} = require("../database");

router.get("/", (req, res) => {
  res.json({
    funcionou: false,
    msg: "Entrou na rota",
    dados: [],
  });
});


router.get("/listacafe", async (req, res) => {
    
    try {
      let qry = `
      select * from cafe;
      `;
      let res1 = await executaQryLocal(qry);
      res.json(res1);
    } catch (e) {
      console.log(e);
    }
  });



router.get("/carrinhoadd/:descricao/:id", async (req, res) => {
  let descricaocafe = req.params.descricao
  let idcafe = req.params.id
  try {
    let qry = `
    insert into carrinho (descricao, cafe_id) VALUES ('${descricaocafe}', '${idcafe}')
    `;
    let res2 = await executaQryLocal(qry);
    res.json(res2);
  } catch (e) {
    console.log(e);
  }
});

router.get("/carrinhodelete/:descricao", async (req, res) => {
  let descricaocafe = req.params.descricao

  try {
    let qry = `
   delete from carrinho where descricao = '${descricaocafe}'
    `;
    let res3 = await executaQryLocal(qry);
    res.json(res3);
  } catch (e) {
    console.log(e);
  }
});

router.get("/carrinhoview", async (req, res) => {

  try {
    let qry = `
    SELECT cafe.descricao, cafe.valor FROM cafe INNER JOIN carrinho ON (cafe.descricao = carrinho.descricao)
    `;
    let res4 = await executaQryLocal(qry);
    res.json(res4);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;