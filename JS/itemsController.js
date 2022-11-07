//import addItemCard from "./items.js";
export default class ItemsController{
    constructor(currentId=0){
        this.items = [];
        this.currentId=currentId;
        this.localStorageItems=[];
   
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
        localStorage.setItem("items", JSON.stringify(this.items));
    }
     loadItemsFromLocalStorage(){
        const storageItems = localStorage.getItem("items")
        console.log("Storage items: " + storageItems)
        if (storageItems) {
            const gen = JSON.parse(storageItems)
            
            console.log(gen);
            //TODO load the items into the local items structure (this.items)  
           for (let i=0; i<gen.length;i++){
               const shirt=gen[i];
               console.log(shirt);
               this.localStorageItems.push(shirt);
           }
           console.log(this.localStorageItems);
        }
       
    }
}

//loadItemsFromLocalStorage();

