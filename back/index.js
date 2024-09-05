const express = require("express");
const cors = require ('cors');
let App = express();
const port = 4000;
const ProductRoutes=require("./routers/ProductRoute")
const ImgRoutes=require("./routers/ProductRoute")
App.use(cors())
App.use(express.json())
App.use('/api/product',ProductRoutes)
App.use('/api/product/Img',ImgRoutes)
require("./models/index")


App.listen(port, () => {
    console.log(`app listening on http://127.0.0.1:${port}`);
});