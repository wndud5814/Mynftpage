const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();

  let amPm = "AM";

  // let hours = String(date.getHours()).padStart(2, "0");
  let hours = date.getHours();

  if (hours >= 12) amPm = "PM";

  if (hours >= 13) {
    hours %= 12;
    // hours = hours % 12;
  }

  // let hours2 = date.getHours() >= 13 ? date.getHours() % 12 : date.getHours();

  hours = String(hours).padStart(2, "0");

  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);

const QUOTE_LIST = "quotesList";

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  let savedQuotes = localStorage.getItem(QUOTE_LIST);

  if (!savedQuotes) {
    localStorage.setItem(QUOTE_LIST, JSON.stringify(["열심히 살자!"]));

    savedQuotes = localStorage.getItem(QUOTE_LIST);
  }

  let parsedQuotes = JSON.parse(savedQuotes);

  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}

getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  // 로컬 스토리지에 저장
  let savedQuotes = localStorage.getItem(QUOTES_LIST);
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  localStorage.setItem(QUOTES_LIST, JSON.stringify(parsedQuotes));

  // 현재 페이지 반영
  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";

  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}
