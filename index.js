const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const porta = 5000; 
const app = express();


app.use(cors());
app.use(helmet());


const dadosRouter = require("./routes/dados");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    funcionou: false,
    msg: "Result Off *2 ",
    dados: [],
  });
});
app.use("/dados", dadosRouter);

//app.use(cors());
app.listen(porta, () => console.log("API online na porta " + porta));
