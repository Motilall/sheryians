// class Library{
//     constructor(){
//         this.books = [];
//     }
//     addBooks(books){ // this adds the books to the library
//         this.books.push(...this.books);
//     }
//     listAllBooks(){
//         this.books.forEach(function(book,index){
//             console.log(`${index + 1}> ${book.name} by ${book.author}`);
//         })
//     }
// }

// class Book{
//     constructor(name, isbn, price, author){
//         this.name = name;
//         this.isbn = isbn;
//         this.price = price;
//         this.author = author;
//         this.readStatus = false;
//     }
//     info(){
//         console.log(`${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it" : "not read this book"} and is avialable at amazone at a price${this.price}.`)
//     }
    
//     changeReadStatus(){
//         this.readStatus = !this.readStatus;
//     }
// }

// let jhansiLibrary = new Library();
// let book1 = new Book("wealth is life", "as0129fd", 120, "Harsh Sharma")

// let book2 = new Book("adventure", "jknfdi3;lda", 100, "Harsita Gupta")

// let book3 = new Book("69", "a;93n10dfjksa;dfj", 100000, "Cup Bete")


// jhansiLibrary.addBooks([book1, book2, book3])





























// mobiles
class MobileShop{
    constructor(){
        this.mobiles = [];
    }

    addNewMobile(mobile){
        this.mobiles.push(mobile);
    }

    listAllMobiles(){
        this.mobiles.forEach(function(mb, index){
            const sim1 = mb.sims[0]?.brand || "No Sim";
            const sim2 = mb.sims[1]?.brand || "";
            console.log(`${index + 1} - ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price} - Sims: ${sim1} ${sim2}`)
        })
    }

}

class Mobile{
    constructor(brand, model, price, color){
        this.id = Math.floor(Math.random() * 10000);
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.price = price;
        this.sims = []
    }


    getMobileInfo(id){
        console.log(`${this.brand} - ${this.model} = ${this.price} - ${this.color}`);
    }

    insertSim(sim){
        if(this.sims.length === 2){
            console.log(`you allready have 2 sims installed.`)
        }
        this.sims.push(sim);
    }
}

class Sim{
    constructor(brand, balance){
        this.brand = brand;
        this.balance = balance;
    }

    addBalance(balance){
        if(balance > 0){
            console.log(`balance shoudl be grater thatn 0`)
            return;
        }
        this.balance += balance;
    }

}


let myMoblieShop = new MobileShop();
let samsung = new Mobile("Samsung", "Galaxy s23", 120000, "black")
let tatadocmo = new Sim("tata docomo", 300);

samsung.insertSim(tatadocmo);
myMoblieShop.addNewMobile(samsung);