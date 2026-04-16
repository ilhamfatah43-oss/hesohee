function toggleChat() {
  const box = document.getElementById("chatbox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  let text = input.value.toLowerCase();
  if (!text) return;

  chat.innerHTML += `<p><b>Kamu:</b> ${text}</p>`;

  let reply = "Maaf belum paham 😅";

  if (text.includes("harga")) reply = "Mulai dari 10rb 🍞";
  if (text.includes("menu")) reply = "Kami punya roti, croissant, dan cake 🎂";
  if (text.includes("lokasi")) reply = "Kami di Ambarawa 📍";

  chat.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

  input.value = "";
}

document.getElementById("input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") sendMessage();
});