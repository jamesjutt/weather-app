const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

const createP = (message, className) => {
  const tag = document.createElement("p");
  tag.className = className || "";
  const text = document.createTextNode(message);
  tag.appendChild(text);
  return tag;
};

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`/weather?address=${location}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        console.log(data);
        messageOne.textContent = data.location;
        for (const key in data.forecast) {
          messageTwo.appendChild(createP(`${key}: ${data.forecast[key]}`));
        }
      }
    });
});
