const tabBtnList = document.querySelectorAll(".tab-btn");
const memberRole = document.querySelector(".member-role");
const memberName = document.querySelector(".member-name");
const memberInfo = document.querySelector(".member-info");
const memberImg = document.querySelector(".member-img");

const crew = [
  {
    name: "Douglas Hurley",
    image: "./assets/crew/image-douglas-hurley.webp",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: "./assets/crew/image-mark-shuttleworth.webp",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: "./assets/crew/image-victor-glover.webp",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: "./assets/crew/image-anousheh-ansari.webp",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

tabBtnList.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabBtnList.forEach((t) => {
      t.classList.remove("tab-btn-active");
    });
    tab.classList.add("tab-btn-active");
    const data = crew[tab.getAttribute("data-number")];
    memberRole.textContent = data.role;
    memberName.textContent = data.name;
    memberInfo.textContent = data.bio;
    memberImg.style.backgroundImage = `url('${data.image}')`;
  });
});
