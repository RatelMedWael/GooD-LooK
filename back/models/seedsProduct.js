const db= require("./index");
const ProductsData = [
    {
     
      Name: 'Basic Tee 6-Pack',
      price: 120 ,
      href: '#',
   
    
      
    
      description:
        'bla bla bla ' ,
     
      details:
      'bla bla bla ' ,
   sizeId : 1 ,
   colorId : 1 , 
   categoryId : 1 , 
   subcategoryId : 1 , 
   
    }
    ,
    {
     
        Name: 'Basic Tee 6-Pack',
  price: 120,
  href: '#',
 
  description:
  'bla bla bla ' ,

  details:
  'bla bla bla ' ,
    sizeId : 1 ,
    colorId : 2 , 
    categoryId : 1 , 
    subcategoryId : 1 , 

},
    {
     
        Name: 'Basic Tee 6-Pack',
  price:  120 ,
  href: '#',
  
  
  description:
  'bla bla bla ' ,
 
  details:
  'bla bla bla ' ,
    sizeId : 1 ,
    colorId : 3 , 
    categoryId : 1 , 
    subcategoryId : 1 , 
},
    {
      
        Name: 'Basic Tee 6-Pack',
  price: 120,
  href: '#',
  
 
  description:
  'bla bla bla ' ,
 
  details:
  'bla bla bla ' ,
    sizeId : 2 ,
    colorId : 1 , 
    categoryId : 1 , 
    subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
sizeId : 2 , 
  colorId : 2 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},

{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 2 ,
  colorId : 3 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 3 ,
  colorId : 1 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 3 ,
  colorId : 2 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 3 ,
  colorId : 3 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 4 ,
  colorId : 1 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 4 ,
  colorId : 2 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 4 ,
  colorId : 3 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 5 ,
  colorId : 1 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 5 ,
  colorId : 2 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
{
      
    Name: 'Basic Tee 6-Pack',
price: 120,
href: '#',


description:
'bla bla bla ' ,

details:
'bla bla bla ' ,
  sizeId : 5 ,
  colorId : 3 , 
  categoryId : 1 , 
  subcategoryId : 1 , 

},
    
  ] ;
  db.Products.bulkCreate(ProductsData)
  .then(() => {
    console.log("Users inserted successfully.");
  })
  .catch((error) => {
    console.error("Error inserting users:", error);
  });