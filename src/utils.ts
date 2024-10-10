export function getCurrentDate(date: number): string {
  const newDate: Date = new Date(date);
  const year: number = newDate.getFullYear();
  let month: number | string = newDate.getMonth() + 1;
  let day: number | string = newDate.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${day}/${month}/${year}`;
}
export function formatSize(size: number): string {
  if (size === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(size) / Math.log(1024));
  const formattedSize = (size / Math.pow(1024, i)).toFixed(2);
  return `${formattedSize} ${sizes[i]}`;
}
