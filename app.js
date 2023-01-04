const weaponType = ["Sword", "Sabre", "Dague", "Fléau", "Masse", "Axe"];

const randomWeapon = () => {
  return Math.floor(Math.random() * weaponType.length);
};
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
  finalDrop = weaponType[randomWeapon()];
  imgSrc = this.matchImg();

  matchImg() {
    if (this.finalDrop === "Sword") {
      return "./public/assets/Sword.png";
    } else if (this.finalDrop === "Axe") {
      return "./public/assets/Axe.png";
    } else {
    }
  }
}

document.getElementById("btn").addEventListener("click", function (e) {
  const weapon = new Weapon();
  document.getElementById(
    "p"
  ).innerHTML = `${weapon.finalDrop} Damage: ${weapon.damage} `;
  document.getElementById("img").setAttribute("src", weapon.imgSrc);
});
