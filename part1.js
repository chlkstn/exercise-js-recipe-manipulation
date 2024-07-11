/*Övning 1*/

let q1 = document.getElementById("recipe-name");

console.log(q1.textContent);

/*Övning 2*/
console.log(q1.tagName);

/*Övning 3*/

let q3 = document.querySelector(".description");

let q3Computed = window.getComputedStyle(q3);

console.log(q3Computed.fontSize);

/*Övning 4*/

const q4 = document.querySelector(".image-container > img");

console.log(q4.alt);

/*Övning 5*/

const q5 = {
  url: q4.src,
  height: q4.height,
  width: q4.width,
};

console.log(q5);

/*Övning 6*/

const q6 = document.querySelector(".ingredients-list-paste").children;

console.log(q6.length);

/*Övning 7*/

const q7 = document.querySelector(
  ".ingredients-list-paste > :nth-child(4)"
).textContent;

console.log(q7);

/*Övning 8*/

const q8collection = document.querySelector(".instructions-list").children;

let q8Array = [];

for (let i = 0; i < q8collection.length; i++) {
  let inst = {};
  inst.order = i;
  inst.text = q8collection[i].textContent;

  /* console.log(inst); */
  q8Array.push(inst);
}

console.log(q8Array);
