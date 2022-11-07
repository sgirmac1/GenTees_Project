//import addItemCard from "./items.js";
export default class ItemsController{
    constructor(currentId=0){
        this.items = [];
        this.currentId=currentId;
   
    }
   
    addItem(name, description, img, createdAt){
        this.currentId++
        const newItem={
            id: 0,
            name:"" ,
            description:"" ,
            img: "",
            createdAt: ""

        }
        newItem.id=this.currentId;
        newItem.name=name;
        newItem.description=description;
        newItem.img=img;
        newItem.createdAt=createdAt;
        this.items.push(newItem);
        localStorage.setItem("items", JSON.stringify(newItem));
    }
     loadItemsFromLocalStorage(){
        const storageItems = localStorage.getItem("items")
        console.log("Storage items: " + storageItems)
        if (storageItems) {
            const items = JSON.parse(storageItems)
            
            console.log(items);
            //TODO load the items into the local items structure (this.items)  
           for (let i=0; i<items.length;i++){
               const item=items[i];
               console.log(item);
               this.items.push(item);
           }
           console.log(this.items);
        }
       
    }
}

//loadItemsFromLocalStorage();

