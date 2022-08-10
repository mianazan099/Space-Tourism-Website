const tabBtnList = document.querySelectorAll(".tab-btn");
const destinationImg = document.querySelector(".destination-img img");
const destinationName = document.querySelector(".destination-name");
const destinationInfo = document.querySelector(".destination-info");
const distance = document.querySelector(".distance");
const travel = document.querySelector(".travel");

const destinations = [
  {
    name: "Moon",
    image: "./assets/destination/image-moon.webp",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: "./assets/destination/image-mars.webp",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: "./assets/destination/image-europa.webp",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: "./assets/destination/image-titan.webp",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

tabBtnList.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabBtnList.forEach((t) => {
      t.classList.remove("tab-btn-active");
    });
    tab.classList.add("tab-btn-active");
    const data = destinations[tab.getAttribute("data-number")];
    destinationImg.src = data.image;
    destinationName.textContent = data.name;
    destinationInfo.textContent = data.description;
    distance.textContent = data.distance;
    travel.textContent = data.travel;
  });
});
