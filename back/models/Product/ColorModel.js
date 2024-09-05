module.exports = (connection, DataTypes) => {
    const Collors = connection.define(
      "color",
       {name:   {
        type: DataTypes.STRING,
        allowNull: false
      },
      class:   {
        type: DataTypes.STRING,
        allowNull: false
      },
     
     selectedClass:   {
        type: DataTypes.STRING,
        allowNull: false
      },
     }
   
       
    )
    return  Collors ;
  };