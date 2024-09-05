const db= require("./index");

const colorsData=  [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ]
  db.Collors.bulkCreate(colorsData)
  .then(() => {
    console.log("Users inserted successfully.");
  })
  .catch((error) => {
    console.error("Error inserting users:", error);
  });