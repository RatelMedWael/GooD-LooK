module.exports = (connection, DataTypes) => {
    const SubCategory = connection.define(
      "subcategory",
      {
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        description: {
            type: DataTypes.STRING,
            allowNull: false
          },
        imageSrc:  {
            type: DataTypes.STRING,
            allowNull: false
          },
        imageAlt:  {
            type: DataTypes.STRING,
            allowNull: false
          },
        href:  {
            type: DataTypes.STRING,
            allowNull: false
          },
        view : {
            type: DataTypes.STRING,
            allowNull: false
          },
      },
       
       
    )
    return SubCategory ;
  };