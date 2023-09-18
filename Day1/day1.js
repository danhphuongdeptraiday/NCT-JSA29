const a = 10; // number
let s = "Tú hâm"; // string
// console.log("Tên tôi là " + s);
// let check = true; // boolean

// Hàm prompt("Lời dẫn của ô đấy");

// Các phép so sánh trong JS:

// let check1 = 10 == "10";
// let check2 = 5 > 6;
// let check = check1 && check2;
// console.log("Check = " + check);

// If, else: Nếu thì
// if(điều kiện) {
//    Nếu thỏa mãn điều kiện trong if thì đoạn code ở trong ngoặc nhọn sẽ hoạt động
//} else if(điều kiện ở đây phải khác điều kiện ở if bên trên) {
//     ...
//} else { Trường hợp đối nghịch của tất cả các if bên trên
//
//}

// let input = prompt("Enter something in side ?");

// alert("Giá trị vừa nhập vào prompt là: " + input);s

// console.log("Giá trị vừa nhập vào prompt là: " + input);

// let t1 = Number(prompt("Enter t1 ?"));
// let t2 = Number(prompt("Enter t2 ?")x);

// if (t1 > t2) {
//   console.log(t1 + " lớn hơn " + t2);
// } else if (t1 < t2) {
//     console.log(t1 + " nhỏ hơn " + t2);
// } else {
//     console.log(t1 + " bằng " + t2);
// }

// Bài check điểm
// let point = Number(prompt("Enter point ?"));

// if (point >= 0 && point < 5) {
//   alert("Với số điểm " + point + " thì ở hạng điểm F");
// } else if (point >= 5 && point < 6) {
//   alert("Với số điểm " + point + " thì ở hạng điểm D");
// } else if (point >= 6 && point < 7) {
//   alert("Với số điểm " + point + " thì ở hạng điểm C");
// } else if (point >= 7 && point < 8) {
//   alert("Với số điểm " + point + " thì ở hạng điểm B");
// } else if (point >= 8 && point < 9) {
//   alert("Với số điểm " + point + " thì ở hạng điểm A");
// } else if (point >= 9 && point < 10) {
//   alert("Với số điểm " + point + " thì ở hạng điểm A++");
// } else if (point < 0 || point > 10) {
//   alert("Bạn đang nhập sai khoảng điểm");
// } else {
//   alert("Đầu của bạn đang không phải ở dạng số");
// }

//                                     Array: Mảng là chứa tập hợp của nhiều giá trị trong 1 vùng

// let food1 = "Bánh đa";
// let food2 = "Mỳ tôm";
// let food3 = "Cơm chiên";

// let food = ["Bánh Đa", "Mỳ tôm", "Cơm chiên"];

// Để truy cập vào các phần tử trong mảng ta dùng: tên mảng[vị trí tương ứng trong mảng]
// Trả về số lượng phần tử trong mảng: food.length
// Tips lấy ra phần tử cuối cùng của mảng: food[food.length - 1]
// console.log(food[food.length - 1]);

// console.log(food);
// // push(): thêm phần tử mới vảo mảng
// food.push("sting đỏ");
// food.push("sting đỏ");
// food.push("sting đỏ");
// console.log(food);

// // Xóa phần tử ở cuối mảng
// let giaTriVuaLay = food.pop();
// console.log(giaTriVuaLay);
// console.log(food);

// let n = prompt("Enter something ?");
// console.log(n);

//                              Object: Đối tượng (Con người)
// Thuộc tính: tên, tuổi, ngày tháng năm sinh, chiều (attribute)
// Chức năng: Ăn, uống, đi bộ, quên bài tập
// Khái báo thuộc tính: let biến = {}

// let person = {
//   name: "Phương",
//   age: 22,
//   ex_girlfriends: ["Chi", "Mai", "Minh Anh"],
// };

// // Để truy cập vào thuộc tính của 1 đối tượng và lấy ra value của thuộc tính đấy, ta làm như sau:
// // tênbiến.thuộc tính

// console.log(person.ex_girlfriends);

//                                              Function: Chức năng(hàm)
// Để function chạy được thì mình phại gọi tên nó
// Kiểu 1: Function không có đầu vào (ko có tham số)

// function sayHello() {
//   console.log("Hello Bảo");
// }
// sayHello();

// Kiểu 2: Function có đầu vào (có tham số: prameter)

// function coutPlus(x, y) {
//   let t = x + y;
//   console.log(`${x} + ${y} = ${t}`);
//   console.log(x + " + " + y + " = " + t);
// }

// coutPlus(10, 20);

// Kiểu 3: Function có return
// function myFullName(name) {
//   return name + 123;
// }

// console.log("Tên tôi là: " + myFullName("Nguyễn Danh Phương"));
// myFullName();

//                            For loop: vòng lặp
// for(vị trí bắt đầu; điều kiện để vòng lặp chạy, bước nhảy sau 1 mỗi lần lặp);
// let t = 1;
// t -= 2; // t = t + 2
// console.log(t);
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && (i - 2) % 10 == 0 && i % 12 == 0) {
    console.log(i);
  }
}

// let check = 3 % 3 == 0;
// console.log(check);
