const heroDiv = document.getElementById("heroSlider")
import heroComponent from "./components/heroComponent.js";

const heroImage1URL = "./assets/images/1.png"
const heroImage2URL = "./assets/images/2.png"
const heroImage3URL = "./assets/images/3.png"
const heroP1 = "Frase 1"
const heroP2 = "Frase 2"
const heroP3 = "Frase 3"

const formulated_hero = heroComponent("Marca de Café", "Marca de Café", "Marca de Café", heroImage1URL, heroImage2URL, heroImage3URL, heroP1, heroP2, heroP3)
console.log(formulated_hero)
heroDiv.innerHTML = formulated_hero