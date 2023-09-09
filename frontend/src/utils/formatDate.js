export default function convertTimestampToDateFormat(timestampString, format = "DD-MM-YYYY HH:mm") {
  const date = new Date(timestampString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  format = format.replace("DD", day);
  format = format.replace("MM", month);
  format = format.replace("YYYY", year);
  format = format.replace("HH", hours);
  format = format.replace("mm", minutes);

  return format;
}

// Example usage:
const timestampString = "2023-09-09T07:52:58.900Z";
const formattedDate = convertTimestampToDateFormat(timestampString);
console.log(formattedDate);
