// get the elements

let getProjects = Array.from(
  document.getElementsByClassName("indiv-container-small-project")
);

let getTitles = Array.from(
  document.getElementsByClassName("title-small-project")
);

let getArrows = Array.from(
  document.getElementsByClassName("arrows-small-project")
);
/// add event listener

getProjects.forEach((proj) => {
  proj.addEventListener("click", () => {
    if (proj.classList.contains("active")) {
      setTimeout(() => {
        proj.style.zIndex = "auto";
        console.log("set");
      }, 1000);
    } else {
      proj.style.zIndex = "2";
    }
    proj.classList.toggle("active");

    proj.ontransitionend = (e) => {
      if (e.propertyName == "opacity") {
        if (proj.classList.contains("active")) {
          console.log(getArrows[0]);
          switch (proj.id) {
            case "small-project-1":
              getArrows[0].classList.add("active-on-arrows");
              break;
            case "small-project-2":
              getArrows[1].classList.add("active-on-arrows");
              break;
            case "small-project-3":
              getArrows[2].classList.add("active-on-arrows");
              break;
            case "small-project-4":
              getArrows[3].classList.add("active-on-arrows");
              break;
          }
        }
      } else if (!proj.classList.contains("active")) {
        switch (proj.id) {
          case "small-project-1":
            getArrows[0].classList.remove("active-on-arrows");
            break;
          case "small-project-2":
            getArrows[1].classList.remove("active-on-arrows");
            break;
          case "small-project-3":
            getArrows[2].classList.remove("active-on-arrows");
            break;
          case "small-project-4":
            getArrows[3].classList.remove("active-on-arrows");
            break;
        }
      }
    };
  });
});
