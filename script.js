const chatForm = document.getElementById("chat-form");

const socket = io();

socket.on("message", (message) => {
  outputMessage(message);
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = e.target.elements.msg.value;
  socket.emit("chatMessage", msg);
});

const outputMessage = (msg) => {
  const div = document.createElement("div");
  div.classList.add("msg");
  div.innerHTML = `<div class="message">
  <p class="meta">Brad <span>9:12pm</span></p>
  <p class="text">
    ${msg}
  </p>
</div>`;
  document.querySelector(".chat-messages").appendChild(div);
};
