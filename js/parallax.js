const card = document.querySelector(".status-card");
const bg = document.querySelector(".bg-layer");

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;

  const x = (e.clientX - innerWidth / 2) / innerWidth;
  const y = (e.clientY - innerHeight / 2) / innerHeight;

  // Card (foreground – lebih terasa)
  card.style.transform = `
    translate(${x * 20}px, ${y * 20}px)
  `;

  // Background (lebih halus)
  bg.style.transform = `
    translate(${x * 40}px, ${y * 40}px)
  `;
});
