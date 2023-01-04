const weaponType = ["épée", "Sabre", "Dague", "Fléau", "Masse"];

const randomWeapon = () => {
  return Math.floor(Math.random() * weaponType.length);
};

class Weapon {
  damage = Math.floor(Math.random() * (11 - 1) + 1);
  finalDrop = weaponType[randomWeapon()];
}

document.getElementById("btn").addEventListener("click", function (e) {
  const weapon = new Weapon();
  console.log(weapon);
  document.getElementById(
    "p"
  ).innerHTML = `${weapon.finalDrop} Damage: ${weapon.damage} `;
});
