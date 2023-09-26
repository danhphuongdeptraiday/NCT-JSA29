let body = document.getElementsByTagName("body");

body[0].style.boxSizing = "border-box";

let container = document.createElement("div");
container.style.width = "700px";
container.style.height = "500px";
container.style.border = "2px solid black";
container.style.padding = "10px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "space-around";

document.body.appendChild(container);

let top_container = document.createElement("div");
top_container.style.width = "100%";
top_container.style.height = "45%";
// top_container.style.border = "2px solid red";
top_container.style.display = "flex";
top_container.style.justifyContent = "space-around";
top_container.style.alignItems = "center";
container.appendChild(top_container);

for (let i = 0; i < 3; i++) {
  let child_div = document.createElement("div");
  child_div.style.width = "200px";
  child_div.style.height = "200px";
  child_div.style.border = "2px blue solid";
  child_div.style.display = "flex";
  child_div.style.flexDirection = "column";
  child_div.style.alignItems = "center";
  child_div.style.justifyContent = "center";

  let img = document.createElement("img");
  img.src = "./brighton_in_my_heart.png";
  img.style.width = "50px";
  img.style.height = "50px";

  let h2 = document.createElement("h2");
  h2.innerText = "Principle of Operation System CLC (62FIT2POP)";
  h2.style.fontSize = "16px";
  h2.style.textAlign = "center";

  child_div.appendChild(img);
  child_div.appendChild(h2);

  top_container.appendChild(child_div);
}

let bottom_container = document.createElement("div");
bottom_container.style.width = "100%";
bottom_container.style.height = "45%";
// bottom_container.style.border = "2px solid red";
bottom_container.style.display = "flex";
bottom_container.style.justifyContent = "space-around";
bottom_container.style.alignItems = "center";
container.appendChild(bottom_container);

for (let i = 0; i < 3; i++) {
  let child_div = document.createElement("div");
  child_div.style.width = "200px";
  child_div.style.height = "200px";
  child_div.style.border = "2px blue solid";

  bottom_container.appendChild(child_div);
}
