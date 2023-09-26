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

let container = document.getElementsByClassName("container");
// container[0].className = "newDiv";

let p = document.createElement("p");
p.innerText = "Bách Ngáo";
p.style.color = "red";
p.style.fontWeight = "bold";

container[0].appendChild(p);

// Thêm ảnh
let img = document.createElement("img");
img.src = "./brighton_in_my_heart.png";
document.body.appendChild(img);

// Thêm thẻ a
let a = document.createElement("a");
a.innerText = "brighton vô địch";
a.target = "_blank";
a.href =
  "https://www.google.com/search?q=brighton&sca_esv=566592553&sxsrf=AM9HkKmvLJl-N1kefaM8AnOu6kKAg05RIQ%3A1695127394996&ei=YpcJZfKnPN_i2roPn72M8A4&gs_ssp=eJzj4tDP1TfIMipIN2D04kgqykzPKMnPAwA9KgZh&oq=bright&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmJyaWdodCoCCAAyBxAuGIoFGCcyDRAAGIoFGLEDGIMBGEMyBxAAGIoFGEMyDRAAGIoFGLEDGIMBGEMyBxAAGIoFGEMyCxAAGIoFGLEDGIMBMgkQABiKBRgKGEMyCBAAGIAEGLEDMgcQABiKBRhDMggQLhixAxiABDIUEC4YigUYlwUY3AQY3gQY4ATYAQFI9RFQyANY9wlwAHgFkAEAmAF0oAHfBKoBAzMuM7gBA8gBAPgBAcICBBAAGEfCAgcQIxiKBRgnwgIHEC4YigUYQ8ICChAuGLEDGIoFGEPiAwQYACBBiAYBkAYIugYGCAEQARgU&sclient=gws-wiz-serp";
document.body.appendChild(a);
