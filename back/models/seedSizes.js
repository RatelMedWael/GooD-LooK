
const db= require("./index");
const   sizeData = [
   
    { Name : 'XS'},
    {  Name : 'S' },
    {  Name : 'M' },
    {  Name : 'L' },
    {  Name : 'XL' },
    
    
  ] 
  db.Sizes.bulkCreate(sizeData)
  .then(() => {
    console.log("Users inserted successfully.");
  })
  .catch((error) => {
    console.error("Error inserting users:", error);
  });