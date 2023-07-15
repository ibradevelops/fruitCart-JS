"use strict";
//main
const clearAllBtn = document.querySelector(".clear-shopping-board-btn");
const shoppingBoard = document.querySelector(
  ".place-for-shopping-board-answers"
);
const mainCart = document.querySelector(".main-cart");
// Banana
const bananaPrice = document.querySelector("#banana--price");
const bananaInput = document.querySelector("#banana--input");
const bananaAdd = document.querySelector("#banana--add");
const bananaDel = document.querySelector("#banana--del");
const bananaToCart = document.querySelector("#add--banana--cart");

// Apple
const applePrice = document.querySelector("#apple--price");
const appleInput = document.querySelector("#apple--input");
const appleAdd = document.querySelector("#apple--add");
const appleDel = document.querySelector("#apple--del");
const appleToCart = document.querySelector("#add--apple--cart");

// Strawberry
const strawberryPrice = document.querySelector("#strawberry--price");
const strawberryInput = document.querySelector("#strawberry--input");
const strawberryAdd = document.querySelector("#strawberry--add");
const strawberryDel = document.querySelector("#strawberry--del");
const strawberryToCart = document.querySelector("#add--strawberry--cart");
//

// Orange
const orangePrice = document.querySelector("#orange--price");
const orangeInput = document.querySelector("#orange--input");
const orangeAdd = document.querySelector("#orange--add");
const orangeDel = document.querySelector("#orange--del");
const orangeToCart = document.querySelector("#add--orange--cart");

// Pear
const pearPrice = document.querySelector("#pear--price");
const pearInput = document.querySelector("#pear--input");
const pearAdd = document.querySelector("#pear--add");
const pearDel = document.querySelector("#pear--del");
const pearToCart = document.querySelector("#add--pear--cart");
//Watermelon
const watermelonPrice = document.querySelector("#watermelon--price");
const watermelonInput = document.querySelector("#watermelon--input");
const watermelonAdd = document.querySelector("#watermelon--add");
const watermelonDel = document.querySelector("#watermelon--del");
const watermelonToCart = document.querySelector("#add--watermelon--cart");

//////////////////////
let totalPriceArray = [];
//
const fruitFunction = function (
  nameOfFruit,
  fruitPrice,
  fruitInput,
  fruitAdd,
  fruitDel,
  fruitToCart
) {
  const fruitPriceNum = Number(fruitPrice.textContent.slice(0, -1));
  //
  fruitAdd.addEventListener("click", function () {
    const fruitInputNum = Number(fruitInput.value);
    fruitInput.value = fruitInputNum + 1;
    // if(fruitInputNum >= 9){
    //   fruitInput.value = 9;
    // }
  });
  //
  fruitDel.addEventListener("click", function () {
    const fruitInputNum = Number(fruitInput.value);
    fruitInput.value = fruitInputNum - 1;
    if (fruitInputNum === 0) {
      fruitInput.value = 0;
    }
  });
  ////// Add fruit to cart
  const answer = document.createElement("h1");
  const total = document.createElement("h1");
  fruitToCart.addEventListener("click", function () {
    if (fruitInput.value == 0) return;
   
    //
    const fruitInputNum = Number(fruitInput.value);
    const totalPrice = +(fruitInputNum * fruitPriceNum).toFixed(2);
    answer.setAttribute("id", "answer");
    total.setAttribute("id", "total");
    totalPriceArray.push({
      name: nameOfFruit,
      price: fruitPriceNum,
      quantityOfKilograms: fruitInputNum,
      totalSingleFruit: totalPrice,
    });
    answer.textContent = `-${fruitInputNum} kg of ${nameOfFruit} costs ${totalPrice}$`;
    total.textContent = `Total ${totalPriceArray
      .map((val) => val.totalSingleFruit)
      .reduce((ac, val) => ac + val, 0)
      .toFixed(2)}$`;
    shoppingBoard.append(answer);
    shoppingBoard.append(total);
    fruitAdd.disabled = true;
    fruitDel.disabled = true;
    fruitInput.disabled = true;
    fruitToCart.disabled = true;
    if (fruitToCart.disabled === true) {
      fruitToCart.style.opacity = "0.5";
      fruitToCart.style.pointerEvents = "none";
    }
    console.log(totalPriceArray);
    const allTotals = document.querySelectorAll("#total");
    for (const total of allTotals) {
      if (total !== shoppingBoard.lastElementChild) {
        total.remove();
      }
    }
    ///////////////
  });
  clearAllBtn.addEventListener("click", function () {
    fruitInput.value = "";
    fruitAdd.disabled = false;
    fruitDel.disabled = false;
    fruitInput.disabled = false;
    fruitToCart.disabled = false;
    fruitToCart.style.opacity = "1";
    fruitToCart.style.pointerEvents = "auto";
    shoppingBoard.innerHTML = "";
    totalPriceArray = [];
  });
};

fruitFunction(
  "banana",
  bananaPrice,
  bananaInput,
  bananaAdd,
  bananaDel,
  bananaToCart
);

fruitFunction("apple", applePrice, appleInput, appleAdd, appleDel, appleToCart);

fruitFunction(
  "strawberry",
  strawberryPrice,
  strawberryInput,
  strawberryAdd,
  strawberryDel,
  strawberryToCart
);
fruitFunction(
  "orange",
  orangePrice,
  orangeInput,
  orangeAdd,
  orangeDel,
  orangeToCart
);
fruitFunction("pear", pearPrice, pearInput, pearAdd, pearDel, pearToCart);

fruitFunction(
  "watermelon",
  watermelonPrice,
  watermelonInput,
  watermelonAdd,
  watermelonDel,
  watermelonToCart
);
