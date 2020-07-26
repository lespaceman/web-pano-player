export default class fetchData {
  constructor(projectID) {
    this.projectID = projectID;
    this.baseUrl = "https://web-pano-player.s3.ap-south-1.amazonaws.com/";
  }
  drawCategoryData() {
    let categoryDataUrl = `${this.baseUrl}${this.projectID}/category-data.json`;
    fetch(categoryDataUrl)
      .then((res) => res.json())
      .then((data) => {
        drawUI(data);
      })
      .catch((err) => console.error(err));

    function drawUI(data) {
      data.data.forEach((element) => {
        console.log(element);

        let selectBtnItems = document.createElement("div");
        selectBtnItems.className = "item";

        selectBtnItems.innerHTML = `
        <div class="tick"></div>
        <div class="gap"></div>${element.name}`;
        document
          .querySelector(".main-category-items")
          .appendChild(selectBtnItems);

        let subCategory = element.subCategory;
        let subcategoryHeading = document.createElement("div");
        subcategoryHeading.className = "sub-category";
        subcategoryHeading.innerHTML = `
        <div class="heading">
            <span>${element.name}</span> 
        </div>`;
        document.querySelector(".category").appendChild(subcategoryHeading);

        subCategory.forEach((element) => {
          let items = document.createElement("div");
          items.className = "items";
 
          
          items.innerHTML = `

              <img src="https://s.zillowstatic.com/z3d-home/models/marketing-360-theta-v/pano/4635b5ce46/891541/thumbnail.jpg">
              <div class="title">
                  <label>${element.name}</label>
              </div>

          `;
          document.querySelector(".thumbnails").appendChild(items);
        });

        // `<div class="sub-category">

        //     <div class="heading">
        //         <span>${element.name}</span>
        //     </div>

        //     <div class="thumbnails">
        //         <div class="items active">
        //             <img src="https://s.zillowstatic.com/z3d-home/models/marketing-360-theta-v/pano/4635b5ce46/891541/thumbnail.jpg">
        //             <div class="title">
        //                 <label>${subCategory.forEach(element => {element.name})}</label>
        //             </div>
        //         </div>

        //         <div class="items active">
        //             <img src="https://s.zillowstatic.com/z3d-home/models/marketing-360-theta-v/pano/4635b5ce46/891541/thumbnail.jpg">
        //             <div class="title">
        //                 <label>Bedroom</label>
        //             </div>
        //         </div>
        //     </div>

        // </div>`
      });
    }
  }
}
