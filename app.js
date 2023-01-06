import { Weapon } from "./js/weapon.js";
import { Armor } from "./js/armor.js";
import { randomizeArray, displayItem } from "./js/utils.js";

let lastClicked = null;

const button = document.getElementById("btn");
button.addEventListener("click", handleClick);

const timerContainer = document.getElementById("timer"); // Élément où le timer sera affiché

function handleClick() {
  const currentTime = Date.now();
  if (lastClicked === null || currentTime - lastClicked > 120 * 1000) {
    // Le bouton n'a pas été cliqué depuis au moins une heure
    lastClicked = currentTime;
    localStorage.setItem("lastClicked", lastClicked);
    timerContainer.innerHTML = ""; // On vide le timer
    const weapon = new Weapon();
    // Execution du code
    const armor = new Armor();
    const allClass = [armor, weapon];
    const itemGenerated = allClass[randomizeArray(allClass)];
    console.log(itemGenerated);
    displayItem(itemGenerated);
  } else {
    // Le bouton a été cliqué il y a moins d'une heure
    alert("Le bouton ne peut être cliqué que toutes les deux minutes");
    // Calcul du temps restant en minutes et secondes
    const timeLeft = Math.floor(
      (120 * 1000 - (currentTime - lastClicked)) / 1000
    );
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // Affichage du timer
    timerContainer.innerHTML = `Temps restant : ${minutes}:${seconds}`;

    // Set up an interval to update the timer display every second
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = Math.floor(
        (120 * 1000 - (currentTime - lastClicked)) / 1000
      );
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerContainer.innerHTML = `Temps restant : ${minutes}:${seconds}`;
      if (timeLeft <= 0) {
        // The timer has run out, so stop the interval and reset the timer display
        clearInterval(intervalId);
        timerContainer.innerHTML = "";
      }
    }, 1000); // 1000ms = 1s
  }
}

if (localStorage.getItem("lastClicked")) {
  lastClicked = localStorage.getItem("lastClicked");
}
