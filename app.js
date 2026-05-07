let homeScore = 0,
  guestScore = 0;

let homeScoreBoard = document.querySelector(".home__score");
let guestScoreBoard = document.querySelector(".guest__score");

const buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if ("home" in e.target.dataset) {
      homeScore += parseInt(e.target.dataset.home);
      homeScoreBoard.textContent = homeScore;
    } else {
      guestScore += parseInt(e.target.dataset.guest);
      guestScoreBoard.textContent = guestScore;
    }
  });
});
