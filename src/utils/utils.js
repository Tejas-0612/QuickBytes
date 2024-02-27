export const formatMilliseconds = (milliseconds) => {
  const date = new Date(milliseconds);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;

  const dayOfWeek = date.toLocaleString("default", { weekday: "long" });

  return `${formattedHours}:${minutes} ${ampm} on ${dayOfWeek}, ${day} ${month} ${year}`;
};
