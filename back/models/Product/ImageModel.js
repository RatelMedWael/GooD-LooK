module.exports = (connection, DataTypes) => {
    const Images = connection.define(
      "image",
       {src:   {
        type: DataTypes.STRING,
        allowNull: false
      },
      alt:   {
        type: DataTypes.STRING,
        allowNull: false
      },
     }
   
       
    )
    return Images ;
  };