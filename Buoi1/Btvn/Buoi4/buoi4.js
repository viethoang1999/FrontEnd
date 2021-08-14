// let Product = [
//     {
//         Name: "Xiaomi portable charger 20000mah",
//         Brand: "Xiaomi",
//         Price: 428,
//         Color: "White",
//         Category: "Charger"
//     },

//     {
//         Name: "VSmart Active 1",
//         Brand: "VSmart",
//         Price: 5487,
//         Color: "Black",
//         Category: "Phone"
//     },

//     {
//         Name: "IPhone X",
//         Brand: "Apple",
//         Price: 21490,
//         Color: "Gray",
//         Category: "Phone"
//     },

//     {
//         Name: "Samsung Galaxy A9",
//         Brand: "Samsung",
//         Price: 8490,
//         Color: "Blue",
//         Category: "Phone"
//     }
// ];

//Print/log name and price of all the products out 
// for(let i=0;i<Product.length;i++){
//     console.table(Product[i].Name);
//     console.table(Product[i].Brand);
//     console.table("-----------------------------")
// }

//Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users

// for (let i = 0; i < Product.length; i++) {
//     console.table(Product[i].Name);
//     console.table(Product[i].Price);
//     console.table("-----------------------------")


// }

// for (let i = 0; i < Product.length; i++) {
//     let String = Number(prompt("Nhap vi tri san pham muon xem: "))
//     if (String >= 0 && String < 5) {
//         console.table(Product[i].Name);
//         console.table(Product[i].Brand);
//         console.table(Product[i].Price);
//         console.table(Product[i].Color);
//         console.table(Product[i].Category);
//         console.table("------------------------------------")
//     } else {
//         alert("Khong tim thay")
//     }
// }



//Write a script printing/logging out the products based on category input by users
// let String=(prompt("Nhap ten danh muc: "));
// for(let i=0;i<Product.length;i++){
//     if(String==Product[i].Category){
//         console.table(Product[i].Name);
//         console.table(Product[i].Price);

//     }
// }

//Add providers to each product
// let providers=prompt("Nhap nha cung cap").split(",");
// let index=0;
// for(let i=0;i<Product.length;i++){
// Product[i].provider=providers[index];
// index++;
// }
// for(let i=0;i<Product.length;i++){
//             console.table(Product[i].Name);
//             console.table(Product[i].Brand);
//             console.table(Product[i].Price);
//             console.table(Product[i].Color);
//             console.table(Product[i].Category);
//             console.table(Product[i].provider);
//             console.table("------------------------------------")
// }
// //(Optional) Search the products based on the wanted provider entered by users
// let provideres=prompt("Nhap nha cung cap");
// for(let i=0;i<Product.length;i++){
//     if(Product[i].provider==provideres){
//         console.table(Product[i].Name);
//             console.table(Product[i].Brand);
//             console.table(Product[i].Price);
//             console.table(Product[i].Color);
//             console.table(Product[i].Category);
//             console.table(Product[i].provider);
//             console.table("------------------------------------")
//     }
// }

//Write a script to store and process the learning tasks to become a front-end developer

let Store = [
    {
        index: 1,
        Learn: "HTML",
        Complete: false
    },
    {
        index: 2,
        Learn: "CSS",
        Complete: false
    },
    {
        index: 3,
        Learn: "Js",
        Complete: false
    },
    {
        index: 4,
        Learn: "Node Package Manager",
        Complete: false
    },
    {
        index: 5,
        Learn: "Git",
        Complete: false
    }

]

//Print it out
for (let i = 0; i < Store.length; i++) {
    console.table(Store[i]);
}

//Let users add new task
let tasks = prompt("New/Delete/Update/Complete/ComeBack")
while (true) {
    if (tasks === "New") {
        let nameLearn = prompt("Thêm môn học ms: ");
        let newLearn = {
            index:Store.length+1,
            Learn: nameLearn,
            Complete: false
        };
        Store.push(newLearn);
        for (let i = 0; i < Store.length; i++) {
            console.table(Store[i]);
        }
        break;
    } else if (tasks === "Delete") {
        let indexDelete = Number(prompt("Vị trí bạn muốn xóa: "));
        for (let i = 0; i < Store.length; i++) {
            if (Store[i].index === indexDelete) {
                Store.splice(i, 1);
            }
        }

        for (let i = 0; i < Store.length; i++) {
            console.table(Store[i]);
        }
        break;
    } else if (tasks === "Update") {
        let edit = Number(prompt("Nhập vị trí cần sửa: "));
        let newName = prompt("Tên sửa: ");
        for (let i = 0; i < Store.length; i++) {
            if (Store[i].index === edit) {
                Store[i].Learn = newName;
            }
        }
        for (let i = 0; i < Store.length; i++) {
            console.table(Store[i]);
        }
        break;
    } else if (tasks === "Complete") {
        let completes = Number(prompt("Nhập vị trí cần hoàn hòan thiện: "));
        for (let i = 0; i < Store.length; i++) {
            if (Store[i].index === completes) {
                Store[i].Complete = true;
            }
        }
        for (let i = 0; i < Store.length; i++) {
            console.table(Store[i]);
        }
        break;
    } else if (tasks === "ComeBack") {
        alert(tasks);
    } else if (input === "0") {
        false;
    } else {
        alert("Sai r");
    }
}
