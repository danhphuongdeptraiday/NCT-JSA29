let input_username = document.querySelector("#input_username");
let input_password = document.querySelector("#input_password");
let button = document.querySelector("button");
// let todoList = [];

let data = JSON.parse(localStorage.getItem("User"));

if (data == null) {
  localStorage.setItem("User", JSON.stringify([]));
  location.reload();
}

button.addEventListener("click", function () {
  // let newDiv = document.createElement("div");

  // // Tạo thẻ b
  // let b = document.createElement("b");
  // b.innerText = input_username.value + ": ";
  // newDiv.appendChild(b);

  // // Tạo thẻ span
  // let span = document.createElement("span");
  // span.innerText = input_password.value;
  // newDiv.appendChild(span);

  // newDiv.innerText = input.value;
  // input.value = "";

  if (input_username.value == "" || input_password.value == "") {
    if (input_password.value == "") {
      alert("Bạn thiếu value, bạn nhập lại vào ô value");
    } else if (input_username.value == "") {
      alert("Bạn thiếu key, bạn nhập lại vào ô key");
    }
  } else if (input_username.value != "" || input_password.value != "") {
    // Lưu đối tượng
    data.push({
      username: input_username.value,
      password: input_password.value,
    });
    //
    localStorage.setItem("User", JSON.stringify(data));
    // localStorage.setItem(input_username.value, input_password.value);

    input_password.value = "";
    input_username.value = "";
    document.body.appendChild(newDiv);
  }
});

// let list1 = {
//   key: "Number",
//   value: "123",
// };

// let list2 = {
//   key: "Letter",
//   value: "abc",
// };

// todoList.push(list1);
// todoList.push(list2);

// localStorage.setItem("todoList", JSON.stringify(todoList));
// let data = JSON.parse(localStorage.getItem("todoList"));
// console.log(data[0]);

// console.log("Phuong"[0]);
// console.log(todoList);

console.log(data);
