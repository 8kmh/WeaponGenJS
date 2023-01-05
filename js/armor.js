import { stats, randomizeArray } from "./utils.js";
import { armorType } from "./data.js";

export class Armor {
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
