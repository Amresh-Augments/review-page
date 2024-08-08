window.onload = init;

function init() {
  updateTime();
  setInterval(updateTime, 60000);
  const wheel = document.getElementById("wheel");
  const submit = document.getElementById("submit");
  wheel.addEventListener("click", rotateWheel);
  submit.addEventListener("click", handleSubmit);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("time").innerText = timeString;
}

function rotateWheel() {
  const wheel = document.getElementById("wheel");
  const face = document.getElementById("face");
  const ratingText = document.querySelector(".rating-text");
  const submit = document.getElementById("submit");

  // Add rotation logic here
  // Example: Rotate by 90 degrees for each click
  const currentRotation = wheel.style.transform.replace(/[^0-9]/g, "") || 0;
  const newRotation = (parseInt(currentRotation) + 90) % 360;
  wheel.style.transform = `rotate(${newRotation}deg)`;

  let rating = "BAD";
  let faceColor = "red";
  switch (newRotation) {
    case 0:
      rating = "BAD";
      faceColor = "red";
      break;
    case 90:
      rating = "OK";
      faceColor = "orange";
      break;
    case 180:
      rating = "GOOD";
      faceColor = "green";
      break;
    case 270:
      rating = "UHG";
      faceColor = "purple";
      break;
  }

  ratingText.innerText = rating;
  submit.style.background = faceColor;

  face.innerHTML = getFaceSVGContent(rating);
}

function getFaceSVGContent(rating) {
  switch (rating) {
    case "BAD":
      return `<circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="red" />
              <circle cx="22" cy="24" r="4" fill="black" />
              <circle cx="42" cy="24" r="4" fill="black" />
              <path d="M20 40 Q32 50, 44 40" stroke="black" stroke-width="2" fill="none" />`;
    case "OK":
      return `<circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="orange" />
              <circle cx="22" cy="24" r="4" fill="black" />
              <circle cx="42" cy="24" r="4" fill="black" />
              <line x1="20" y1="40" x2="44" y2="40" stroke="black" stroke-width="2" />`;
    case "GOOD":
      return `<circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="green" />
              <circle cx="22" cy="24" r="4" fill="black" />
              <circle cx="42" cy="24" r="4" fill="black" />
              <path d="M20 36 Q32 46, 44 36" stroke="black" stroke-width="2" fill="none" />`;
    case "UHG":
      return `<circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="purple" />
              <circle cx="22" cy="24" r="4" fill="black" />
              <circle cx="42" cy="24" r="4" fill="black" />
              <path d="M20 40 Q32 30, 44 40" stroke="black" stroke-width="2" fill="none" />`;
    default:
      return "";
  }
}

function handleSubmit() {
  alert("Thank you for your feedback!");
}
