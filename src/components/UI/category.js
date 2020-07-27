export default class Category {
  constructor() {
    this.dropdownClickCount = 0;
  }

  handleMainCategorySelectionClick() {
    document.querySelector(".category-btn").addEventListener("click", () => {
      this.dropdownClickCount++;

      function isOdd(num) {
        return num % 2;
      }

      if (isOdd(this.dropdownClickCount) === 1) {
        document.querySelector(".dropdown-content").style = "display:block";
      }
      if (isOdd(this.dropdownClickCount) === 0) {
        document.querySelector(".dropdown-content").style = "display:none";
      }
    });
  }

  handleSelection() {
    setTimeout(() => {
      let mainCategoryList = document.querySelectorAll(".item");

      mainCategoryList.forEach((item, index) => {
        item.addEventListener("click", () => {
          let previousActiveMainCategory = document.querySelector(
            ".item.active"
          );
          if (previousActiveMainCategory != undefined) {
            previousActiveMainCategory.className = "item";
          }
          item.className = "item active";
          document.querySelector(".dropbtn").textContent = item.textContent;

          let subCategoryItems = document.querySelectorAll(".sub-category");
          subCategoryItems[index].scrollIntoView({behavior: "smooth"});

          let previousActiveSubcategoryItem = document.querySelector(
            ".sub-category.active"
          );
          if (previousActiveSubcategoryItem != undefined) {
            previousActiveSubcategoryItem.className = "sub-category";
          }

          subCategoryItems[index].className = "sub-category active";

          // document.querySelector(".dropdown-content").style = "display:none"
        });
      });
    }, 1000);
  }
}
