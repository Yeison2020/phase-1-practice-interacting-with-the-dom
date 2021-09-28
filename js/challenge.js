let countTime = setInterval(myTimer, 1000);
function myTimer() {
  let data = 0;
  let dataString = `${data++}`;
  document.getElementById("counter").innerHTML = dataString;
}

//----Event Listeners Buttons

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementById("likes");

//=-----------Events Listener
minus.addEventListener("click", () => decrease);
const decrease = function () {
  console.log("hello");
};

//----------------------------------

function increase(counter) {}
