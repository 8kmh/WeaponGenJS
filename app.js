import { Weapon } from "./js/weapon.js";
import { Armor } from "./js/armor.js";
import { randomizeArray, displayItem } from "./js/utils.js";

document.getElementById("btn").addEventListener("click", function (e) {
  const weapon = new Weapon();
  const armor = new Armor();
  const allClass = [armor, weapon];
  const itemGenerated = allClass[randomizeArray(allClass)];
  console.log(itemGenerated);
  displayItem(itemGenerated);
});
