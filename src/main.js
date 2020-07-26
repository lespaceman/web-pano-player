import Category from "./components/UI/category.js";
import { init as initializeScene } from "./scene.js";
import fetchData from "./components/API/fetchPlayerData.js";

let category = new Category();
category.handleMainCategoryClick();

let playerData = new fetchData("grand-hyatt");

playerData
  .drawCategoryData()

