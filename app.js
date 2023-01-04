const weaponType = ["Sword", "Axe", "Slingshot", "Staff"];
const armorType = ["Armor", "Gloves", "Boots"];
//const quality = ["Common", "Magic", "Rare", "Epic", "Legendary"];

const randomizeArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const displayItem = (item) => {
  // Affichage d'une arme
  if (item.damage) {
    document.getElementById(
      "p"
    ).innerHTML = `${item.finalDrop} ${item.quality}<br>
                      Damage: ${item.damage}`;
    document.getElementById("img").setAttribute("src", item.imgSrc);
  } else {
    // Affichage d'une armure
    if (item.armor) {
      document.getElementById(
        "p"
      ).innerHTML = ` ${item.finalDrop} ${item.quality}<br>
                      armor ${item.armor}<br>
                      Fire Resistance ${item.fireRes}<br>
                      Cold Resistance ${item.coldRes}<br>
                      Lightning Resistance ${item.lightningRes}<br>
                      Poison Resistance ${item.poisonRes}
                      
      `;
      document.getElementById("img").setAttribute("src", item.imgSrc);
    }
  }
};

const stats = () => {
  return Math.floor(Math.random() * (11 - 1) + 1);
};

const qualityMultiplier = () => {};
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
  damage = stats();
  finalDrop = weaponType[randomizeArray(weaponType)];
  imgSrc = this.matchImg();
  numberQuality = Math.floor(Math.random() * (1400 - 1) + 1);
  quality = this.checkQuality();

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

  checkQuality() {
    if (this.numberQuality > 1 && this.numberQuality < 600) {
      return "Common";
    } else if (this.numberQuality >= 600 && this.numberQuality < 1000) {
      return "Magic";
    } else if (this.numberQuality >= 1000 && this.numberQuality < 1200) {
      return "Rare";
    } else if (this.numberQuality >= 1200 && this.numberQuality <= 1399) {
      return "Epic";
    } else if (this.numberQuality == 1400) {
      return "Légendaire";
    }
  }
}

class Armor {
  armor = stats();
  fireRes = stats();
  coldRes = stats();
  lightningRes = stats();
  poisonRes = stats();
  finalDrop = armorType[randomizeArray(armorType)];
  imgSrc = this.matchImg();
  numberQuality = Math.floor(Math.random() * (1400 - 1) + 1);
  quality = this.checkQuality();

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

  checkQuality() {
    if (this.numberQuality > 1 && this.numberQuality < 600) {
      return "Common";
    } else if (this.numberQuality >= 600 && this.numberQuality < 1000) {
      return "Magic";
    } else if (this.numberQuality >= 1000 && this.numberQuality < 1200) {
      return "Rare";
    } else if (this.numberQuality >= 1200 && this.numberQuality <= 1399) {
      return "Epic";
    } else if (this.numberQuality == 1400) {
      return "Légendaire";
    }
  }
}

document.getElementById("btn").addEventListener("click", function (e) {
  const weapon = new Weapon();
  const armor = new Armor();
  const allClass = [armor, weapon];
  const itemGenerated = allClass[randomizeArray(allClass)];
  console.log(itemGenerated);
  displayItem(itemGenerated);
});

// item quality 1400: common -> 1-599
//                    Magic  -> 600-999
//                    Rare   -> 1000-1199
//                    Epic   -> 1200-1299
//                    Legendaire -> 1400
