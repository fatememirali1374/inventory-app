import Storage from "./Storage.js"

const categoryTitle= document.querySelector("#category-title");
const categoryDescription= document.querySelector("#category-description");
const addNewCategoryBtn= document.querySelector("#add-new-category");
const productDOM= document.querySelector("#product-category");
const toggleAddCategoryBtn= document.getElementById("toggel-add-category");
const categoriyWrapper=document.querySelector("#category-wrapper");
const cancelAddCategory=document.getElementById("cancel-add-category")
 class CategoryView{
constructor(){
    addNewCategoryBtn.addEventListener("click",(e)=>this.addNewCategory(e))
   toggleAddCategoryBtn.addEventListener("click",e=>this.toggleAddCategory(e))
   cancelAddCategory.addEventListener("click", (e)=>this.cancelAddCategory(e))
    this.categories=[]
}
addNewCategory(e){
    e.preventDefault();
    const title = categoryTitle.value;
    const description=categoryDescription.value;
    if(!title||!description) return; 
    Storage.saveCategory({title,description});
    this.setApp();
    this.createCategoriesList();
    categoryTitle.value="";
    categoryDescription.value="";
    categoriyWrapper.classList.add("hidden");
toggleAddCategoryBtn.classList.remove("hidden")
}
setApp(){
    this.categories=Storage.getAllCategories();
}
createCategoriesList(){
let result=`<option class="bg-gray-500 text-gray-200" value="">
select a category
</option>`
this.categories.forEach((c)=>{
    result+= `<option class="bg-gray-500 text-gray-200" value=${c.id}>
    ${c.title}
  </option>`
})
productDOM.innerHTML=result;
}
toggleAddCategory(e){
    e.preventDefault();
categoriyWrapper.classList.remove("hidden");
toggleAddCategoryBtn.classList.add("hidden")
}
cancelAddCategory(e){
    e.preventDefault();
    categoriyWrapper.classList.add("hidden");
    toggleAddCategoryBtn.classList.remove("hidden")
}
}
export default new CategoryView()