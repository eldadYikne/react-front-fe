export function getCurrentDate(date: number): string {
  const newDate: Date = new Date(date);
  const year: number = newDate.getFullYear();
  let month: number | string = newDate.getMonth() + 1;
  let day: number | string = newDate.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${day}/${month}/${year}`;
}
