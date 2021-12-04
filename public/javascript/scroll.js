var botButton = document.getElementById("back-on-top");

var linkA = document.getElementById("linkA");
var linkB = document.getElementById("linkB");
var linkC = document.getElementById("linkC");
var linkD = document.getElementById("linkD");

var homeSection = document.getElementById("home");
var skillsSection = document.getElementById("skills-and-competences");
var educationSection = document.getElementById(
  "education-and-work-experiences"
);
var contactSection = document.getElementById("contact");

document.addEventListener("scroll", function (e) {
  const y = window.scrollY;
  if (y > 20) {
    botButton.className = "show-me";
  } else {
    botButton.className = "hide-me";
  }

  if (y < homeSection.offsetTop) {
    linkA.classList.add("active");
    linkB.classList.remove("active");
    linkC.classList.remove("active");
    linkD.classList.remove("active");
  }
  if (y > skillsSection.offsetTop - 150) {
    linkA.classList.remove("active");
    linkB.classList.add("active");
    linkC.classList.remove("active");
    linkD.classList.remove("active");
  }
  if (y > educationSection.offsetTop - 150) {
    linkA.classList.remove("active");
    linkB.classList.remove("active");
    linkC.classList.add("active");
    linkD.classList.remove("active");
  }
  if (y > contactSection.offsetTop - contactSection.offsetHeight) {
    linkA.classList.remove("active");
    linkB.classList.remove("active");
    linkC.classList.remove("active");
    linkD.classList.add("active");
  }
});

linkA.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

linkB.onclick = function () {
  window.scrollTo({ top: skillsSection.offsetTop - 70, behavior: "smooth" });
};

linkC.onclick = function () {
  window.scrollTo({ top: educationSection.offsetTop - 70, behavior: "smooth" });
};

linkD.onclick = function () {
  window.scrollTo({ top: contactSection.offsetTop - 70, behavior: "smooth" });
};

function backOnTop() {
  document.querySelector("body").scrollIntoView({
    behavior: "smooth",
  });
}
