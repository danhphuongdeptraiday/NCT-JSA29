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
  //   localStorage.clear();
});

// Add data
let add_btn = document.getElementById("add_data");
let input_key = document.getElementById("inputKey");
let input_value = document.getElementById("inputValue");

add_btn.addEventListener("click", function () {
  localStorage.setItem(input_key.value, input_value.value);
});

let t = Object.keys(localStorage);
console.log(t);
console.log(t[0]);
console.log(t[1]);
console.log(t[2]);

console.log("Tổng số lượng các phần tử trong mảng t là: " + t.length);

let container_key = document.querySelector(".container_key");
for (let i = 0; i < t.length; i++) {
  // console.log(i);
  let li = document.createElement("li");
  li.innerText = t[i];
  container_key.appendChild(li);
  //   console.log(t[i]);
}
