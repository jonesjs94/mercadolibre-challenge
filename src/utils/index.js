import moment from "moment";

export const handleDate = (date) => {
  let formattedDate = moment(date).format("dddd D [de] MMMM, h:mm:ss a");
  return `${formattedDate.charAt(0).toUpperCase()}${formattedDate.slice(1)}`;
}