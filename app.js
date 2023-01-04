const weaponType = ["Sword", "Axe", "Slingshot", "Staff"];
const armorType = ["Armor", "Gloves", "Boots"];

const randomizeArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const displayItem = () => {};
// Version en dehors de la class, quel est le mieux ???
// const matchImg = (weapon) => {
//   if (weapon.finalDrop === "Sword") {
//     return "./public/assets/Sword.png";
//   } else if (weapon.finalDrop === "Axe") {
//     return "./public/assets/Axe.png";
//   } else {
//   }
// };

class Weapon {
  damage = Math.floor(Math.random() * (11 - 1) + 1);
  finalDrop = weaponType[randomizeArray(weaponType)];
  imgSrc = this.matchImg();

  matchImg() {
    if (this.finalDrop === "Sword") {
      return "./public/assets/Sword.png";
    } else if (this.finalDrop === "Axe") {
      return "./public/assets/Axe.png";
    } else if (this.finalDrop === "Slingshot") {
      return "./public/assets/Slingshot.png";
    } else if (this.finalDrop === "Staff") {
      return "./public/assets/Staff.png";
    } else {
    }
  }
}

class Armor {
  armor = 2;
  fireRes = 5;
  coldRes = 5;
  lightningRes = 5;
  poisonRes = 5;
  finalDrop = armorType[randomizeArray(armorType)];
  imgSrc = this.matchImg();

  matchImg() {
    if (this.finalDrop === "Armor") {
      return "./public/assets/Armor.png";
    } else if (this.finalDrop === "Gloves") {
      return "./public/assets/Gloves.png";
    } else if (this.finalDrop === "Boots") {
      return "./public/assets/Boots.png";
    } else {
    }
  }
}

document.getElementById("btn").addEventListener("click", function (e) {
  const weapon = new Weapon();
  const armor = new Armor();
  const allClass = [armor, weapon];
  const itemGenerated = allClass[randomizeArray(allClass)];
  document.getElementById(
    "p"
  ).innerHTML = `${itemGenerated.finalDrop} Damage: ${itemGenerated.damage} `;
  document.getElementById("img").setAttribute("src", itemGenerated.imgSrc);
  console.log(itemGenerated);
});
