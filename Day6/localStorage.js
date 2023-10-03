let t = Object.keys(localStorage);
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
let Available_key_input = document.getElementById("Available_Key");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  //   localStorage.clear();

  localStorage.removeItem(Available_key_input.value);
});

// Add data
let add_btn = document.getElementById("add_data");
let input_key = document.getElementById("inputKey");
let input_value = document.getElementById("inputValue");

add_btn.addEventListener("click", function () {
  localStorage.setItem(input_key.value, input_value.value);
});

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

let temp_key = "name";
let check_find_key = false;
for (let i = 0; i < t.length; i++) {
  if (temp_key == t[i]) {
    check_find_key = true;
  }
}

if (check_find_key == false) {
  alert("Không thấy key");
}
