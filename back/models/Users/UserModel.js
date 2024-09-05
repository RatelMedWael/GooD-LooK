module.exports = (connection, DataTypes) => {
    const Users = connection.define(
      "user",
      {
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          adressmail: {
            type:  DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            }
          }
          ,
        imageUrl:  {
            type: DataTypes.STRING,
            allowNull: false
          },
       
       About:   {
            type: DataTypes.STRING,
            allowNull: false
          },
        password : {
            type: DataTypes.STRING,
            allowNull: false
          },
      },
       
       
    )
    return Users ;
  };