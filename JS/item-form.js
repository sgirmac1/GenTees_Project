import ItemsController from "./itemsController.js";

let newProduct = new ItemsController;
const form = document.getElementById("product-form");

function getNewProduct(event){
    event.preventDefault();
    const time = new Date();
newProduct.addItem(form[0].value, form[1].value, form[2].value, time);
newProduct.loadItemsFromLocalStorage();
console.log(newProduct.items);
};
form.addEventListener('submit', getNewProduct);
