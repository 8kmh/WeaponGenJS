export const stats = () => {
  return Math.floor(Math.random() * (11 - 1) + 1);
};

export const randomizeArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const displayItem = (item) => {
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
  //Stockage de l'objet générer dans sessionStorage
  sessionStorage.setItem("itemgenerated", JSON.stringify(item));
};
