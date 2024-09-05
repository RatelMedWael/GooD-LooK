module.exports = (connection, DataTypes) => {
    const Highlights = connection.define(
      "highlights",
       {Name:   {
        type: DataTypes.STRING,
        allowNull: false
      } }
   
       
    )
    return Highlights;
  };