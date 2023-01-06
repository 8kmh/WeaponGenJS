import { stats, randomizeArray } from "./utils.js";
import { armorType } from "./data.js";

export class Armor {
  constructor() {
    this.armor = stats();
    this.fireRes = stats();
    this.coldRes = stats();
    this.lightningRes = stats();
    this.poisonRes = stats();
    this.finalDrop = armorType[randomizeArray(armorType)];
    this.imgSrc = this.matchImg();
    this.numberQuality = Math.floor(Math.random() * (1400 - 1) + 1);
    this.quality = this.checkQuality();
  }

  matchImg() {
    switch (this.finalDrop) {
      case "Armor":
        return "./public/assets/Armor.png";
      case "Gloves":
        return "./public/assets/Gloves.png";
      case "Boots":
        return "./public/assets/Boots.png";
      default:
        return "";
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
