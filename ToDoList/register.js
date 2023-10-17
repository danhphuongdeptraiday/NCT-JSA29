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

button.addEventListener("click", function () {
  if (
    input_username.value == "" ||
    input_password.value == "" ||
    input_confirm.value == ""
  ) {
    if (input_password.value == "") {
      alert("Bạn thiếu user, bạn nhập lại vào ô user");
    } else if (input_username.value == "") {
      alert("Bạn thiếu password, bạn nhập lại vào ô password");
    } else if (input_confirm.value == "") {
      alert("Bạn thiếu confirm password, bạn nhập lại vào ô confirm");
    }
  } else if (
    input_username.value != "" ||
    input_password.value != "" ||
    input_confirm.value != ""
  ) {
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
