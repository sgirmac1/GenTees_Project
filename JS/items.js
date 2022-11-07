import ItemsController from "./itemsController.js"
 function addItemCard(item){

    const pro1=document.getElementById("list-items");
    
    let innerhtml="";
    for (let i=0; i<item.length; i++){
        innerhtml+=`<div class="col-4"> <div class="card" style="width: 18rem;">
        <img src="${item[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item[i].description}</h5>
          <a href="#" class="btn btn-primary">Add</a>
        </div>
      </div></div>`

    }
    pro1.innerHTML= innerhtml;

}

 //function getSampleItem(items){
    //localStorage.clear();
    //localStorage.setItem("items", JSON.stringify(items));
    

//}


//  const sampleItem=[{'name': 'Blue T-shirt', 'img': './resources/images/Blue T-shirt.png', 'description': 'Women Blue T-shirt'}, {'name': 'White T-shirt', 'img': './resources/images/White T-shirt.png', 'description': ' Classic White T-shirt'}, {'name': 'Grey T-shirt', 'img': './resources/images/Grey T-shirt.png', 'description': 'Women Grey T-shirt'}, {'name': 'Men Red T-shirt', 'img': './resources/images/Red T-shirt.png', 'description': 'Men Slim-Fit Red T-shirt'}, {'name': 'Pink T-shirt', 'img': './resources/images/Pink T-shirt.png', 'description': 'Children Pink T-shirt'}];

// const itemlist = loadItemsFromLocalStorage;
// console.log(itemlist);
//const newItem = new ItemsController;
//newItem.loadItemsFromLocalStorage();

// newItem.addItem()
//getSampleItem(sampleItem);
//export default addItemCard

const pro1 = new ItemsController;

pro1.addItem("White T-shirt", "Classic White T-shirt", "./resources/images/White T-shirt.png", "2022-2-2")
pro1.addItem("Blue T-shirt", "Women Blue T-shirt","./resources/images/Blue T-shirt.png", "2022-2-2" );
pro1.addItem("Grey T-shirt", "Women Grey T-shirt","./resources/images/Grey T-shirt.png", "2022-2-2" );
pro1.addItem("Red T-shirt", "Men Red T-shirt","./resources/images/Red T-shirt.png", "2022-2-2" );
pro1.addItem("Pink T-shirt", "Children Pink T-shirt","./resources/images/Pink T-shirt.png", "2022-2-2" );
//getSampleItem(pro1.items);

pro1.loadItemsFromLocalStorage();
console.log(pro1.items);
addItemCard(pro1.items);