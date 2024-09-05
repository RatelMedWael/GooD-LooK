module.exports = (connection, DataTypes) => {
    const Products = connection.define(
      "Product",
      { Name:   {
        type: DataTypes.STRING,
        allowNull: false
      } ,
   
        price:{
            type: DataTypes.FLOAT,
            allowNull: false  } ,
        href:     {
            type: DataTypes.STRING,
            allowNull: false
          } ,
          description : {
            type: DataTypes.STRING,
            allowNull: false
          } ,
          details  : {
            type: DataTypes.STRING,
            allowNull: false
     
        }
    }
    )
    return Products;
  };