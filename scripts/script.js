const heroDiv = document.getElementById("heroSlider")
import heroComponent from "./components/heroComponent.js";

const heroImage1URL = "./assets/images/1.png"
const heroImage2URL = "./assets/images/2.png"
const heroImage3URL = "./assets/images/3.png"
const heroP1 = "Frase 1"
const heroP2 = "Frase 2"
const heroP3 = "Frase 3"

const url = "https://sheets.googleapis.com/v4/spreadsheets/18XLzuyYJm9HdyiVWR8-mz64l2LfzKzym3nrtyXAkso8/values/products!A:G?key=AIzaSyAtlxUEuKZG1L3L9SLjFXXUzCezLkZ6kOU"

const formulated_hero = heroComponent("Marca de Café", "Marca de Café", "Marca de Café", heroImage1URL, heroImage2URL, heroImage3URL, heroP1, heroP2, heroP3)
heroDiv.innerHTML = formulated_hero