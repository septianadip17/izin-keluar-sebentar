const card = document.querySelector(".status-card");
const bg = document.querySelector(".bg-layer");

document.addEventListener("mousemove", (e) => {
  if (!card || card.classList.contains("hidden")) return;

  const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
  const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

  card.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  bg.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
});
