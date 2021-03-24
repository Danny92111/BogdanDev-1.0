const getSection1 = document.querySelector("#about-me-main-container");
const getSection2 = document.querySelector("#Projects-section-main-container");
const getSection3 = document.querySelector("#ServicesContainer");
const getSection4 = document.querySelector("#contactContainer");
const sections = [getSection1,getSection2,getSection3,getSection4];
const bubble = document.querySelector(".bubble");


const options = {
   threshold: 0.4
}


let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
      const className = entry.target.className;
      console.log(className);
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const gradientIndex = entry.target.getAttribute(`data-index`);
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
          height: coords.height,
          width: coords.width,
          top: coords.top,
          left: coords.left
      };
    if (entry.isIntersecting) {
        bubble.style.setProperty('left', `${directions.left}px`);
        bubble.style.setProperty('top', `${directions.top}px`);
        bubble.style.setProperty('width', `${directions.width}px`);
        bubble.style.setProperty('height', `${directions.height}px`);
    }
  });
}

sections.forEach(section => {
    observer.observe(section);
})