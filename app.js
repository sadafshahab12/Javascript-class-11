let changeClr = document.querySelector(".changeColor"); // NodeList
let clrBtn = document.querySelector(".clickBtn");
let image = document.querySelector(".image");
clrBtn.addEventListener("click", () => {
  changeClr.style.backgroundColor = "pink";
  changeClr.textContent = "button is clicked";
});

changeClr.addEventListener("mouseover", () => {
  changeClr.style.fontSize = "50px";
  changeClr.style.border = "2px solid yellow";
  changeClr.style.padding = "10px";
  console.log("fontsize increased on mouseover");
});
changeClr.addEventListener("mouseout", () => {
  changeClr.style.fontSize = "10px";
  changeClr.style.border = "0";
  changeClr.style.padding = "0";
  console.log("fontsize decreased on mouseout");
});

image.addEventListener("mouseover", () => {
  image.src =
    "https://i.pinimg.com/736x/61/a6/e4/61a6e42b4735ec48ae2a80755a27cb93.jpg";
});
image.addEventListener("mouseout", () => {
  image.src =
    "https://i.pinimg.com/1200x/a7/92/bd/a792bd896abd046b4db2ea9bb7cde532.jpg";
});

clrBtn.addEventListener("mousedown", () => {
  // button pressed for long time
  clrBtn.textContent = "mouse button press";
  console.log("button is pressed");
});
clrBtn.addEventListener("mouseup", () => {
  // button leave /chor dena
  clrBtn.textContent = "button leave";
  console.log("button is leaved");
});
// let changeClr = document.getElementsByClassName("changeColor");
// console.log(changeClr);

// changeClr.forEach((item) => {
//   console.log(item.innerHTML * 3);
// });
// let array = [1, 2, 3, 4, 5];
// let newArrayy = array.map((num) => {
//   console.log("map", num / 2);
// });

// console.log(array)
// console.log(newArrayy);
// array.forEach((num) => {
//   console.log("for each",num * 6);
// });
// let newArr = Array.from(changeClr);
// console.log(newArr);

let keyBoardEvent = document.querySelector(".keyevents");
let inputText = document.querySelector(".inputtext");

keyBoardEvent.addEventListener("keydown", () => {
  console.log("key pressed");
  inputText.textContent = keyBoardEvent.value;
});
