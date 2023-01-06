export const stats = () => {
  return Math.floor(Math.random() * (11 - 1) + 1);
};

export const randomizeArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const displayItem = (item) => {
  // Récupération des éléments HTML qui vont être modifiés
  const pElement = document.getElementById("p");
  const imgElement = document.getElementById("img");

  let text = "";

  // Construction du texte à afficher en fonction du type d'objet
  if (item.damage) {
    text = `${item.finalDrop} ${item.quality}<br>Damage: ${item.damage}`;
  } else if (item.armor) {
    text = `${item.finalDrop} ${item.quality}<br>
            armor ${item.armor}<br>
            Fire Resistance ${item.fireRes}<br>
            Cold Resistance ${item.coldRes}<br>
            Lightning Resistance ${item.lightningRes}<br>
            Poison Resistance ${item.poisonRes}`;
  }

  // Mise à jour du contenu HTML des éléments
  pElement.innerHTML = text;
  imgElement.setAttribute("src", item.imgSrc);

  // Stockage de l'objet généré dans sessionStorage
  localStorage.setItem("itemgenerated", JSON.stringify(item));
};
