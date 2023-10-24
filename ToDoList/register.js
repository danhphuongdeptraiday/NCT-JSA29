let input_username = document.querySelector("#input_username");
let input_password = document.querySelector("#input_password");
let input_confirm = document.querySelector("#confirm_password");
let button = document.querySelector("button");
// let todoList = [];

let data = JSON.parse(localStorage.getItem("User"));

if (data == null) {
  localStorage.setItem("User", JSON.stringify([]));
  location.reload();
}

// Check Available
function checkAvailableUser(input_username, arrayUserLocalStorage) {
  for (let i = 0; i < arrayUserLocalStorage.length; i++) {
    if (input_username == arrayUserLocalStorage[i].username) {
      alert("Tên người dùng đã tồn tại @@@");
      return false;
    }
  }

  return true;
}

// Tạo hàm để check empty
function checkInputIsEmpty(input_username, input_password, input_confirm) {
  if (input_username == "" || input_password == "" || input_confirm == "") {
    if (input_username == "") {
      alert("Bạn thiếu user, bạn nhập lại vào ô user");
      return false;
    } else if (input_password == "") {
      alert("Bạn thiếu password, bạn nhập lại vào ô password");
      return false;
    } else if (input_confirm == "") {
      alert("Bạn thiếu confirm password, bạn nhập lại vào ô confirm");
      return false;
    }
  }

  return true;
}

// Event button
button.addEventListener("click", function () {
  let checkEmpty = checkInputIsEmpty(
    input_username.value,
    input_password.value,
    input_confirm.value
  );

  let checkAvailable = checkAvailableUser(input_username.value, data);

  if (checkEmpty == true && checkAvailable == true) {
    if (input_password.value == input_confirm.value) {
      alert("Tạo tài khoản thành công");
      // Lưu đối tượng
      data.push({
        username: input_username.value,
        password: input_password.value,
      });
      //
      localStorage.setItem("User", JSON.stringify(data));

      input_password.value = "";
      input_username.value = "";
      input_confirm.value = "";
      document.body.appendChild(newDiv);
    } else {
      alert("Mật khẩu và mật khẩu xác nhận không giống nhau");
    }
  }
});

console.log(data);
