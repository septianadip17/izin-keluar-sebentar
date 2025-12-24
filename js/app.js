const selectScreen = document.getElementById("selectScreen");
const statusCard = document.getElementById("statusCard");
const bgLayer = document.querySelector(".bg-layer");

const statusIcon = document.getElementById("statusIcon");
const statusTitle = document.getElementById("statusTitle");
const statusSubtitle = document.getElementById("statusSubtitle");
const customText = document.getElementById("customText");

const STATUS_MAP = {
  toilet: {
    icon: "🚻",
    title: "Ke Toilet",
    subtitle: "Izin sebentar ke toilet",
  },
  makan: {
    icon: "🍽️",
    title: "Cari Makan",
    subtitle: "Izin keluar sebentar untuk makan",
  },
};

document.querySelectorAll(".options button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    let data;

    if (type === "other") {
      if (!customText.value.trim()) {
        alert("Silakan isi izin terlebih dahulu");
        return;
      }

      data = {
        icon: "📝",
        title: "Sedang Keluar",
        subtitle: customText.value,
      };
    } else {
      data = STATUS_MAP[type];
    }

    showStatus(data);
  });
});

function showStatus(data) {
  statusIcon.textContent = data.icon;
  statusTitle.textContent = data.title;
  statusSubtitle.textContent = data.subtitle;

  selectScreen.classList.add("hidden");
  statusCard.classList.remove("hidden");
  bgLayer.classList.remove("hidden");
}
