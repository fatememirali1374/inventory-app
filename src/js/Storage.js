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
    const savedCategories= JSON.parse(localStorage.getItem("category"))
    // sorting =>نزووولی
    savedCategories.sort((a,b)=>{new Date(a.createdAt)-new Date(b.createdAt)})
}

// add new category & product
// save category & product

}