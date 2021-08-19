//bài 1.Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả.
// let str_input=prompt("Nhập chuỗi: ");
// function reverseString(string){
// for(i=string.length-1;i>=0;i--){
//     str_input+=string[i];

// }
// return str_input;
// }

// console.log(reverseString(str_input));

//bài 2.


// let strArr=prompt("Nhập chuỗi ")
// function capitalize(str) {
//     strArr=str.split(" ");
// 	for(var i=0;i<strArr.length;i++){
//       var charArr=strArr[i].split("");
// 	    charArr[0]=charArr[0].toUpperCase();
//       strArr[i]=charArr.join("");

// 	}
// 	return strArr.join(" ");
// }
// console.log(capitalize(strArr));

//bài 3.

// function unique(arr) {

//     return Array.from(new Set(arr)) 
//   }
//   console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))


//bài 4.

let FutureAcademy = [
    {
        id: "1",
        name1: "Phu",
        salary: "9000",
        position: "Giảng viên",
    },
];
let input = prompt("C/R/U/D");
if (input === "C") {
    let newName = prompt("Enter your name: ");
    let newSalary = prompt("Mời nhập lương: ");
    let newPosition = prompt("Mời bạn nhập chức vụ: ");
    let newid = FutureAcademy.length + 1;

    let newObj = {
        id: newid,
        name: newName,
        salary: newSalary,
        position: newPosition,
    };
    FutureAcademy.push(newObj);
    console.log(FutureAcademy);

}
else if (input === "R") {
    // let searchPeson = Number(prompt("Mời nhập chỉ số index cần xem: "));
    for (let FutureAcademys of FutureAcademy) {
        console.table(FutureAcademys);
    }
} else if (input === "U") {
    let idInput = Number(prompt("Enter your ID"));
    for (let i = 0; i < FutureAcademy.length; i++) {
        if (idInput === FutureAcademy[i].id) {
            let newName = prompt(" Nhập tên");
            let newSalary = prompt("Mời nhập lương: ");
            let newPosition = prompt("Mời bạn nhập chức vụ: ");
            FutureAcademy[i].name = newName;
            FutureAcademy[i].salary = newSalary;
            FutureAcademy[i].position = newPosition;
            console.log(FutureAcademy);
        } else {
            console.log("ID not found");
        }
    }
} else if (input == "D") {
    // let searchId = Number(prompt("Nhập id cần xem: "));
    // FutureAcademy.splice(searchId, 1);
    // console.table(FutureAcademy);

} else {
    alert("Sai rồi");
}


//bài 5.

//bài 6.
// let day = Number(prompt("Nhập ngày: "));
// let month = Number(prompt("Nhập tháng: "));
// let year = Number(prompt("Nhập năm: "))

// if (day < 0 || month < 0 || year < 0) {
//     console.log("nhập sai r")

// }
// else {
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("Ngày" + day + "Tháng " + month + "Năm " + year + " có 31 ngày.");
//             break;

//         // các tháng 4, 6, 9 và 11 có 30 ngày
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("Ngày" + day + "Tháng " + month + "Năm " + year + " có 30 ngày.");
//             break;
//         case 2:
//             if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//                 console.log("Ngày" + day + "Tháng " + month + "Năm " + year + " có 29 ngày.");
//             } else {
//                 console.log("Ngày" + day + "Tháng " + month + "Năm " + year + " có 28 ngày.");
//             }
//             break;
//         default:
//             console.log("Nhập ngày tháng năm không hợp lệ.");
//     }

// }

