// How is this working ?
let countTime = setInterval(myTimer, 1000);
let data = 0;
function myTimer() {
  data += 1;
  let dataString = `${data}`;
  document.getElementById("counter").innerHTML = dataString;
}

//----Event Listeners Buttons

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementById("likes");

// //=-----------Events  Minus

minus.addEventListener("click", function () {
  let data = document.getElementById("counter");
  string = parseInt(data.innerText);
  data.innerText = string - 1;
});

// }
//-------------Events Plus

// console.log(document.getElementById("counter").value);
//-----------------------------------------------------
plus.addEventListener("click", function () {
  let data = document.getElementById("counter"),
    string = parseInt(a.innerText);
  data.innerText = string + 1;
});
