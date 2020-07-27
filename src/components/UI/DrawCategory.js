export default class DrawCategory {
  constructor(projectID) {
    this.projectID = projectID;
    this.baseUrl = "https://web-pano-player.s3.ap-south-1.amazonaws.com/";
  }

  drawCategoryData() {
    let projectID = this.projectID

    let categoryDataUrl = `${this.baseUrl}${this.projectID}/category-data.json`;
    fetch(categoryDataUrl)
      .then((res) => res.json())
      .then((data) => {
        drawUI(data);
      })
      .catch((err) => console.error(err));

    function drawUI(data) {

      data.data.forEach((element, index) => {
        let selectBtnItems = document.createElement("div");
        selectBtnItems.className = "item";

        selectBtnItems.innerHTML = `
        <div class="tick"></div>
        <div class="gap"></div>${element.name}`;
        document
          .querySelector(".main-category-items")
          .appendChild(selectBtnItems);

        let subcategoryHeading = document.createElement("div");
        subcategoryHeading.className = "sub-category";
        subcategoryHeading.innerHTML = `
        <div class="heading">
            <span>${element.name}</span> 
        </div>`;
        document.querySelector(".category").appendChild(subcategoryHeading);
      });

      let subCategoryElements = document.querySelectorAll(".sub-category");

      data.data.forEach((element, index) => {
        let thumbnailData = element.subCategory;

        let thumbnailDiv = document.createElement("div");
        thumbnailDiv.className = "thumbnails";
        subCategoryElements[index].appendChild(thumbnailDiv);

        thumbnailData.forEach((items) => {
          let itemDiv = document.createElement("div");
          itemDiv.className = "items";
          itemDiv.innerHTML = `
            <img
                src="https://web-pano-player.s3.ap-south-1.amazonaws.com/${projectID}/category/${items.imageuuid}.jpg">
            <div class="title">
                <label>${items.name}</label>
            </div>`;
            thumbnailDiv.appendChild(itemDiv)
        });
      });
    }
  }
}
