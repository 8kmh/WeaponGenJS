import { stats, randomizeArray } from "./utils.js";
import { weaponType } from "./data.js";

export class Weapon {
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
