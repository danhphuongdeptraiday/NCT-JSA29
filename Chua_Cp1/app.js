let inputTop = document.getElementById("top");
let inputLeft = document.getElementById("left");
let button = document.querySelector("button"); // sẽ trả về thẻ đầu tiên nó đọc được dựa vào giá trị trang hàm query
let box = document.querySelector(".box");

button.addEventListener("click", function () {
  console.log("Hello Bách, chào mừng trở lại");

  console.log("Input Top: " + inputTop.value);
  console.log("Input Left: " + inputLeft.value);

  box.style.marginTop = inputTop.value + "px"; // => "100" + "px" => "100px"
  box.style.marginLeft = inputLeft.value + "px"; // => "100" + "px" => "100px"
});
