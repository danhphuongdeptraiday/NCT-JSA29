function saySomething() {
  console.log("Hello Khôi");
}
// saySomething();

let btn = document.getElementById("btn");
// Cách 2:
// btn.addEventListener("click", saySomething);
// Chú thích: Hàm addEventLister(a, b): Có 1 đầu vào
// a: Kiểu sự kiện mà ta muốn gán cho thẻ đó
// b: Chức năng mà khi ta tác động lên kiểu sự kiện thẻ được gán thì nó sẽ chạy
let box = document.createElement("div");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "blue";
document.body.appendChild(box);

btn.addEventListener("click", function () {});
