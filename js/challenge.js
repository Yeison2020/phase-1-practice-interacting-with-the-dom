let countTime = setInterval(myTimer, 1000);
function myTimer() {
  let d = 0++
  let t = ++d.toString()
  document.getElementById("counter").innerHTML = t;
}
document.addEventListener('DOMcontentLoad', countTime);

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
