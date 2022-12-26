let text = document.querySelector(".text");
let submitBtn = document.querySelector(".submit");
let list = document.getElementById("list");

const clickFun = function () {
  if (text.value.trim() === "") {
    return false;
  } else {
    let arr = [];
    arr.push(text.value);
    arr.map((e) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      document.body.append(div);
      div.append(p);
      p.append(e, "-", e.split("").reverse().join());
    });
    text.value = "";
  }
};

submitBtn.onclick = () => {
  clickFun();
};

text.onkeydown = (e) => {
  if (e.keyCode === 13) clickFun();
};
