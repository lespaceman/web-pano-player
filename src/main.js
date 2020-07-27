import Category from "./components/UI/category.js";
import { init as initializeScene } from "./scene.js";
import DrawCategory from "./components/UI/DrawCategory.js";

let playerData = new DrawCategory("grand-hyatt");

playerData.drawCategoryData();

let category = new Category();
category.handleMainCategorySelectionClick();

document.addEventListener("DOMContentLoaded", category.handleSelection());


