/* 1 */
document.querySelector(".logo-text").style.color = "black";

/* 2 */

document.querySelector("header").style.justifyContent = "flex-start";

/* 3 */

document.querySelector("header").style.borderColor = "black";

/*4 */

document.getElementById("recipe-name").textContent = "Frozen Cheesecake";

/*5 */

let newTime = document.querySelector(".time-container > span");

newTime.classList.add("material-icons");

/*6 */

document.querySelector(".time").textContent = "60+  min";

/*7 */

document.querySelector(".image-container > img").src =
  "/assets/frozen-cheesecake-slice.jpg";

/*8 */

document.querySelector(".ingredients-container").style.backgroundColor =
  "#f9f9f9";

/*9 10 11*/

/* Övre*/

let newl2 = document.createElement("li");

let newl1 = document.createElement("li");

newl1.textContent = "15st digestivekex";

newl2.textContent = "lite smör";

document.querySelector(".ingredients-list-bottom").appendChild(newl1);
document.querySelector(".ingredients-list-bottom").appendChild(newl2);
document.querySelector(".ingredients-list-bottom > p").remove("p");

/* Undre */

let newl3 = document.createElement("li");

newl3.textContent = "400g naturell philadelphiaost";

document.querySelector(".ingredients-list-paste>:nth-child(3)").textContent =
  "3tsk vaniljsocker";

document.querySelector(".ingredients-list-paste").appendChild(newl3);

/*12 */

document.querySelector(".shadow").style.boxShadow = "0px 0px 0px ";

/*13 */

document.querySelector(".instructions-list>:nth-child(2)").textContent =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

document.querySelector(".instruction-list>:nth-child(9)").textContent =
  "Ställ in i frysen över natten.";
