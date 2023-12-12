import Storage from "./Storage.js"

const categoryTitle= document.querySelector("#category-title");
const categoryDescription= document.querySelector("#category-description");
const addNewCategoryBtn= document.querySelector("#add-new-category");

export default class CategoryView{
constructor(){
    addNewCategoryBtn.addEventListener("click",(e)=>this.addNewCategory(e))
    this.categories=[]
}
addNewCategory(e){
    e.preventDefault();
    const title = categoryTitle.value;
    const description=categoryDescription.value;
    if(!title||!description) return; 
    Storage.saveCategory({title,description});
    this.categories=Storage.getAllCategories();
}
}