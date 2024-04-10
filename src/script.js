function updateDateTime() {
  const dateTimeElement = document.getElementById("datetime");
  const now = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formattedDate = now.toLocaleDateString("en-US", dateOptions);
  const formattedTime = now.toLocaleTimeString("en-US", timeOptions);

  dateTimeElement.innerHTML = `${formattedDate} <br> ${formattedTime}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
