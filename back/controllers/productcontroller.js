const db = require("../models/index.js")



module.exports = {
  getAll: async(req, res) => {
    try {
      const data = await db.Products.findAll({
        include : [db.Sizes,db.Category,db.Images,db.Collors,db.SubCategory]
         
      })
      res.status(200).json(data)
    }catch(error) {
        throw error
    
        }
},
getAllImg: async(req, res) => {
    try {
      const data = await db.Images.findAll({
        include : [db.Products]
         
      })
      res.status(200).json(data)
    }catch(error) {
        throw error
    
        }
}
}