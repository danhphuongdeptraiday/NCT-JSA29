let name = document.getElementById("demo");
// Thay đổi CSS:
name.innerText = "Hello Khôi Khỉ";
name.style.color = "red";
name.style.backgroundColor = "yellow";
console.log(name.innerText);

let line1 = document.getElementsByClassName("line1");
// Thay đổi thuộc tính của 1 thẻ
line1[0].className = "line2";

console.log(line1[0].innerText);
console.log(line1[0].innerText);

// Tạo 1 thẻ mới trong HTML thông qua DOM
let h2 = document.createElement("h2");

h2.innerText = "Tập trung đi Bảo !!";
document.body.appendChild(h2);
