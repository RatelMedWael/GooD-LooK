const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("good-look", "root", "root", {
  host: "localhost",
  dialect: "mysql",
 
});


connection.authenticate()
.then(()=>{
  console.log('tekhdem jawha behi');
  
})
.catch((error)=>{
  console.log('mahabetch tekhdem khater :',error);
  
})




const db = {}

db.Products = require("./Product/ProductModel")(connection, DataTypes)
db.Sizes = require("./Product/sizeModel")(connection, DataTypes)
db.Images = require("./Product/ImageModel")(connection, DataTypes)
db.Collors = require("./Product/ColorModel")(connection, DataTypes)
db.Highlights = require("./Product/HighlightModel")(connection, DataTypes)
db.Category  = require("./Category/categoryModel.JS")(connection, DataTypes)
db.SubCategory  = require("./Category/subcatModel")(connection, DataTypes)
db.Cards  = require("./Users/cardModel")(connection, DataTypes)
db.Users  = require("./Users/UserModel")(connection, DataTypes)
db.ProductDrop2  = require("./Product/ProductDrop2")(connection, DataTypes)


 



db.Sizes.hasMany(db.Products)
db.Products.belongsTo(db.Sizes)

db.Collors.hasMany(db.Products)
db.Products.belongsTo(db.Collors)

db.Products.hasMany(db.Images)
db.Images.belongsTo(db.Products)





db.Category.hasMany(db.Products)
db.Products.belongsTo(db.Category)

db.SubCategory.hasMany(db.Products)
db.Products.belongsTo(db.SubCategory)




db.Products.belongsToMany(db.Users, { through: db.Cards  })
db.Users.belongsToMany(db.Products, { through : db.Cards   })
















// connection.sync()
// .then(()=>{
//   console.log('sync w jawha behi ');

  
// })
// .catch((error)=>{
//   console.log('sync makhedmetch khater ',error);
  
// })

module.exports =  db