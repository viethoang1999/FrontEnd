// 1. tính tổng các số từ 1 > 10
// 2. tính giai thừa (cho dùng nhập vào số bắt đầu)
// 3. in ra các số 1 -> 20 mỗi số cách nhau 3 đơn vị

//1.
// for( let i=0;i<=10;i++){
//     alert(i)
// }
//2.
// let sum=1;
// for(let i=1;i<=10;i++){
// sum*=i
// alert(sum);
// }
//3.

// for(let i=1;i<=20;i+=3){
//     alert(i);  
// }
//bài 1: Write a program to print out
//a.7 numbers, starting from 0 (no user input)
// for(let i=0;i<7;i++){
//     console.log(i);
// }
//b.n numbers, starting from 0, n entered by user
// let n=Number(prompt("Nhập n: "));
// for(let i=0;i<n;i++){
//     console.log(i)
// }
//c.A sequence of numbers, starting from 3, ending before n, n entered by user
// let n=Number(prompt("Nhập n: "));
// for(let i=3;i<n;i++){
//     console.log(i)
// }
//d.A sequence of numbers, starting from c, ending before n, c and n entered by user
// let c = Number(prompt("Nhập c: "));
// let n = Number(prompt("Nhập n: "));
// for (let i = c; i < n; i++) {
//     alert(i);
// }
//e.A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
//  let c = Number(prompt("Nhập c: "));
//  let n = Number(prompt("Nhập n: "));
//  for(let i=c;i<n;i+=3){
//      alert(i);

//  }
//f.A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
// let c = Number(prompt("Nhập c: "));
// let n = Number(prompt("Nhập n: "));
// let s = Number(prompt("Nhập s: "));
// for(let i=c;i<n;i+=s){
//     console.log(i);
// }



//bài 2:Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt("Nhập n: "));
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//     sum *= i;
// }
// console.log(sum)
// //bài3: Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// let age = Number(prompt("How old are you?  "));
// if (age <= 14) {
//     alert("Bjan chưa đủ tuổi để truy cập")
// } else {
//     alert("Bạn đã đủ tuổi để truy cập");
// }

//bài 4:Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// let n = Number(prompt("Nhập 1 số bất kì:"));
// if (n >= 0 && n <= 9) {
//     alert(n + " nằm ở trong 0-9");
// } else if (n < 0) {
//     alert(n + " nằm ở dưới 0-9");

// } else {
//     alert(n + " nằm ở trên 0-9");
// }
//bài 5: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
// let x=Number(prompt("Nhập x: "));
// let n= Number(prompt("Nhập n: "));
// if(x>n){
//     alert(x+" nằm ở trên "+n);
// }else{
//     alert(x+" nằm ở dưới "+n);
// }
//6.Write a script to check if a number is even (divisible by 2) or odd number
// let number1=Number(prompt("Nhập number: "));
// if(number1%2==0){
//     alert(number1+ " là số chẵn");
// }else{
//     alert(number1+" là số lẻ");
// }
//7.
//a.6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// let n=6;
// for(let i=0;i<=n;i++){
// if(i%2==0){
//    console.log("H")  
// }else{
//     console.log("L");
// }
// }
//b.n L’s and H’s in total, n entered by user
// let n = Number(prompt("Nhập n:"));
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log("H")
//     } else {
//         console.log("L");
//     }
// }
//c.8 1’s and 0’s in total, consecutively
// let n = 8;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log("1")
//     } else {
//         console.log("0");
//     }
// }
//d.n 1’s and 0’s in total, consecutively, n entered by user
let n = Number(prompt("Nhập n:"));
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log("1")
    } else {
        console.log("0");
    }
}
//8.Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation

// And then based on the calculated BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30

// let height = Number(prompt("Nhập height: "));
// height *= 0.01;
// let mass = Number(prompt("Nhập mass"));
// let BMI = mass / (height * 2);
// if (BMI < 16) {
//     alert(BMI + " Thiếu cân nghiêm trọng")
// } else if (BMI >= 16 && BMI <= 18.5) {
//     alert(BMI + " thiếu cân");
// } else if (BMI > 18.5 && BMI <= 25) {
//     alert(BMI + " bình thường");
// } else if (BMI > 25 && BMI <= 30) {
//     alert(BMI + " thừa cân");
// } else {
//     alert(BMI + " béo phì");
// }


