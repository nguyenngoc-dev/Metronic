
 
    const tabs = document.querySelectorAll(".nav-tab-item");
    const panes = document.querySelectorAll(".tab-pane");
    
    const tabActive = document.querySelector(".nav-tab-item.actives");
    const line = document.querySelector(".nav-tabs  .tab-line");
   
    
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
    
    tabs.forEach((tab, index) => {
      const pane = panes[index];
    
      tab.onclick = function () {
        document.querySelector(".nav-tab-item.actives").classList.remove("actives");
        document.querySelector(".tab-pane.actives").classList.remove("actives");
    
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    
        this.classList.add("actives");
        pane.classList.add("actives");
      };
    });


