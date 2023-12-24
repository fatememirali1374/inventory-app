import Storage from "./Storage.js"

const productTitle= document.querySelector("#product-title");
const productCategory= document.querySelector("#product-category")
const productQuantity= document.querySelector("#product-quantity");
const addNewProductBtn= document.querySelector("#add-new-product");
const productsListDOM= document.querySelector("#products-list");
const searchInput= document.querySelector("#search-input");
const selectedSort=document.querySelector("#sort-products")
class ProductView{
   constructor(){
    addNewProductBtn.addEventListener("click",(e)=>this.addNewProduct(e))
    searchInput.addEventListener("input",(e)=>this.searchProducts(e))
    selectedSort.addEventListener("change",(e)=>this.sortProducts(e))
    this.products=[]
   }

addNewProduct(e){
    e.preventDefault();
    const title = productTitle.value;
    const category = productCategory.value;
    const quantity=productQuantity.value;
    if(!title||!quantity||!category) return; 
    Storage.saveProduct({title,quantity,category});
    this.setApp();
    this.createProductsList(this.products);
   
    productTitle.value="";
    productQuantity.value="";
}
setApp(){
    this.products=Storage.getAllProducts();
}
createProductsList(products){
    let result=``
products.forEach((p)=>{
    const selectedCategory= Storage.getAllCategories().find((c)=>c.id==p.category)
    result+= ` <div  class="flex justify-between mb-2">
    <span>${p.title}</span>
    <div class="flex items-center gap-x-2"> 
      <span>${new Date(p.createdAt).toLocaleDateString("fa-IR")}</span>
      <span
        class="border border-gray-400 bg-transparent rounded-xl text-center px-2 py-0.5"
        >${selectedCategory.title}</span
      >
      <span
        class="flex items-center justify-center bg-gray-400 border-2 border-gray-200 rounded-full w-6 h-6 text-gray-100"
        >${p.quantity}</span
      >
      <button
        class="border border-red-400 text-red-400 rounded-xl px-2 py-0.5" id="delete-product" data-product-id=${p.id}
      >
        delete
      </button>
    </div></div>`
})
productsListDOM.innerHTML=result;


const deleteBtns=[...document.querySelectorAll("#delete-product")];
deleteBtns.forEach((item)=>{
  item.addEventListener("click", (e)=>this.deleteProduct(e))
})
}
searchProducts(e){
 const value= e.target.value.trim().toLowerCase();
 const filteredProducts= this.products.filter((p)=>p.title.toLowerCase().includes(value))
 
 this.createProductsList(filteredProducts);
}
sortProducts(e){
  const value=e.target.value;
  console.log(value);
  this.products= Storage.getAllProducts(value);
  this.createProductsList(this.products)
}
deleteProduct(e){
  const productId=e.target.dataset.productId;
  Storage.deleteProduct(productId);
  this.products=Storage.getAllProducts();
  this.createProductsList(this.products)
}
}
export default new ProductView()