// Functionize Minecraft Fishing Start Code
//HTML variables

let result = document.getElementById("result-img");
let codCount = document.getElementById("num-cod");
let salmonCount = document.getElementById("num-salmon");
let tropicalCount = document.getElementById("num-tropical");
let pufferCount = document.getElementById("num-puffer");
let fish5 = document.getElementById("fish5");
let til200btn = document.getElementById("til200");
let tilUserNum = document.getElementById("userFish");
let fishInv = document.getElementById("fishInventory");
let sortF = document.getElementById("sortF");
let stackFish = document.getElementById("sF");
//fish count variables
let numC = 0;
let numS = 0;
let numT = 0;
let numP = 0;

//fish in ventory

// Fish Button Event Listener
document.getElementById("fish1").addEventListener("click", fishOnceClicked);
fish5.addEventListener("click", x5);
til200btn.addEventListener("click", fish200);
tilUserNum.addEventListener("click", fishXTimes);
sortF.addEventListener("click", sorting);
//functionsssss
function fishOnceClicked() {
  //determine selected character
  let character = document.getElementById("character-select").value;
  if (character === "steve") {
    //Fish with steve
    //steve fish simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      result.src = "img/Raw-Cod.png";
      numC++;
      codCount.innerHTML = numC;
      fishInv.innerHTML += `<img src = "img/Raw-Cod.png"/>`;
    } else if (randNum < 0.9) {
      result.src = "img/Raw-Salmon.png";
      numS++;
      salmonCount.innerHTML = numS;
      fishInv.innerHTML += `<img src = "img/Raw-Salmon.png"/>`;
    } else if (randNum < 0.95) {
      result.src = "img/Tropical-Fish.png";
      numT++;
      tropicalCount.innerHTML = numT;
      fishInv.innerHTML += `<img src = "img/Tropical-Fish.png"/>`;
    } else {
      result.src = "img/Pufferfish.png";
      numP++;
      pufferCount.innerHTML = numP;
      fishInv.innerHTML += `<img src = "img/Pufferfish.png"/>`;
    }
  } else if (character === "alex") {
    //fish with alex
    //alex fish simualtor
    let randNum = Math.random();
    if (randNum < 0.5) {
      result.src = "img/Pufferfish.png";
      console.log("Puffer");
      numP++;
      pufferCount.innerHTML = numP;
      fishInv.innerHTML += `<img src = "img/Pufferfish.png"/>`;
    } else if (randNum < 0.8) {
      result.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numT++;
      tropicalCount.innerHTML = numT;
      fishInv.innerHTML += `<img src = "img/Tropical-Fish.png"/>`;
    } else if (randNum < 0.9) {
      result.src = "img/Raw-Salmon.png";
      console.log("Salmmon");
      numS++;
      salmonCount.innerHTML = numS;
      fishInv.innerHTML += `<img src = "img/Raw-Salmon.png"/>`;
    } else {
      result.src = "img/Raw-Cod.png";
      console.log("Cod");
      numC++;
      codCount.innerHTML = numC;
      fishInv.innerHTML += `<img src = "img/Raw-Cod.png"/>`;
    }
  } else if (character === "villager") {
    //villlager fishing simualtor
    let randNum = Math.random();
    if (randNum < 0.25) {
      result.src = "img/Raw-Cod.png";
      console.log("Cod");
      numC++;
      codCount.innerHTML = numC;
      fishInv.innerHTML += `<img src = "img/Raw-Cod.png"/>`;
    } else if (randNum < 0.5) {
      result.src = "img/Raw-Salmon.png";
      console.log("Salmmon");
      numS++;
      salmonCount.innerHTML = numS;
      fishInv.innerHTML += `<img src = "img/Raw-Salmon.png"/>`;
    } else if (randNum < 0.75) {
      result.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numT++;
      tropicalCount.innerHTML = numT;
      fishInv.innerHTML += `<img src = "img/Tropical-Fish.png"/>`;
    } else {
      result.src = "img/Pufferfish.png";
      console.log("Puffer");
      numP++;
      pufferCount.innerHTML = numP;
      fishInv.innerHTML += `<img src = "img/Pufferfish.png"/>`;
    }
    console.log(randNum);
  }
}
//other fishing buttons
function x5() {
  for (let f = 1; f <= 5; f++) {
    fishOnceClicked();
  }
}

function fish200() {
  let codTrgt = numC + 200;
  let count = 0;
  while (numC < codTrgt) {
    fishOnceClicked();
    count++;
  }
}
let userNum = document.getElementById("userNum");
function fishXTimes() {
  console.log(userNum.value);
  let cnt = 0;
  for (let x = 1; x <= userNum.value; x++) {
    fishOnceClicked();
    cnt++;
  }
}

//sorting fish inventory
function sorting() {
  fishInv.innerHTML = " ";
  let c = 1;
  while (numC >= c) {
    fishInv.innerHTML += `<img src = "img/Raw-Cod.png"/>`;
    c++;
  }
  let s = 1;
  while (numT >= s) {
    fishInv.innerHTML += `<img src = "img/Raw-Salmon.png"/>`;
    s++;
  }
  let t = 1;
  while (numT >= t) {
    fishInv.innerHTML += `<img src = "img/Tropical-Fish.png"/>`;
    t++;
  }

  let p = 1;
  while (numT >= p) {
    fishInv.innerHTML += `<img src = "img/Pufferfish.png"/>`;
    p++;
  }
}
