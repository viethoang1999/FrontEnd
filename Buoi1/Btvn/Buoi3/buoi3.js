/**Viết kịch bản yêu cầu người dùng nhập một dãy số, Các số được phân tách bằng dấu phẩy, tính tổng các số và hiển thị cho người dùng
 */
// let n, sum;
// n = Number(prompt("Nhập số lượng phaàn tử bạn muốn nhập: "));
// let dayso = [];
// for (let i = 0; i < n; i++) {

//    sum +=  dayso.push(n[i]);
// }
// alert(sum);

// let num=prompt("Nhap vao day so: ").split(",");
// let sum=0;
// let arr=[];
// for(let i in num){
//    sum+=arr.push(num[i]);
// }
// alert(sum);

//Viết script yêu cầu người dùng nhập một dãy số, các số được phân tách bằng dấu phẩy, tìm số nhỏ nhất và đăng xuất cho người dùng

// let n, sum,min;
// n = Number(prompt("Nhập số lượng phaàn tử bạn muốn nhập: "));
// let dayso = new Array(n);
// for (let i = 0; i < n; i++) {
//     dayso[i] = Number(prompt("Nhập sô: " + (i + 1)));
//      min = dayso[0];
//     if (dayso[i] < min) {
//         min = dayso[i];
//     }
// }
// alert(min);


//Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
// const arr = [1, 2, 3, 4, 5, 6];
// let n = Number(prompt("Moi ban nhap so can tim"));
// let check = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (n == arr[i]) {
//       alert(arr[i] + " la So ban muon tim o vi tri " + i);
//       check = 1;
//       break;
//    } else {
//       !check;
//       alert('Không tìm thấy');
//       break;
//    }
// }


//You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes:
// 4.1: Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
// let arr = [5, 7, 300, 90, 24, 50, 75];
// alert("Hello, my name is Phuong and here is my sheep sizes: " + arr);

// //4.2: At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (max < arr[i]) {
//       max = arr[i];
//    }
// }
// alert("Now my biggesst sheep has size : " + max);
// //4.3: When your biggest sheer, its size will return to the default size, which is 8.
// arr[arr.indexOf(max)] = 8;
// alert("Mang sau khi thay doi max: " + arr);

// //In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;
// }
// alert("Kich thuoc sau 1 thang " + arr)
// //Let’s do this for 4 months (or as long as you want)
// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;

// }
// alert("Kich thuoc sau 2 thang " + arr)

// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;

// }
// alert("Kich thuoc sau 3 thang " + arr)

// for (let i = 0; i < arr.length; i++) {
//    arr[i] += 50;

// }
// alert("Kich thuoc sau 4 thang " + arr)

// //Write a program to calculate the total size of your sheep as well as the money you would have. 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    sum += arr[i];
// }
// alert("Can nag cua bay cuu: " + sum)
// alert(sum * 2 + " la so tien sau khi ban ");

//(Optional) Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework
// let arr = prompt("Nhap vao choi cac ten").split(",");
// let newArr = [];
// //arr=newArr;
// for (let i = 0; i < arr.length; i++) {
//    alert("<" + arr[i] + ">");
// }

//(Optional) Write a script asking users to enter a sequence of Numbers, separated by commas (,). Create a new array containing only the odd Numbers of the entered sequence.
// let arr = prompt("Nhap day so: ").split(",");
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//    if (Number(i % 2 == 0)) {
//       newArr.push(Number(arr[i]));
//    }
// }
// alert(newArr);





















