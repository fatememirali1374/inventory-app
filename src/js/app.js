import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded",()=>{
    // setApp=> categories & products
    CategoryView.setApp();
    ProductView.setApp();
    // create categoris options & products list
    CategoryView.createCategoriesList()
    ProductView.createProductsList(ProductView.products)
})