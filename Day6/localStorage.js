// Lưu dữ liệu vào trong localStorage ta dùng hàm setItem("key", "value")
localStorage.setItem("name", "Phương");

// Lấy dữ liệu từ localStorage ta dùng hàm getItem("key")
let dataFromLocalStorage = localStorage.getItem("name");
console.log(
  "Giá trị vừa lấy trong localStorage có key = name là: " + dataFromLocalStorage
);

// Xóa dữ liệu từ trong localStorage: removeItem("key")
// localStorage.removeItem("name");

// Xóa tất cả dữ liệu trong localStorage

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  localStorage.clear();
});
