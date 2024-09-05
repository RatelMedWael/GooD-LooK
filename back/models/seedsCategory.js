const db= require("./index");

const categorysData = [
    {
      name: 'Men',
      description: 'Get ready for our new collection',
      imageSrc: 'https://artisanscanada.com/cdn/shop/products/t-shirt-fait-au-quebec.jpg?v=1661869964&width=1080',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
      view : "/subcatm" ,
    },
    {
      name: 'Women',
      description: 'Get ready for our new collection',
      imageSrc:" https://lifestyle.bmw.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-BMW/default/dw3b79a1d6/images/large/701228701002_mp_01_bmwlife.jpg?sw=800&sh=1200&sm=fit",
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
       view : "/subcat"
    },
    {
      name: 'Kids',
      description: 'Get ready for our new collection',
      imageSrc:"https://admin.kidsaround.com/wp/wp-content/uploads/2024/02/Comment-etiqueter-les-vetements-des-enfants-edited.jpg",
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
       view : "/subcatK"
    },
  ]

  db.Category.bulkCreate(categorysData)
  .then(() => {
    console.log("Users inserted successfully.");
  })
  .catch((error) => {
    console.error("Error inserting users:", error);
  });