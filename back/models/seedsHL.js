const db= require("./index");

const HlData = [
    { Name : 'Hand cut and sewn locally'},
      { Name :'Dyed with our proprietary colors'},
      { Name :'Pre-washed & pre-shrunk'},
       {Name :'Ultra-soft 100% cotton'},
    ]

    db.Highlights.bulkCreate(HlData)
    .then(() => {
      console.log(" inserted successfully.");
    })
    .catch((error) => {
      console.error("Error inserting users:", error);
    });