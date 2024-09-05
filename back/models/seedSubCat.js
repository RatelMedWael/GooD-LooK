
const db= require("./index");
  
  const SubCatData = [
    {
        name: 'Men T-shirts ',
        description: ' Check Products',
        imageSrc: 'https://static.zara.net/assets/public/05e5/27c2/dd544414b2fc/125916f22d9b/01887450501-p/01887450501-p.jpg?ts=1725351863475&w=563://static.zara.net/assets/public/c40e/a8a8/a4b9449d9049/f357188fb16f/01165232800-p/01165232800-p.jpg?ts=1725008056888&w=563',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
           view : "/AllF"
      },
      {
        name: 'Men Jeans ',
        description: 'Check Products',
        imageSrc: 'https://static.zara.net/assets/public/24c7/1e2b/7e3c401a9b4d/3e7de79b55cf/08062449406-p/08062449406-p.jpg?ts=1709902960061&w=563.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
           view : "/AllF"
      },
      {
        name: 'Men Shoes ',
        description: 'Check Products',
        imageSrc: 'https://static.zara.net/assets/public/c755/c6b4/56604bf0ae5b/8649995283b1/12403420800-e1/12403420800-e1.jpg?ts=1724398254280&w=563',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
           view : "/AllF"
      },
    {
      name: 'Women T-shirts ',
      description: 'Check Products',
      imageSrc: 'https://static.zara.net/assets/public/c40e/a8a8/a4b9449d9049/f357188fb16f/01165232800-p/01165232800-p.jpg?ts=1725008056888&w=563',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
         view : "/AllF"
    },
    {
      name: 'Women Jeans ',
      description: 'Check Products',
      imageSrc: 'https://static.zara.net/assets/public/4966/8234/85ce462b92f9/4e7987d21d3a/04406152407-p/04406152407-p.jpg?ts=1724946565931&w=563',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
         view : "/AllF"
    },
    {
      name: 'Women Shoes ',
      description: ' Check Products',
      imageSrc: 'https://classyandunique.com/cdn/shop/products/product-image-1406164950_800x.jpg?v=1608872325',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
         view : "/AllF"
    },
    {
        name: 'Kids T-shirts ',
        description: 'Check Products',
        imageSrc: 'https://thegoodtee.com/cdn/shop/collections/MG_6405.jpg?v=1613606969://static.zara.net/assets/public/c40e/a8a8/a4b9449d9049/f357188fb16f/01165232800-p/01165232800-p.jpg?ts=1725008056888&w=563',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
           view : "/AllF"
      },
      {
        name: 'Kids Jeans ',
        description: 'Check Products',
        imageSrc: 'https://www.mumkins.in/cdn/shop/collections/Catlog-boy-jeans-_-pants.jpg?v=1686808179.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
           view : "/AllF"
      },
      {
        name: 'kids Shoes ',
        description: 'Check Products',
        imageSrc: 'https://m.media-amazon.com/images/I/517ptP9GIoL._AC_UF1000,1000_QL80_.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
           view : "/AllF"
      },
     
   
  ]

  db.SubCategory.bulkCreate(SubCatData)
  .then(() => {
    console.log("Users inserted successfully.");
  })
  .catch((error) => {
    console.error("Error inserting users:", error);
  });