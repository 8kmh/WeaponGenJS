import { stats, randomizeArray } from "./utils.js";
import { weaponType } from "./data.js";

export class Weapon {
  constructor() {
    this.damage = stats();
    this.finalDrop = weaponType[randomizeArray(weaponType)];
    this.imgSrc = this.matchImg();
    this.numberQuality = Math.floor(Math.random() * (1400 - 1) + 1);
    this.quality = this.checkQuality();
  }

  matchImg() {
    switch (this.finalDrop) {
      case "Sword":
        return "./public/assets/Sword.png";
      case "Axe":
        return "./public/assets/Axe.png";
      case "Slingshot":
        return "./public/assets/Slingshot.png";
      case "Staff":
        return "./public/assets/Staff.png";
      default:
        return ""; // Retourne une chaîne vide par défaut
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
    } else {
      return "Légendaire";
    }
  }
}
