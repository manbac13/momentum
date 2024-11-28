export function getFormattedDate(timestamp) {
  const taskTime = new Date(timestamp); // Convert the ISO string to a Date object
  // If the task is older than a day, show the full date
  const day = taskTime.getDate();
  const month = taskTime.toLocaleString("default", { month: "long" });
  const year = taskTime.getFullYear();
  const hours = taskTime.getHours();
  const minutes = taskTime.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${day} ${month}, ${year} at ${formattedHours}:${formattedMinutes} ${ampm}`;
}
