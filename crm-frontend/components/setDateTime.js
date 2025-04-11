function formatDate(data) {
  const newDate = new Date(data);
  const resultDate = newDate.toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return resultDate;
}

function formatTime(data) {
  const newDate = new Date(data);
  const resultTime = newDate.toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
  });
  return resultTime;
}

export { formatDate, formatTime };
