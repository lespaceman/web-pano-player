import Category from "./components/UI/category.js";
import { init as initializeScene } from "./scene.js";
import DrawCategory from "./components/UI/DrawCategory.js";

let category = new Category();
category.handleMainCategoryClick();

let playerData = new DrawCategory("grand-hyatt");

playerData
  .drawCategoryData()

