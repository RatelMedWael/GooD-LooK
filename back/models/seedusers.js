const db= require("./index");

const usersData = [
    {
        name: 'hakim ',
        adressmail: 'hakim@hakim.com',
        imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
       
       About : 'bla bla bla ',
    password : "jolie"
      },
      {
        name: 'samir ',
        adressmail: 'samir@hakim.com',
        imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
       
       About : 'bla bla bla ',
    password : "jolie"
      },
      {
        name: 'walid ',
        adressmail: 'walid@hakim.com',
        imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
       
       About : 'bla bla bla ',
    password : "jolie"
      },
      {
        name: 'fawzi ',
        adressmail: 'fawzi@hakim.com',
        imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
       
       About : 'bla bla bla ',
    password : "jolie"
      },
      {
        name: 'karim ',
        adressmail: ' karim@hakim.com',
        imageUrl: 'https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid',
       
       About : 'bla bla bla ',
    password : "jolie"
      },
   
  ]


  db.Users.bulkCreate(usersData)
.then(() => {
  console.log("Users inserted successfully.");
})
.catch((error) => {
  console.error("Error inserting users:", error);
});
