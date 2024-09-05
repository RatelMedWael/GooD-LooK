module.exports = (connection, DataTypes) => {
    const Sizes = connection.define(
      "size",
       {Name:   {
        type: DataTypes.STRING,
        allowNull: false
      } }
   
       
    )
    return  Sizes;
  };