console.group("Tính tổng 2 ký số");
var numb = 26; //Người dùng nhập
var numb1 = Math.floor(numb / 10);
var numb2 = numb - numb1 * 10;
var sum = numb1 + numb2;
console.log("Nhập vào số có 2 chữ số:", numb);
console.log("Tổng 2 ký số của số vừa nhập:", sum);
console.groupEnd();
