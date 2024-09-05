const {getAll,getAllImg} = require("../controllers/productcontroller")
const express = require("express");
const Router = express.Router();

Router.get('/getAll',getAll);
Router.get('./getAll ',getAllImg)

module.exports = Router;