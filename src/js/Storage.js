const products = [
    {
      id: 1,
      title: "React.js",
      category: "frontend",
      createdAt: "2021-10-31T15:02:00.411Z",
    },
    {
      id: 2,
      title: "Node.js",
      category: "backend",
      createdAt: "2021-10-31T15:03:23.556Z",
    },
    {
      id: 3,
      title: "Vue.js",
      category: "frontend",
      createdAt: "2021-11-01T10:47:26.889Z",
    },
  ];
  
  const categories = [
    {
      id: 1,
      title: "frontend",
      description: "frontend of applications",
      createdAt: "2021-11-01T10:47:26.889Z",
    },
    {
      id: 2,
      title: "backend",
      description: "the backend of the applications",
      createdAt: "2021-10-01T10:47:26.889Z",
    },
  ];

export default class Storage {
// get all categories
static  getAllCategories(){
    const savedCategories= JSON.parse(localStorage.getItem("category"))||[]
    // sorting =>نزووولی
   const sortedCategories= savedCategories.sort((a,b)=>{new Date(b.createdAt)-new Date(a.createdAt)})
   return sortedCategories;
}

// add new category 
// save category 

static saveCategory(categoryToSave){
    const savedCategories=Storage.getAllCategories();
 const existedItem= savedCategories.find((c)=>c.id===categoryToSave.id)
if(existedItem){
// edit
existedItem.title=categoryToSave.title;
existedItem.description=categoryToSave.description;
}else{
    // new category
    categoryToSave.id= new Date().getTime();
    categoryToSave.createdAt=new Date().toISOString();
    savedCategories.push(categoryToSave)
}
localStorage.setItem("category",JSON.stringify(savedCategories))

}

// get all products
static  getAllProducts(){
    const savedProducts= JSON.parse(localStorage.getItem("products"))||[]
    // sorting =>نزووولی
   const sortedProducts= savedProducts.sort((a,b)=>{new Date(b.createdAt)-new Date(a.createdAt)})
   return sortedProducts;
}

// add new product
// save product

static saveProduct(productToSave){
    const savedProducts=Storage.getAllProducts();
 const existedItem= savedProducts.find((c)=>c.id===productToSave.id)
if(existedItem){
// edit
existedItem.title=productToSave.title;
existedItem.category=productToSave.category;
existedItem.quantity= productToSave.quantity;
}else{
    // new product
    productToSave.id= new Date().getTime();
    productToSave.createdAt=new Date().toISOString();
    savedProducts.push(productToSave)
}
localStorage.setItem("product",JSON.stringify(savedProducts))

}
}
