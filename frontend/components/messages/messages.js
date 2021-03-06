// frontend/components/messages/messages.js
import { setCallback } from "client/chat";
import "components/message/message";
import "./messages.css";

const messages = document.querySelector(".js-messages");
const content = messages.querySelector(".js-messages--content");

function scrollToBottom() {
  content.scrollTop = content.scrollHeight;
}

scrollToBottom();

// Telling `chat.js` to call this piece of code whenever a new message is received
// over Action Cable
setCallback(message => {
  content.insertAdjacentHTML("beforeend", message);
  scrollToBottom();
});
