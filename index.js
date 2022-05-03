let AC = document.querySelector(".ac");
let MR = document.querySelector(".mr");
let per = document.querySelector(".per");
let div = document.querySelector(".div");
let sev = document.querySelector(".sev");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let multi = document.querySelector(".multi");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let sub = document.querySelector(".sub");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let add = document.querySelector(".add");
let zero = document.querySelector(".zero");
let deci = document.querySelector(".deci");
let backsp = document.querySelector(".backsp");
let equal = document.querySelector(".equal");
let addition = false;
let subt = false;
let divi = false;
let multip = false;
zero.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 0;
});
one.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 1;
});
two.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 2;
});
three.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 3;
});
four.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 4;
});
five.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 5;
});
six.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 6;
});
sev.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 7;
});
eight.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 8;
});
nine.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += 9;
});
deci.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += ".";
});
backsp.addEventListener("click", function () {
  document.querySelector(".numdisplay").value = document
    .querySelector(".numdisplay")
    .value.slice(0, -1);
});
AC.addEventListener("click", function () {
  document.querySelector(".numdisplay").value = "";
});
MR.addEventListener("click", function () {
  document.querySelector(".numdisplay").value = "";
});
add.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += "+";
  addition = true;
});
sub.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += "-";
  subt = true;
});
multi.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += "*";
  multip = true;
});
div.addEventListener("click", function () {
  document.querySelector(".numdisplay").value += "/";
  divi = true;
});
equal.addEventListener("click", function () {
  if (addition) {
    let sum = document.querySelector(".numdisplay").value;
    let result = eval(sum);
    document.querySelector(".numdisplay").value = result;
    addition = false;
  } else if (subt) {
    let sub = document.querySelector(".numdisplay").value;
    let result = eval(sub);
    document.querySelector(".numdisplay").value = result;
    subt = false;
  } else if (multip) {
    let mutli = document.querySelector(".numdisplay").value;
    let result = eval(mutli);
    document.querySelector(".numdisplay").value = result;
    multip = false;
  } else if (divi) {
    let div = document.querySelector(".numdisplay").value;
    let result = eval(div);
    document.querySelector(".numdisplay").value = result;
    divi = false;
  }
});
