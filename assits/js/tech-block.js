const techItems = document.querySelectorAll(".technologies-item");
const techInforItems = document.querySelectorAll(".technologies-infor-item");

const techActive = document.querySelector(".technologies-item.visible");





techItems.forEach((tab, index) => {
  const techInfor = techInforItems[index];

  tab.onclick = function () {
    document.querySelector(".technologies-item.visible").classList.remove("visible");
    document.querySelector(".technologies-infor-item.visible").classList.remove("visible");
    this.classList.add("visible");
    techInfor.classList.add("visible");
  };
});
