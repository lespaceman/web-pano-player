export default class Category {
  constructor() {
    this.dropdownClickCount = 0;
  }

  handleMainCategoryClick() {
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
}
